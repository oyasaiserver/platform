package icu.oyasai.utilities.items

import icu.oyasai.utilities.Main
import java.util.logging.Level
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabExecutor
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

/** 特殊アイテムの台帳。登録したアイテムを、ルールに従って何度でも受け取れる。番号は登録順。 */
class ItemsFeature(private val plugin: Main) : Listener, TabExecutor {
  private lateinit var store: ItemStore

  private class ItemsGui(val ids: List<Int>, val page: Int, val pages: Int, val query: String?) :
      InventoryHolder {
    lateinit var inv: Inventory

    override fun getInventory(): Inventory = inv
  }

  fun enable() {
    store = ItemStore(requireNotNull(plugin.database) { "Shared SQLite database is unavailable" })
    store.load()
    val command = requireNotNull(plugin.getCommand("items")) { "items is missing from plugin.yml" }
    command.setExecutor(this)
    command.tabCompleter = this
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  fun disable() {
    HandlerList.unregisterAll(this)
    Bukkit.getOnlinePlayers()
        .filter { it.openInventory.topInventory.holder is ItemsGui }
        .forEach { it.closeInventory() }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    val staff = sender.hasPermission(MANAGE)
    when (args.firstOrNull()?.lowercase()) {
      null -> (sender as? Player)?.let { openGui(it, 0, null) } ?: sender.sendMessage(PLAYER_ONLY)
      "help" -> {
        sender.sendMessage("§6アイテム台帳のヘルプ")
        sender.sendMessage(usage(staff))
        sender.sendMessage("§7番号は登録順で、一覧の No. に表示されます。")
        if (staff) sender.sendMessage("§7ルール: free=誰でも何度でも、once=1人1回、staff=運営のみ")
      }
      "get" -> get(sender, args)
      "search" -> search(sender, args)
      "register",
      "update",
      "remove",
      "restore",
      "info",
      "reset" -> if (staff) admin(sender, args) else sender.sendMessage("§cこのコマンドを使う権限がありません。")
      else -> sender.sendMessage(usage(staff))
    }
    return true
  }

  private fun usage(staff: Boolean): String = buildString {
    append(
        "§e/items §7— 一覧を開く\n§e/items help §7— このヘルプ\n§e/items search <名前> §7— 名前で探す\n§e/items get <番号> §7— 受け取る"
    )
    if (staff) {
      append("\n§e/items register [free|once|staff] [説明] §7— 手に持ったものを登録（番号は自動）")
      append("\n§e/items update <番号> [free|once|staff] §7— 手に持ったもので置き換え")
      append("\n§e/items remove <番号> §7— 一覧から外す（番号は再利用されない）")
      append("\n§e/items restore <番号> §7— 削除済みの登録を一覧に戻す")
      append("\n§e/items info [番号] §7— 詳細（番号なしは手に持ったものを探す）")
      append("\n§e/items reset <番号> <プレイヤー> §7— 「1人1回」の受取済みを消す")
    }
  }

  private fun get(sender: CommandSender, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val id = ItemRules.parseNumber(args.getOrNull(1)) ?: return player.sendMessage(usage(false))
    claim(player, id)
  }

  private fun search(sender: CommandSender, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val query = args.drop(1).joinToString(" ").trim()
    if (query.isEmpty()) return player.sendMessage(usage(false))
    openGui(player, 0, query)
  }

  private fun claim(player: Player, id: Int) {
    val staff = player.hasPermission(MANAGE)
    val entry = store.get(id)
    if (entry == null || !ItemRules.visibleTo(entry.rule, staff)) {
      player.sendMessage(UNKNOWN)
      return
    }
    ItemRules.denial(entry.rule, staff, store.hasClaimed(id, player.uniqueId))?.let {
      player.sendMessage("§c$it")
      return
    }
    val item =
        runCatching { ItemStack.deserializeBytes(entry.bytes) }
            .getOrElse {
              plugin.logger.log(Level.SEVERE, "Items: cannot read stored item No.$id", it)
              player.sendMessage("§cアイテムを読み込めませんでした。運営に伝えてください。")
              return
            }
    val leftover = player.inventory.addItem(item).values
    leftover.forEach { player.world.dropItem(player.location, it) }
    store.recordClaim(id, player.uniqueId, System.currentTimeMillis())
    player.sendMessage("§a「${entry.name}」を受け取りました。")
    if (leftover.isNotEmpty()) player.sendMessage("§e持ち物がいっぱいなので、足元に落としました。")
  }

  private fun admin(sender: CommandSender, args: Array<String>) {
    val sub = args[0].lowercase()
    if (sub == "register") return register(sender, args)
    if (sub == "info" && args.size == 1) return infoHeldItem(sender)
    val id = ItemRules.parseNumber(args.getOrNull(1)) ?: return sender.sendMessage(usage(true))
    when (sub) {
      "update" -> update(sender, id, args)
      "remove" -> {
        val entry = store.get(id) ?: return sender.sendMessage(UNKNOWN)
        store.put(entry.copy(enabled = false))
        sender.sendMessage("§aNo.$id「${entry.name}」を一覧から外しました。取得履歴は残り、番号は再利用されません。")
      }
      "restore" -> {
        val entry =
            store.allIncludingRemoved().firstOrNull { it.id == id }
                ?: return sender.sendMessage(UNKNOWN)
        if (entry.enabled) return sender.sendMessage("§eNo.$id はすでに一覧にあります。")
        store.put(entry.copy(enabled = true))
        sender.sendMessage("§aNo.$id「${entry.name}」を一覧に戻しました。")
      }
      "info" -> {
        val entry = store.get(id) ?: return sender.sendMessage(UNKNOWN)
        showInfo(sender, entry)
      }
      "reset" -> {
        store.get(id) ?: return sender.sendMessage(UNKNOWN)
        val name = args.getOrNull(2) ?: return sender.sendMessage(usage(true))
        val target =
            Bukkit.getOfflinePlayerIfCached(name) ?: return sender.sendMessage("§cそのプレイヤーは見つかりません。")
        sender.sendMessage(
            if (store.resetClaim(id, target.uniqueId)) "§a${target.name} の受取済みを消しました。"
            else "§e${target.name} はまだ受け取っていません。"
        )
      }
    }
  }

  private fun infoHeldItem(sender: CommandSender) {
    val player = sender as? Player ?: return sender.sendMessage(usage(true))
    val hand = player.inventory.itemInMainHand
    if (hand.type.isAir) return player.sendMessage("§c調べたいアイテムを手に持ってください。")
    val matches = matchingEntries(hand)
    if (matches.isEmpty()) return player.sendMessage("§e手に持っているアイテムは台帳に登録されていません。")
    matches.forEach { showInfo(player, it) }
  }

  private fun matchingEntries(item: ItemStack): List<CatalogEntry> =
      store.allIncludingRemoved().filter { decode(it)?.isSimilar(item) == true }

  private fun showInfo(sender: CommandSender, entry: CatalogEntry) {
    val removed = if (entry.enabled) "" else "（削除済み）"
    sender.sendMessage(
        "§eNo.${entry.id}$removed §7名前: §f${entry.name}$removed §7ルール: §f${entry.rule.label} " +
            "§7受け取った人数: §f${store.claimCount(entry.id)} §7個数: §f${decode(entry)?.amount ?: "?"}" +
            (if (entry.description.isBlank()) "" else "\n§7説明: §f${entry.description}")
    )
  }

  private fun register(sender: CommandSender, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val rule =
        args.getOrNull(1)?.let { ClaimRule.parse(it) ?: return player.sendMessage(usage(true)) }
            ?: ClaimRule.FREE
    val hand = heldItem(player) ?: return
    val matches = matchingEntries(hand)
    if (matches.isNotEmpty()) {
      matches.forEach { entry ->
        player.sendMessage(
            if (entry.enabled)
                "§cこのアイテムはすでに No.${entry.id}「${entry.name}」として登録されています。置き換えるときは /items update ${entry.id}。"
            else
                "§cこのアイテムは No.${entry.id}「${entry.name}」として登録されていましたが、削除済みです。戻すときは /items restore ${entry.id}。"
        )
      }
      return
    }
    val id = store.nextId()
    store.put(
        CatalogEntry(
            id,
            plainName(hand),
            args.drop(2).joinToString(" "),
            hand.serializeAsBytes(),
            rule,
            player.uniqueId,
            System.currentTimeMillis(),
            true,
        )
    )
    player.sendMessage("§a「${plainName(hand)}」を No.$id として登録しました（${rule.label}）。")
  }

  private fun update(sender: CommandSender, id: Int, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val entry = store.get(id) ?: return player.sendMessage(UNKNOWN)
    val rule =
        args.getOrNull(2)?.let { ClaimRule.parse(it) ?: return player.sendMessage(usage(true)) }
            ?: entry.rule
    val hand = heldItem(player) ?: return
    store.put(entry.copy(name = plainName(hand), bytes = hand.serializeAsBytes(), rule = rule))
    player.sendMessage("§aNo.$id を手に持ったアイテムで置き換えました（${rule.label}）。")
  }

  private fun heldItem(player: Player): ItemStack? =
      player.inventory.itemInMainHand.takeUnless { it.type.isAir }
          ?: run {
            player.sendMessage("§c登録したいアイテムを手に持ってください。")
            null
          }

  private fun plainName(item: ItemStack): String =
      PlainTextComponentSerializer.plainText().serialize(item.effectiveName())

  private fun decode(entry: CatalogEntry): ItemStack? =
      runCatching { ItemStack.deserializeBytes(entry.bytes) }.getOrNull()

  private fun openGui(player: Player, page: Int, query: String?) {
    val staff = player.hasPermission(MANAGE)
    val visible =
        store
            .all()
            .filter { ItemRules.visibleTo(it.rule, staff) }
            .filter { query == null || ItemRules.matchesName(it.name, query) }
    if (visible.isEmpty())
        return player.sendMessage(
            if (query == null) "§eまだ登録されたアイテムはありません。" else "§e「$query」に合う名前のアイテムはありません。"
        )
    val pages = (visible.size + PAGE_SIZE - 1) / PAGE_SIZE
    val current = page.coerceIn(0, pages - 1)
    val slice = visible.drop(current * PAGE_SIZE).take(PAGE_SIZE)
    val holder = ItemsGui(slice.map { it.id }, current, pages, query)
    val title = if (query == null) "アイテム台帳" else "アイテム台帳「$query」"
    holder.inv = Bukkit.createInventory(holder, 54, Component.text("$title ${current + 1}/$pages"))
    slice.forEachIndexed { slot, entry -> holder.inv.setItem(slot, display(entry)) }
    if (current > 0) holder.inv.setItem(PREVIOUS_SLOT, button("前のページ"))
    if (current < pages - 1) holder.inv.setItem(NEXT_SLOT, button("次のページ"))
    player.openInventory(holder.inv)
  }

  private fun display(entry: CatalogEntry): ItemStack {
    val item = decode(entry) ?: ItemStack(Material.BARRIER)
    val lines = buildList {
      add(note("No.${entry.id}", NamedTextColor.YELLOW))
      add(note(entry.rule.label, NamedTextColor.AQUA))
      if (entry.description.isNotBlank()) add(note(entry.description, NamedTextColor.WHITE))
      add(note("クリックで受け取る", NamedTextColor.GRAY))
    }
    item.editMeta { meta -> meta.lore(lines + (meta.lore() ?: emptyList())) }
    return item
  }

  private fun note(text: String, color: NamedTextColor): Component =
      Component.text(text, color).decoration(TextDecoration.ITALIC, false)

  private fun button(text: String): ItemStack =
      ItemStack(Material.ARROW).apply {
        editMeta { it.displayName(Component.text(text).decoration(TextDecoration.ITALIC, false)) }
      }

  @EventHandler
  fun onClick(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? ItemsGui ?: return
    event.isCancelled = true
    if (event.clickedInventory != event.view.topInventory) return
    val player = event.whoClicked as? Player ?: return
    when (event.slot) {
      PREVIOUS_SLOT ->
          if (holder.page > 0)
              plugin.server.scheduler.runTask(
                  plugin,
                  Runnable { openGui(player, holder.page - 1, holder.query) },
              )
      NEXT_SLOT ->
          if (holder.page < holder.pages - 1)
              plugin.server.scheduler.runTask(
                  plugin,
                  Runnable { openGui(player, holder.page + 1, holder.query) },
              )
      else -> holder.ids.getOrNull(event.slot)?.let { claim(player, it) }
    }
  }

  @EventHandler
  fun onDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is ItemsGui) event.isCancelled = true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): MutableList<String> {
    val staff = sender.hasPermission(MANAGE)
    val ids = store.all().filter { ItemRules.visibleTo(it.rule, staff) }.map { it.id.toString() }
    val rules = ClaimRule.entries.map { it.key }
    val sub = args[0].lowercase()
    val options =
        when (args.size) {
          1 ->
              listOf("help", "get", "search") +
                  if (staff) listOf("register", "update", "remove", "restore", "info", "reset")
                  else emptyList()
          2 ->
              when {
                sub == "get" -> ids
                !staff -> emptyList()
                sub == "restore" ->
                    store.allIncludingRemoved().filter { !it.enabled }.map { it.id.toString() }
                sub == "register" -> rules
                sub in listOf("update", "remove", "info", "reset") -> ids
                else -> emptyList()
              }
          3 ->
              when {
                !staff -> emptyList()
                sub == "update" -> rules
                sub == "reset" -> Bukkit.getOnlinePlayers().map { it.name }
                else -> emptyList()
              }
          else -> emptyList()
        }
    return options.filter { it.startsWith(args.last(), ignoreCase = true) }.toMutableList()
  }

  private companion object {
    const val MANAGE = "oyasaiutilities.items.manage"
    const val PAGE_SIZE = 45
    const val PREVIOUS_SLOT = 45
    const val NEXT_SLOT = 53
    const val PLAYER_ONLY = "このコマンドはプレイヤー専用です。"
    const val UNKNOWN = "§cその番号のアイテムは登録されていません。"
  }
}
