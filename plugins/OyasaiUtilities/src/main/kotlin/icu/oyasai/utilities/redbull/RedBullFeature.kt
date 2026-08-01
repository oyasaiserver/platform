package icu.oyasai.utilities.redbull

import icu.oyasai.utilities.OyasaiUtilities.plugin
import io.papermc.paper.datacomponent.DataComponentTypes
import io.papermc.paper.datacomponent.item.Consumable
import io.papermc.paper.datacomponent.item.consumable.ItemUseAnimation
import java.net.URL
import java.time.Duration
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.UUID
import me.realized.tokenmanager.api.TokenManager
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemConsumeEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.permissions.PermissionAttachment
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitTask

/** Red Bull の購入、飲用、一日 Fly 権限を扱う。 */
object RedBullFeature : Listener {
  private const val TOKEN_COST = 20L
  private const val SINGLE_PRICE = 213.0
  private const val SET_PRICE = 2480.0
  private const val FLY_PERMISSION = "essentials.fly"
  private val ticketExpiryKey = NamespacedKey(plugin, "redbull-fly-expiry")
  private val redBullKey = NamespacedKey(plugin, "redbull-item")
  private val activeTickets = mutableMapOf<UUID, PermissionAttachment>()
  private val expiryFormatter = DateTimeFormatter.ofPattern("MM/dd HH:mm").withZone(ZoneId.of("Asia/Tokyo"))
  private var expiryTask: BukkitTask? = null

  fun onEnable() {
    Bukkit.getOnlinePlayers().forEach(::restoreTicket)
    expiryTask =
      Bukkit.getScheduler().runTaskTimer(plugin, Runnable { Bukkit.getOnlinePlayers().forEach(::expireIfNeeded) }, 20L, 20L * 30)
  }

  fun onDisable() {
    expiryTask?.cancel()
    activeTickets.values.forEach { it.remove() }
    activeTickets.clear()
  }

  fun buy(senderName: String, target: Player, amount: Int): Boolean {
    val price = if (amount == 1) SINGLE_PRICE else SET_PRICE
    val economy = economy() ?: run {
      Bukkit.getConsoleSender().sendMessage("§c[RedBull] Vault の経済プロバイダーが見つかりません。")
      return false
    }
    if (economy.getBalance(target) < price) {
      target.sendMessage("§cRed Bull の購入には ${price.toInt()}円必要です。")
      return false
    }
    val result = economy.withdrawPlayer(target, price)
    if (!result.transactionSuccess()) {
      target.sendMessage("§c料金の支払いに失敗しました。")
      return false
    }

    val leftovers =
      target.inventory.addItem(
        createItem(amount, activeExpiry(target), hasActiveTicket(target) || hasPermanentFly(target))
      )
    leftovers.values.forEach { target.world.dropItemNaturally(target.location, it) }
    target.sendMessage("§6§lRed Bull §r§bを入手しました！")
    Bukkit.getConsoleSender().sendMessage("§a$senderName が ${target.name} に Red Bull を渡しました。")
    return true
  }

