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

/** 特殊アイテムの台帳。登録したアイテムを、ルールに従って何度でも受け取れる。 */
class ItemsFeature(private val plugin: Main) : Listener, TabExecutor {
  private lateinit var store: ItemStore

  private class ItemsGui(val ids: List<String>, val page: Int, val pages: Int) : InventoryHolder {
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
      null -> (sender as? Player)?.let { openGui(it, 0) } ?: sender.sendMessage(PLAYER_ONLY)
      "get" -> get(sender, args)
      "register",
      "update",
      "remove",
      "info",
      "reset" -> if (staff) admin(sender, args) else sender.sendMessage("§cこのコマンドを使う権限がありません。")
      else -> sender.sendMessage(usage(staff))
    }
    return true
  }

  private fun usage(staff: Boolean): String = buildString {
    append("§e/items §7— 一覧を開く\n§e/items get <ID> §7— 受け取る")
    if (staff) {
      append("\n§e/items register <ID> [free|once|staff] [説明] §7— 手に持ったものを登録")
      append("\n§e/items update <ID> [free|once|staff] §7— 手に持ったもので置き換え")
      append("\n§e/items remove <ID> §7— 一覧から外す（IDは再利用不可）")
      append("\n§e/items info <ID> §7— 詳細")
      append("\n§e/items reset <ID> <プレイヤー> §7— 「1人1回」の受取済みを消す")
    }
  }

  private fun get(sender: CommandSender, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val id = args.getOrNull(1)?.lowercase() ?: return player.sendMessage(usage(false))
    claim(player, id)
  }

  private fun claim(player: Player, id: String) {
    val staff = player.hasPermission(MANAGE)
    val entry = store.get(id)
    if (entry == null || !ItemRules.visibleTo(entry.rule, staff)) {
      player.sendMessage("§cそのIDのアイテムは登録されていません。")
      return
    }
    ItemRules.denial(entry.rule, staff, store.hasClaimed(id, player.uniqueId))?.let {
      player.sendMessage("§c$it")
      return
    }
    val item =
        runCatching { ItemStack.deserializeBytes(entry.bytes) }
            .getOrElse {
              plugin.logger.log(Level.SEVERE, "Items: cannot read stored item '$id'", it)
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
    val id = args.getOrNull(1)?.lowercase() ?: return sender.sendMessage(usage(true))
    when (sub) {
      "register" -> register(sender, id, args)
      "update" -> update(sender, id, args)
      "remove" -> {
        val entry = store.get(id) ?: return sender.sendMessage(UNKNOWN)
        store.put(entry.copy(enabled = false))
        sender.sendMessage("§a「$id」を一覧から外しました。取得履歴は残り、IDは再利用できません。")
      }
      "info" -> {
        val entry = store.get(id) ?: return sender.sendMessage(UNKNOWN)
        sender.sendMessage(
            "§e${entry.id} §7名前: §f${entry.name} §7ルール: §f${entry.rule.label} " +
                "§7受け取った人数: §f${store.claimCount(id)} §7個数: §f${decode(entry)?.amount ?: "?"}" +
                (if (entry.description.isBlank()) "" else "\n§7説明: §f${entry.description}")
        )
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

  private fun register(sender: CommandSender, id: String, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    if (!ItemRules.isValidId(id)) return player.sendMessage("§cIDは半角の英小文字・数字・_・- で32文字までです。")
    if (store.exists(id)) return player.sendMessage("§cそのIDはすでに使われています。置き換えるときは /items update。")
    val rule =
        args.getOrNull(2)?.let { ClaimRule.parse(it) ?: return player.sendMessage(usage(true)) }
            ?: ClaimRule.FREE
    val hand = heldItem(player) ?: return
    store.put(
        CatalogEntry(
            id,
            plainName(hand),
            args.drop(3).joinToString(" "),
            hand.serializeAsBytes(),
            rule,
            player.uniqueId,
            System.currentTimeMillis(),
            true,
        )
    )
    player.sendMessage("§a「${plainName(hand)}」を $id として登録しました（${rule.label}）。")
  }

  private fun update(sender: CommandSender, id: String, args: Array<String>) {
    val player = sender as? Player ?: return sender.sendMessage(PLAYER_ONLY)
    val entry = store.get(id) ?: return player.sendMessage(UNKNOWN)
    val rule =
        args.getOrNull(2)?.let { ClaimRule.parse(it) ?: return player.sendMessage(usage(true)) }
            ?: entry.rule
    val hand = heldItem(player) ?: return
    store.put(entry.copy(name = plainName(hand), bytes = hand.serializeAsBytes(), rule = rule))
    player.sendMessage("§a$id を手に持ったアイテムで置き換えました（${rule.label}）。")
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

  private fun openGui(player: Player, page: Int) {
    val staff = player.hasPermission(MANAGE)
    val visible = store.all().filter { ItemRules.visibleTo(it.rule, staff) }
    if (visible.isEmpty()) return player.sendMessage("§eまだ登録されたアイテムはありません。")
    val pages = (visible.size + PAGE_SIZE - 1) / PAGE_SIZE
    val current = page.coerceIn(0, pages - 1)
    val slice = visible.drop(current * PAGE_SIZE).take(PAGE_SIZE)
    val holder = ItemsGui(slice.map { it.id }, current, pages)
    holder.inv = Bukkit.createInventory(holder, 54, Component.text("アイテム台帳 ${current + 1}/$pages"))
    slice.forEachIndexed { slot, entry -> holder.inv.setItem(slot, display(entry)) }
    if (current > 0) holder.inv.setItem(PREVIOUS_SLOT, button("前のページ"))
    if (current < pages - 1) holder.inv.setItem(NEXT_SLOT, button("次のページ"))
    player.openInventory(holder.inv)
  }

  private fun display(entry: CatalogEntry): ItemStack {
    val item = decode(entry) ?: ItemStack(Material.BARRIER)
    val lines = buildList {
      add(note("ID: ${entry.id}", NamedTextColor.GRAY))
      add(note(entry.rule.label, NamedTextColor.AQUA))
      if (entry.description.isNotBlank()) add(note(entry.description, NamedTextColor.WHITE))
      add(note("クリックで受け取る", NamedTextColor.YELLOW))
    }
    item.editMeta { meta -> meta.lore((meta.lore() ?: emptyList()) + lines) }
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
              plugin.server.scheduler.runTask(plugin, Runnable { openGui(player, holder.page - 1) })
      NEXT_SLOT ->
          if (holder.page < holder.pages - 1)
              plugin.server.scheduler.runTask(plugin, Runnable { openGui(player, holder.page + 1) })
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
    val visibleIds = store.all().filter { ItemRules.visibleTo(it.rule, staff) }.map { it.id }
    val options =
        when (args.size) {
          1 ->
              listOf("get") +
                  if (staff) listOf("register", "update", "remove", "info", "reset")
                  else emptyList()
          2 ->
              when (args[0].lowercase()) {
                "get" -> visibleIds
                "update",
                "remove",
                "info",
                "reset" -> if (staff) visibleIds else emptyList()
                else -> emptyList()
              }
          3 ->
              when {
                !staff -> emptyList()
                args[0].lowercase() in listOf("register", "update") ->
                    ClaimRule.entries.map { it.key }
                args[0].lowercase() == "reset" -> Bukkit.getOnlinePlayers().map { it.name }
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
    const val UNKNOWN = "§cそのIDのアイテムは登録されていません。"
  }
}
