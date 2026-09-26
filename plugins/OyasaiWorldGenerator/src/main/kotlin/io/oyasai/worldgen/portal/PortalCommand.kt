package io.oyasai.worldgen.portal

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.regions.CuboidRegion
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class PortalCommand(private val portals: Portals) : BasicCommand {
  override fun execute(source: CommandSourceStack, args: Array<out String>) {
    val sender = source.sender
    val sub = args.firstOrNull()?.lowercase(Locale.ROOT).orEmpty()
    val permission =
        when (sub) {
          "create",
          "modify" -> "multiverse.portal.$sub"
          "list",
          "info",
          "select",
          "remove" -> "multiverse.portal.$sub"
          "wand" -> "multiverse.portal.givewand"
          else -> {
            sender.sendMessage("Usage: /mvp <create|modify|list|info|select|remove|wand>")
            return
          }
        }
    if (!sender.hasPermission(permission)) {
      sender.sendMessage("[MVP] 権限がありません: $permission")
      return
    }
    if (sub == "select" && !sender.hasPermission("multiverse.portal.create")) {
      sender.sendMessage("[MVP] 権限がありません: multiverse.portal.create")
      return
    }
    when (sub) {
      "create" -> create(sender, args)
      "modify" -> modify(sender, args)
      "list" -> {
        val world = args.getOrNull(1)
        sender.sendMessage(
            "[MVP] Portals: " +
                portals
                    .all()
                    .filter { world == null || it.world.equals(world, true) }
                    .joinToString(", ") { it.name }
        )
      }
      "info" ->
          sender.sendMessage(
              portals.find(args.getOrNull(1).orEmpty())?.let {
                "[MVP] ${it.name}: ${it.locationString()} -> ${it.destination}, safe-teleport=${it.safeTeleport}"
              } ?: "[MVP] ポータルが見つかりません"
          )
      "select" -> {
        val player = sender as? Player ?: return sender.sendMessage("[MVP] プレイヤー専用です")
        if (!Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit"))
            return sender.sendMessage("[MVP] FAWE が必要です")
        val portal =
            portals.find(args.getOrNull(1).orEmpty())
                ?: return sender.sendMessage("[MVP] ポータルが見つかりません")
        val world =
            Bukkit.getWorld(portal.world) ?: return sender.sendMessage("[MVP] ワールドがロードされていません")
        val actor = BukkitAdapter.adapt(player)
        val selector =
            WorldEdit.getInstance()
                .sessionManager
                .get(actor)
                .getRegionSelector(BukkitAdapter.adapt(world))
        selector.selectPrimary(
            com.sk89q.worldedit.math.BlockVector3.at(portal.minX, portal.minY, portal.minZ),
            null,
        )
        selector.selectSecondary(
            com.sk89q.worldedit.math.BlockVector3.at(portal.maxX, portal.maxY, portal.maxZ),
            null,
        )
        sender.sendMessage("[MVP] Selected ${portal.name}")
      }
      "remove" ->
          sender.sendMessage(
              if (portals.remove(args.getOrNull(1).orEmpty())) "[MVP] Removed"
              else "[MVP] ポータルが見つかりません"
          )
      "wand" -> {
        val player = sender as? Player ?: return sender.sendMessage("[MVP] プレイヤー専用です")
        if (!Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit"))
            return sender.sendMessage("[MVP] FAWE が必要です")
        player.inventory.addItem(ItemStack(Material.WOODEN_AXE))
        sender.sendMessage("[MVP] 木の斧で FAWE の範囲を選択してください")
      }
    }
  }

  private fun selection(sender: CommandSender): Portal? {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("[MVP] プレイヤー専用です")
              return null
            }
    if (!Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit")) {
      sender.sendMessage("[MVP] FAWE が必要です")
      return null
    }
    val actor = BukkitAdapter.adapt(player)
    val region =
        try {
          WorldEdit.getInstance()
              .sessionManager
              .get(actor)
              .getRegionSelector(BukkitAdapter.adapt(player.world))
              .region
        } catch (_: IncompleteRegionException) {
          sender.sendMessage("[MVP] 木の斧で2点を選択してください")
          return null
        }
    if (region !is CuboidRegion) {
      sender.sendMessage("[MVP] 直方体を選択してください")
      return null
    }
    return Portal(
        "",
        player.world.name,
        region.minimumPoint.x(),
        region.minimumPoint.y(),
        region.minimumPoint.z(),
        region.maximumPoint.x(),
        region.maximumPoint.y(),
        region.maximumPoint.z(),
        "",
    )
  }

  private fun create(sender: CommandSender, args: Array<out String>) {
    if (args.size !in 2..3) {
      sender.sendMessage("Usage: /mvp create <name> [dest]")
      return
    }
    val name = args[1]
    if (!name.matches(Regex("[A-Za-z0-9_.-]+")) || portals.find(name) != null) {
      sender.sendMessage("[MVP] 名前が不正か登録済みです")
      return
    }
    val region = selection(sender) ?: return
    portals.put(region.copy(name = name, destination = args.getOrNull(2).orEmpty()))
    sender.sendMessage("[MVP] Created $name")
  }

  private fun modify(sender: CommandSender, args: Array<out String>) {
    if (args.size < 3) {
      sender.sendMessage("Usage: /mvp modify <name> <dest|action|location> [value]")
      return
    }
    val portal = portals.find(args[1]) ?: return sender.sendMessage("[MVP] ポータルが見つかりません")
    when (args[2].lowercase(Locale.ROOT)) {
      "dest",
      "action" -> {
        if (args.size != 4) {
          sender.sendMessage("Usage: /mvp modify <name> dest <destination>")
          return
        }
        portal.destination = args[3]
      }
      "location" -> {
        if (args.size != 3) {
          sender.sendMessage("Usage: /mvp modify <name> location")
          return
        }
        val region = selection(sender) ?: return
        portal.world = region.world
        portal.minX = region.minX
        portal.minY = region.minY
        portal.minZ = region.minZ
        portal.maxX = region.maxX
        portal.maxY = region.maxY
        portal.maxZ = region.maxZ
      }
      else -> {
        sender.sendMessage("[MVP] 不明な項目です")
        return
      }
    }
    portals.save()
    sender.sendMessage("[MVP] Modified ${portal.name}")
  }

  override fun suggest(source: CommandSourceStack, args: Array<String>): Collection<String> {
    val options =
        when (args.size) {
          1 -> listOf("create", "modify", "list", "info", "select", "remove", "wand")
          2 ->
              when (args[0].lowercase(Locale.ROOT)) {
                "list" -> Bukkit.getWorlds().map { it.name }
                "modify",
                "info",
                "select",
                "remove" -> portals.all().map { it.name }
                else -> emptyList()
              }
          3 ->
              when (args[0].lowercase(Locale.ROOT)) {
                "modify" -> listOf("dest", "action", "location")
                "create" -> portals.all().map { "p:${it.name}" }
                else -> emptyList()
              }
          4 ->
              if (
                  args[0].equals("modify", true) &&
                      (args[2].equals("dest", true) || args[2].equals("action", true))
              )
                  portals.all().map { "p:${it.name}" }
              else emptyList()
          else -> emptyList()
        }
    return options.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }
  }
}
