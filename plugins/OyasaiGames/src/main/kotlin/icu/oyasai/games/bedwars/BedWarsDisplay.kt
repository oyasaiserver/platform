package icu.oyasai.games.bedwars

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scoreboard.DisplaySlot
import org.bukkit.scoreboard.Scoreboard

internal data class ArenaView(
    val name: String,
    val teamSize: Int,
    val players: Int,
    val capacity: Int,
    val available: Boolean,
)

internal fun bedWarsMode(teamSize: Int): String? =
    when (teamSize) {
      1 -> "solo"
      2 -> "double"
      3 -> "triples"
      4 -> "squads"
      else -> null
    }

internal fun modeArenas(mode: String, arenas: List<ArenaView>): List<ArenaView> =
    arenas
        .filter { bedWarsMode(it.teamSize) == mode }
        .sortedBy { it.name.lowercase(java.util.Locale.ROOT) }

internal data class BedWarsMenuPage(val page: Int, val start: Int, val lastPage: Int)

internal fun bedWarsMenuPage(count: Int, requested: Int): BedWarsMenuPage {
  require(count >= 0)
  val last = (count - 1).coerceAtLeast(0) / 45
  val page = requested.coerceIn(0, last)
  return BedWarsMenuPage(page, page * 45, last)
}

internal class BedWarsDisplay(
    private val plugin: JavaPlugin,
    private val join: (Player, String) -> Unit,
    private val rejoin: (Player) -> Unit,
) : Listener {
  private val previous = mutableMapOf<UUID, Scoreboard>()
  private val boards = mutableMapOf<UUID, Scoreboard>()
  var tabHealth = false
  var nameHealth = false

  private class Menu(val owner: BedWarsDisplay, val actions: Map<Int, (Player) -> Unit>) :
      InventoryHolder {
    lateinit var contents: Inventory

    override fun getInventory() = contents
  }

  private fun item(material: Material, title: String, lines: List<String> = emptyList()) =
      ItemStack(material).also {
        val meta = it.itemMeta
        meta.setDisplayName(title)
        meta.lore = lines
        it.itemMeta = meta
      }

  fun openModes(player: Player, arenas: List<ArenaView>) {
    val actions = mutableMapOf<Int, (Player) -> Unit>()
    val holder = Menu(this, actions)
    val inventory = Bukkit.createInventory(holder, 27, "BedWars モード")
    holder.contents = inventory
    listOf("solo", "double", "triples", "squads").forEachIndexed { index, mode ->
      val slot = 10 + index * 2
      inventory.setItem(slot, item(Material.RED_BED, mode))
      actions[slot] = { openMode(it, mode, arenas) }
    }
    player.openInventory(inventory)
  }

  fun openMode(player: Player, mode: String, arenas: List<ArenaView>, page: Int = 0) {
    val candidates = modeArenas(mode, arenas)
    val layout = bedWarsMenuPage(candidates.size, page)
    val actualPage = layout.page
    val actions = mutableMapOf<Int, (Player) -> Unit>()
    val holder = Menu(this, actions)
    val inventory = Bukkit.createInventory(holder, 54, "BedWars $mode")
    holder.contents = inventory
    candidates.drop(layout.start).take(45).forEachIndexed { slot, arena ->
      inventory.setItem(
          slot,
          item(
              if (arena.available) Material.PAPER else Material.BARRIER,
              arena.name,
              listOf(
                  "${arena.players}/${arena.capacity}",
                  if (arena.available) "クリックで参加" else "参加不可",
              ),
          ),
      )
      if (arena.available) actions[slot] = { join(it, arena.name) }
    }
    inventory.setItem(45, item(Material.FIREWORK_ROCKET, "ランダム参加"))
    actions[45] = { who ->
      candidates.filter { it.available }.randomOrNull()?.let { join(who, it.name) }
    }
    inventory.setItem(48, item(Material.ARROW, "前のページ"))
    actions[48] = { openMode(it, mode, arenas, actualPage - 1) }
    inventory.setItem(49, item(Material.BARRIER, "閉じる"))
    actions[49] = { it.closeInventory() }
    inventory.setItem(50, item(Material.ARROW, "次のページ"))
    actions[50] = { openMode(it, mode, arenas, actualPage + 1) }
    inventory.setItem(53, item(Material.ENDER_PEARL, "再参加"))
    actions[53] = rejoin
    player.openInventory(inventory)
  }

  fun openSpectators(player: Player, candidates: List<Player>, teleport: (Player, Player) -> Unit) {
    openSpectatorPage(player, candidates, teleport, 0)
  }

  private fun openSpectatorPage(
      player: Player,
      candidates: List<Player>,
      teleport: (Player, Player) -> Unit,
      page: Int,
  ) {
    val active =
        candidates
            .filter { it.isOnline && !it.isDead && it.uniqueId != player.uniqueId }
            .distinctBy { it.uniqueId }
            .sortedWith(
                compareBy<Player> { it.name.lowercase(java.util.Locale.ROOT) }
                    .thenBy { it.uniqueId.toString() }
            )
    val layout = bedWarsMenuPage(active.size, page)
    val actions = mutableMapOf<Int, (Player) -> Unit>()
    val holder = Menu(this, actions)
    val inventory = Bukkit.createInventory(holder, 54, "BedWars 観戦先")
    holder.contents = inventory
    active.drop(layout.start).take(45).forEachIndexed { slot, target ->
      val head = item(Material.PLAYER_HEAD, target.name, listOf("クリックでテレポート"))
      val meta = head.itemMeta as SkullMeta
      meta.owningPlayer = target
      head.itemMeta = meta
      inventory.setItem(slot, head)
      actions[slot] = { who ->
        check(target.isOnline && !target.isDead) { "観戦先が利用できません" }
        who.closeInventory()
        // The module must revalidate match membership/spectator state on selection.
        teleport(who, target)
      }
    }
    if (active.isEmpty()) inventory.setItem(22, item(Material.BARRIER, "観戦先がいません"))
    if (layout.page > 0) {
      inventory.setItem(48, item(Material.ARROW, "前のページ"))
      actions[48] = { openSpectatorPage(it, candidates, teleport, layout.page - 1) }
    }
    inventory.setItem(49, item(Material.BARRIER, "閉じる"))
    actions[49] = { it.closeInventory() }
    if (layout.page < layout.lastPage) {
      inventory.setItem(50, item(Material.ARROW, "次のページ"))
      actions[50] = { openSpectatorPage(it, candidates, teleport, layout.page + 1) }
    }
    player.openInventory(inventory)
  }

  @EventHandler
  fun click(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? Menu ?: return
    if (holder.owner !== this) return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (event.rawSlot !in 0 until event.view.topInventory.size) return
    val action = holder.actions[event.rawSlot] ?: return
    // Bukkit inventory callbacks must finish before opening/closing/replacing inventories.
    val selectedInventory = event.view.topInventory
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (!player.isOnline || player.openInventory.topInventory !== selectedInventory)
                  return@Runnable
              try {
                action(player)
              } catch (error: Exception) {
                plugin.logger.warning("BedWars menu action failed: ${error.javaClass.simpleName}")
                player.sendMessage("BedWars の操作に失敗しました。管理者へ連絡してください。")
              }
            },
        )
  }

  @EventHandler
  fun drag(event: InventoryDragEvent) {
    if ((event.view.topInventory.holder as? Menu)?.owner === this) event.isCancelled = true
  }

  fun show(player: Player, title: String, lines: List<String>) {
    val board =
        boards.getOrPut(player.uniqueId) {
          previous.putIfAbsent(player.uniqueId, player.scoreboard)
          Bukkit.getScoreboardManager().newScoreboard.also {
            if (tabHealth)
                it.registerNewObjective("bw_tab_health", "health", "♥").displaySlot =
                    DisplaySlot.PLAYER_LIST
            if (nameHealth)
                it.registerNewObjective("bw_name_health", "health", "♥").displaySlot =
                    DisplaySlot.BELOW_NAME
          }
        }
    board.getObjective("bedwars")?.unregister()
    board.teams.toList().forEach { it.unregister() }
    val objective = board.registerNewObjective("bedwars", "dummy", title)
    objective.displaySlot = DisplaySlot.SIDEBAR
    lines.take(15).forEachIndexed { index, line ->
      val entry = "§${index.toString(16)}"
      val team = board.registerNewTeam("bw_line_$index")
      team.addEntry(entry)
      team.prefix = line
      objective.getScore(entry).score = lines.take(15).size - index
    }
    player.scoreboard = board
  }

  fun restore(player: Player) {
    val owned = boards.remove(player.uniqueId)
    val old = previous.remove(player.uniqueId)
    if (old != null && player.scoreboard === owned) player.scoreboard = old
    if ((player.openInventory.topInventory.holder as? Menu)?.owner === this) player.closeInventory()
  }

  fun isMenu(inventory: Inventory): Boolean = (inventory.holder as? Menu)?.owner === this

  fun close() {
    Bukkit.getOnlinePlayers().forEach(::restore)
    boards.clear()
    previous.clear()
    HandlerList.unregisterAll(this)
  }
}