  /** メニューの /redbull 用。アイテムを使わず、必要な場合だけポイントで一日券を購入する。 */
  fun activateFromCommand(player: Player) {
    when (activateTicket(player)) {
      ActivationResult.ACTIVATED -> {
        refreshItems(player)
        player.sendMessage("§bfly を有効にしました！")
      }
      ActivationResult.INSUFFICIENT_TOKENS -> Unit
      ActivationResult.TOKEN_MANAGER_UNAVAILABLE -> Unit
    }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun onInteract(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_BLOCK || !isRedBull(event.item)) return
    // 消費処理を優先させ、プレイヤーヘッドがブロックとして置かれるのを防ぐ。
    event.setUseInteractedBlock(org.bukkit.event.Event.Result.DENY)
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    restoreTicket(event.player)
    refreshItems(event.player)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    // 権限の期限は Player PDC に保存済みのため、ログアウト時の追加処理は不要。
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    val player = event.player
    if (hasActiveTicket(player)) {
      Bukkit.getScheduler().runTask(plugin, Runnable { enableFlight(player) })
    }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun onConsume(event: PlayerItemConsumeEvent) {
    if (!isRedBull(event.item)) return
    val player = event.player
    if (hasActiveTicket(player) || hasPermanentFly(player)) {
      event.isCancelled = true
      enableFlight(player)
      refreshItems(player)
      player.sendMessage("§bfly を有効にしました。Red Bull は消費されません。")
      return
    }

    when (activateTicket(player)) {
      ActivationResult.ACTIVATED -> {
        // ItemConsumeEvent の完了後に、残った Red Bull の期限表示だけを更新する。
        Bukkit.getScheduler().runTask(plugin, Runnable { refreshItems(player) })
        player.sendMessage("§6Red Bull を飲み、24時間の fly 権限を取得しました！")
      }
      ActivationResult.INSUFFICIENT_TOKENS,
      ActivationResult.TOKEN_MANAGER_UNAVAILABLE -> {
        // 権限を取得できなかった場合は、飲み終えたアイテムを失わせない。
        event.isCancelled = true
      }
    }
  }

  private fun activateTicket(player: Player): ActivationResult {
    if (hasActiveTicket(player) || hasPermanentFly(player)) {
      enableFlight(player)
      return ActivationResult.ACTIVATED
    }
    val tokenManager = tokenManager() ?: run {
      player.sendMessage("§cTokenManager が見つからないため、Red Bull を使用できません。")
      return ActivationResult.TOKEN_MANAGER_UNAVAILABLE
    }
    val balance = tokenManager.getTokens(player).orElse(0L)
    if (balance < TOKEN_COST) {
      player.sendMessage("§cポイントが不足しています。必要: ${TOKEN_COST}P / 所持: ${balance}P")
      return ActivationResult.INSUFFICIENT_TOKENS
    }
    if (!tokenManager.removeTokens(player, TOKEN_COST)) {
      player.sendMessage("§cポイントの消費に失敗しました。残高は変更されていません。")
      return ActivationResult.INSUFFICIENT_TOKENS
    }

    val expiry = Instant.now().plus(Duration.ofDays(1))
    player.persistentDataContainer.set(ticketExpiryKey, PersistentDataType.LONG, expiry.toEpochMilli())
    attachTicket(player)
    enableFlight(player)
    return ActivationResult.ACTIVATED
  }

  private fun restoreTicket(player: Player) {
    if (hasActiveTicket(player)) {
      attachTicket(player)
      enableFlight(player)
    } else {
      expireIfNeeded(player)
    }
  }

  private fun attachTicket(player: Player) {
    if (activeTickets.containsKey(player.uniqueId)) return
    activeTickets[player.uniqueId] = player.addAttachment(plugin, FLY_PERMISSION, true)
  }

  private fun expireIfNeeded(player: Player) {
    val expiry = activeExpiry(player) ?: return
    if (expiry.isAfter(Instant.now())) return
    player.persistentDataContainer.remove(ticketExpiryKey)
    activeTickets.remove(player.uniqueId)?.remove()
    if (!hasPermanentFly(player) && player.gameMode != GameMode.CREATIVE) {
      player.isFlying = false
      player.allowFlight = false
    }
    refreshItems(player)
    player.sendMessage("§eRed Bull の fly 権限が期限切れになりました。")
  }

  private fun hasActiveTicket(player: Player): Boolean {
    val expiry = activeExpiry(player) ?: return false
    if (!expiry.isAfter(Instant.now())) {
      expireIfNeeded(player)
      return false
    }
    return true
  }

  private fun activeExpiry(player: Player): Instant? {
    val epochMillis = player.persistentDataContainer.get(ticketExpiryKey, PersistentDataType.LONG) ?: return null
    return Instant.ofEpochMilli(epochMillis)
  }

  private fun hasPermanentFly(player: Player): Boolean {
    return player.hasPermission("group.jokyu") ||
      player.hasPermission("group.builder") ||
      player.hasPermission("group.takumi") ||
      (!activeTickets.containsKey(player.uniqueId) && player.hasPermission(FLY_PERMISSION))
  }

  private fun enableFlight(player: Player) {
    if (player.gameMode == GameMode.SPECTATOR) return
    player.allowFlight = true
    player.isFlying = true
  }

  private fun createItem(amount: Int, expiry: Instant?, fastConsume: Boolean): ItemStack {
    val item = ItemStack(Material.PLAYER_HEAD, amount)
    // このプロジェクトの Paper API では SkullMeta が旧 Paper PlayerProfile 型を要求する。
    val profile = Bukkit.createProfile(UUID.randomUUID())
    val textures = profile.textures
    textures.skin = URL("https://textures.minecraft.net/texture/766844d5e84f649451a87dacca7a73beaa04eea847d438de26c2d44d1e949de")
    profile.setTextures(textures)
    item.editMeta(SkullMeta::class.java) { meta ->
      meta.playerProfile = profile
      meta.displayName(Component.text("Red Bull", NamedTextColor.GOLD).decorate(net.kyori.adventure.text.format.TextDecoration.BOLD))
      meta.lore(
        listOf(
          Component.text("🪽翼を授ける🪽", NamedTextColor.AQUA),
          Component.text("一日フライ券を購入していない場合、", NamedTextColor.YELLOW),
          Component.text("20Pを消費して24時間 fly が使えます", NamedTextColor.YELLOW),
          Component.text("※有効時間は上書きされません", NamedTextColor.RED),
          Component.text("(上級者以上はポイントを消費しません)", NamedTextColor.GRAY),
          Component.empty(),
          expiryLine(expiry),
        )
      )
      meta.persistentDataContainer.set(redBullKey, PersistentDataType.BYTE, 1)
    }
    item.setData(
      DataComponentTypes.CONSUMABLE,
      Consumable.consumable()
        .consumeSeconds(if (fastConsume) 0.8f else 2.0f)
        .animation(ItemUseAnimation.DRINK)
        .sound(Key.key("entity.generic.drink"))
        .hasConsumeParticles(true),
    )
    return item
  }

  private fun expiryLine(expiry: Instant?): Component {
    return if (expiry == null) {
      Component.text("fly有効期限: 使用後24時間", NamedTextColor.GRAY)
    } else {
      Component.text("fly有効期限: ${expiryFormatter.format(expiry)}", NamedTextColor.LIGHT_PURPLE)
    }
  }

  private fun refreshItems(player: Player) {
    val expiry = activeExpiry(player)?.takeIf { it.isAfter(Instant.now()) }
    val fastConsume = expiry != null || hasPermanentFly(player)
    for (slot in 0 until player.inventory.size) {
      val item = player.inventory.getItem(slot) ?: continue
      if (!isRedBull(item)) continue
      player.inventory.setItem(slot, createItem(item.amount, expiry, fastConsume))
    }
  }

  private fun isRedBull(item: ItemStack?): Boolean {
    return item?.itemMeta?.persistentDataContainer?.has(redBullKey, PersistentDataType.BYTE) == true
  }

  private fun tokenManager(): TokenManager? = Bukkit.getPluginManager().getPlugin("TokenManager") as? TokenManager

  private fun economy(): Economy? = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider

  private enum class ActivationResult {
    ACTIVATED,
    INSUFFICIENT_TOKENS,
    TOKEN_MANAGER_UNAVAILABLE,
  }
}
