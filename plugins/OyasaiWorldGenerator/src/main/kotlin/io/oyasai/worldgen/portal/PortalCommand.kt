package io.oyasai.worldgen.portal

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
            sender.sendMessage("[MVP] 使い方: /mvp <create|modify|list|info|select|remove|wand>")
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
        if (args.size !in 1..2) return sender.sendMessage("[MVP] 使い方: /mvp list [ワールド]")
        val world = args.getOrNull(1)
        sender.sendMessage(
            "[MVP] ポータル: " +
                portals
                    .all()
                    .filter { world == null || it.world.equals(world, true) }
                    .joinToString(", ") { it.name }
        )
      }
      "info" -> {
        if (args.size != 2) return sender.sendMessage("[MVP] 使い方: /mvp info <名前>")
        sender.sendMessage(
            portals.find(args.getOrNull(1).orEmpty())?.let {
              "[MVP] ${it.name}: ${it.locationString()} -> ${it.destination}, 安全移動=${it.safeTeleport}"
            } ?: "[MVP] ポータルが見つかりません"
        )
      }
      "select" -> {
        if (args.size != 2) return sender.sendMessage("[MVP] 使い方: /mvp select <名前>")
        val player = sender as? Player ?: return sender.sendMessage("[MVP] プレイヤー専用です")
        if (!Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit"))
            return sender.sendMessage("[MVP] FAWE が必要です")
        val portal =
            portals.find(args.getOrNull(1).orEmpty())
                ?: return sender.sendMessage("[MVP] ポータルが見つかりません")
        val world =
            Bukkit.getWorld(portal.world) ?: return sender.sendMessage("[MVP] ワールドがロードされていません")
        PortalSelection.select(player, portal)
        sender.sendMessage("[MVP] ${portal.name} を選択しました")
      }
      "remove" -> {
        if (args.size != 2) return sender.sendMessage("[MVP] 使い方: /mvp remove <名前>")
        sender.sendMessage(
            if (portals.remove(args.getOrNull(1).orEmpty())) "[MVP] 削除しました"
            else "[MVP] ポータルが見つかりません"
        )
      }
      "wand" -> {
        if (args.size != 1) return sender.sendMessage("[MVP] 使い方: /mvp wand")
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
    return PortalSelection.current(player)
  }

  private fun create(sender: CommandSender, args: Array<out String>) {
    if (args.size !in 2..3) {
      sender.sendMessage("[MVP] 使い方: /mvp create <name> [dest]")
      return
    }
    val name = args[1]
    if (!name.matches(Regex("[A-Za-z0-9_.-]+"))) {
      sender.sendMessage("[MVP] 名前には英数字、_、-、. のみ使えます")
      return
    }
    if (portals.hasName(name)) {
      sender.sendMessage("[MVP] その名前のポータルは既にあります")
      return
    }
    val region = selection(sender) ?: return
    portals.put(region.copy(name = name, destination = args.getOrNull(2).orEmpty()))
    sender.sendMessage("[MVP] $name を作成しました")
  }

  private fun modify(sender: CommandSender, args: Array<out String>) {
    if (args.size < 3) {
      sender.sendMessage("[MVP] 使い方: /mvp modify <name> <dest|location> [value]")
      return
    }
    val portal = portals.find(args[1]) ?: return sender.sendMessage("[MVP] ポータルが見つかりません")
    when (args[2].lowercase(Locale.ROOT)) {
      "dest" -> {
        if (args.size != 4) {
          sender.sendMessage("[MVP] 使い方: /mvp modify <name> dest <destination>")
          return
        }
        portal.destination = args[3]
      }
      "location" -> {
        if (args.size != 3) {
          sender.sendMessage("[MVP] 使い方: /mvp modify <name> location")
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
    sender.sendMessage("[MVP] ${portal.name} を変更しました")
  }

  override fun suggest(source: CommandSourceStack, args: Array<String>): Collection<String> {
    val options =
        when (args.size) {
          0,
          1 ->
              listOf("create", "modify", "list", "info", "select", "remove", "wand").filter {
                source.sender.hasPermission(
                    if (it == "wand") "multiverse.portal.givewand" else "multiverse.portal.$it"
                ) && (it != "select" || source.sender.hasPermission("multiverse.portal.create"))
              }
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
                "modify" -> listOf("dest", "location")
                "create" -> portals.all().map { "p:${it.name}" }
                else -> emptyList()
              }
          4 ->
              if (args[0].equals("modify", true) && args[2].equals("dest", true))
                  portals.all().map { "p:${it.name}" }
              else emptyList()
          else -> emptyList()
        }
    val sub = args.firstOrNull()?.lowercase(Locale.ROOT).orEmpty()
    if (
        args.size > 1 &&
            (!source.sender.hasPermission(
                if (sub == "wand") "multiverse.portal.givewand" else "multiverse.portal.$sub"
            ) || (sub == "select" && !source.sender.hasPermission("multiverse.portal.create")))
    )
        return emptyList()
    return options.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }
  }
}
