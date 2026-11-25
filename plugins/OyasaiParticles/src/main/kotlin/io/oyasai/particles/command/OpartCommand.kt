package io.oyasai.particles.command

import io.oyasai.particles.engine.AreaVisualizer
import io.oyasai.particles.engine.ParticleRenderEngine
import io.oyasai.particles.gui.AreaGuiManager
import io.oyasai.particles.item.ParticleItemFactory
import io.oyasai.particles.model.AreaIdValidator
import io.oyasai.particles.model.BuiltInItemPresets
import io.oyasai.particles.model.ParticleEffectConfig
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.ShapeMode
import io.oyasai.particles.selection.AreaLimitValidator
import io.oyasai.particles.selection.SelectionManager
import io.oyasai.particles.selection.ValidationResult
import io.oyasai.particles.service.AreaService
import io.oyasai.particles.service.RollbackResult
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class OpartCommand(
    private val areaService: AreaService,
    private val selectionManager: SelectionManager,
    private val limitValidator: AreaLimitValidator,
    private val itemFactory: ParticleItemFactory,
    private val renderEngine: ParticleRenderEngine,
    private val visualizer: AreaVisualizer,
    private val guiManager: AreaGuiManager,
) : CommandExecutor, TabCompleter {

  private val timeFormatter =
      DateTimeFormatter.ofPattern("MM/dd HH:mm:ss").withZone(ZoneId.systemDefault())

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.isEmpty() || args[0].equals("help", ignoreCase = true)) {
      sendHelp(sender)
      return true
    }

    when (args[0].lowercase()) {
      "toggle" -> handleToggle(sender)
      "wand" -> handleWand(sender)
      "shape" -> handleShape(sender, args)
      "radius" -> handleRadius(sender, args)
      "height" -> handleHeight(sender, args)
      "visualize",
      "vis" -> handleVisualize(sender)
      "create" -> handleCreate(sender, args)
      "list" -> handleList(sender, args)
      "edit" -> handleEdit(sender, args)
      "remove",
      "delete" -> handleRemove(sender, args)
      "give" -> handleGive(sender, args)
      "history" -> handleHistory(sender, args)
      "rollback" -> handleRollback(sender, args)
      else -> sendHelp(sender)
    }
    return true
  }

  private fun handleToggle(sender: CommandSender) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.use")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val enabled = areaService.toggleVisual(player.uniqueId)
    if (!enabled) {
      renderEngine.resetPlayerState(player)
    }
    player.sendMessage(
        Component.text(
            "パーティクル・疑似天候・個人時間の表示を ${if (enabled) "ON" else "OFF"} にしました。",
            if (enabled) NamedTextColor.GREEN else NamedTextColor.YELLOW,
        )
    )
  }

  private fun handleWand(sender: CommandSender) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    if (player.inventory.firstEmpty() == -1) {
      player.sendMessage(Component.text("インベントリに空きがありません。", NamedTextColor.RED))
      return
    }
    player.inventory.addItem(itemFactory.createWand())
    player.sendMessage(Component.text("パーティクル範囲指定ワンドを配布しました。", NamedTextColor.AQUA))
  }

  private fun handleShape(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val rawMode = args.getOrNull(1)?.lowercase()
    val mode =
        when (rawMode) {
          "box",
          "cuboid",
          "rect" -> ShapeMode.BOX
          "cylinder",
          "cyl",
          "circle" -> ShapeMode.CYLINDER
          else -> {
            player.sendMessage(
                Component.text("使い方: /opart shape <box|cylinder>", NamedTextColor.YELLOW)
            )
            return
          }
        }
    selectionManager.setMode(player.uniqueId, player.world.name, mode)
    player.sendMessage(Component.text("選択形状を [$mode] に設定しました。", NamedTextColor.AQUA))
  }

  private fun handleRadius(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val radius = args.getOrNull(1)?.toDoubleOrNull()
    if (radius == null || radius < 1.0 || radius > 128.0) {
      player.sendMessage(Component.text("使い方: /opart radius <1..32>", NamedTextColor.YELLOW))
      return
    }
    selectionManager.setCylinderRadius(player.uniqueId, player.world.name, radius)
    player.sendMessage(Component.text("円柱モードの半径を $radius に設定しました。", NamedTextColor.AQUA))
  }

  private fun handleHeight(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val minY = args.getOrNull(1)?.toIntOrNull()
    val maxY = args.getOrNull(2)?.toIntOrNull()
    if (minY == null || maxY == null) {
      player.sendMessage(Component.text("使い方: /opart height <minY> <maxY>", NamedTextColor.YELLOW))
      return
    }
    selectionManager.setCylinderHeight(player.uniqueId, player.world.name, minY, maxY)
    player.sendMessage(Component.text("円柱モードの高さを Y=$minY..$maxY に設定しました。", NamedTextColor.AQUA))
  }

  private fun handleVisualize(sender: CommandSender) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val enabled = visualizer.toggle(player.uniqueId)
    player.sendMessage(
        Component.text(
            "範囲の常時可視化を ${if (enabled) "ON" else "OFF"} にしました。(ワンド所持中は常に表示されます)",
            if (enabled) NamedTextColor.GREEN else NamedTextColor.YELLOW,
        )
    )
  }

  private fun handleCreate(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.create")) {
      player.sendMessage(Component.text("コマンドでの新規作成権限がありません。", NamedTextColor.RED))
      return
    }
    val rawName = args.getOrNull(1)
    val safeId = AreaIdValidator.sanitizeOrNull(rawName)
    if (safeId == null) {
      player.sendMessage(
          Component.text(
              "エリア名は半角英数字・アンダースコア・ハイフンのみ (1〜32文字) で指定してください。",
              NamedTextColor.RED,
          )
      )
      return
    }
    if (areaService.findById(safeId) != null) {
      player.sendMessage(Component.text("同名のエリア「$safeId」が既に存在します。", NamedTextColor.RED))
      return
    }
    val shape = selectionManager.buildShape(player.uniqueId, player.world.name)
    if (shape == null) {
      player.sendMessage(Component.text("先にワンド (/opart wand) で範囲を選択してください。", NamedTextColor.YELLOW))
      return
    }

    when (val check = limitValidator.validateNewArea(player, player.world, shape)) {
      is ValidationResult.Error -> {
        player.sendMessage(Component.text(check.message, NamedTextColor.RED))
        return
      }
      ValidationResult.Ok -> Unit
    }

    val area =
        areaService.createArea(
            id = safeId,
            name = safeId,
            worldName = player.world.name,
            ownerUuid = player.uniqueId,
            ownerName = player.name,
            shape = shape,
            effect = ParticleEffectConfig(particle = ParticlePreset.CHERRY_LEAVES),
            createdFromItem = false,
        )
    player.sendMessage(Component.text("パーティクルエリア「${area.name}」を作成しました！", NamedTextColor.GREEN))
    guiManager.openEditor(player, area, returnShowAll = false)
  }

  private fun handleList(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("権限がありません。", NamedTextColor.RED))
      return
    }
    val showAll = args.getOrNull(1).equals("all", ignoreCase = true)
    if (showAll && !player.hasPermission("oyasaiparticles.admin")) {
      player.sendMessage(Component.text("全体一覧を見る権限がありません。", NamedTextColor.RED))
      return
    }
    guiManager.openList(player, showAll = showAll, page = 0)
  }

  private fun handleEdit(sender: CommandSender, args: Array<out String>) {
    val player = requirePlayer(sender) ?: return
    val query = args.getOrNull(1)
    if (query.isNullOrBlank()) {
      player.sendMessage(Component.text("使い方: /opart edit <エリア名またはID>", NamedTextColor.YELLOW))
      return
    }
    val area = areaService.findByIdOrName(query)
    if (area == null) {
      player.sendMessage(Component.text("エリア「$query」が見つかりません。", NamedTextColor.RED))
      return
    }
    if (area.ownerUuid != player.uniqueId && !player.hasPermission("oyasaiparticles.admin")) {
      player.sendMessage(Component.text("このエリアを編集する権限がありません。", NamedTextColor.RED))
      return
    }
    guiManager.openEditor(player, area)
  }

  private fun handleRemove(sender: CommandSender, args: Array<out String>) {
    val query = args.getOrNull(1)
    if (query.isNullOrBlank()) {
      sender.sendMessage(Component.text("使い方: /opart remove <エリア名またはID>", NamedTextColor.YELLOW))
      return
    }
    val area = areaService.findByIdOrName(query)
    if (area == null) {
      sender.sendMessage(Component.text("エリア「$query」が見つかりません。", NamedTextColor.RED))
      return
    }
    if (
        sender is Player &&
            area.ownerUuid != sender.uniqueId &&
            !sender.hasPermission("oyasaiparticles.admin")
    ) {
      sender.sendMessage(Component.text("このエリアを削除する権限がありません。", NamedTextColor.RED))
      return
    }
    val actorUuid = (sender as? Player)?.uniqueId ?: area.ownerUuid
    areaService.deleteArea(area.id, actorUuid, sender.name)
    sender.sendMessage(Component.text("エリア「${area.name}」を削除しました。", NamedTextColor.YELLOW))
  }

  private fun handleGive(sender: CommandSender, args: Array<out String>) {
    if (!sender.hasPermission("oyasaiparticles.give")) {
      sender.sendMessage(Component.text("アイテム発行権限がありません。", NamedTextColor.RED))
      return
    }
    val targetName = args.getOrNull(1)
    val presetKey = args.getOrNull(2)
    val amount = (args.getOrNull(3)?.toIntOrNull() ?: 1).coerceIn(1, 64)
    if (targetName == null || presetKey == null) {
      sender.sendMessage(
          Component.text(
              "使い方: /opart give <プレイヤー> <プリセット> [個数] (プリセット: ${BuiltInItemPresets.presets.keys.joinToString(", ")})",
              NamedTextColor.YELLOW,
          )
      )
      return
    }
    val target = Bukkit.getPlayerExact(targetName)
    if (target == null || (sender is Player && !sender.canSee(target))) {
      sender.sendMessage(Component.text("プレイヤー「$targetName」が見つかりません。", NamedTextColor.RED))
      return
    }
    val preset = BuiltInItemPresets.find(presetKey)
    if (preset == null) {
      sender.sendMessage(
          Component.text(
              "不明なプリセット「$presetKey」です。候補: ${BuiltInItemPresets.presets.keys.joinToString(", ")}",
              NamedTextColor.RED,
          )
      )
      return
    }
    if (target.inventory.firstEmpty() == -1) {
      sender.sendMessage(Component.text("${target.name} のインベントリに空きがありません。", NamedTextColor.RED))
      return
    }
    target.inventory.addItem(itemFactory.createEffectItem(preset, amount))
    sender.sendMessage(
        Component.text(
            "${target.name} に [${preset.itemDisplayName ?: presetKey}] x$amount を配布しました。",
            NamedTextColor.GREEN,
        )
    )
  }

  private fun handleHistory(sender: CommandSender, args: Array<out String>) {
    if (!sender.hasPermission("oyasaiparticles.history")) {
      sender.sendMessage(Component.text("操作履歴の閲覧権限がありません。", NamedTextColor.RED))
      return
    }
    val arg1 = args.getOrNull(1)
    val asInt = arg1?.toIntOrNull()
    val areaQuery = if (asInt == null) arg1 else null
    val limit = asInt ?: 15
    val entries = areaService.listHistory(areaQuery, limit)
    if (entries.isEmpty()) {
      sender.sendMessage(Component.text("該当する操作履歴はありません。", NamedTextColor.GRAY))
      return
    }
    sender.sendMessage(Component.text("=== OyasaiParticles 操作履歴 ===", NamedTextColor.GOLD))
    for (entry in entries) {
      val timeStr = timeFormatter.format(Instant.ofEpochMilli(entry.timestamp))
      sender.sendMessage(
          Component.text(
              "#${entry.id} [$timeStr] ${entry.action.label} | ${entry.areaName} (${entry.areaId}) by ${entry.actorName}",
              NamedTextColor.WHITE,
          )
      )
    }
  }

  private fun handleRollback(sender: CommandSender, args: Array<out String>) {
    if (!sender.hasPermission("oyasaiparticles.rollback")) {
      sender.sendMessage(Component.text("ロールバック権限がありません。", NamedTextColor.RED))
      return
    }
    val historyId = args.getOrNull(1)?.toLongOrNull()
    if (historyId == null) {
      sender.sendMessage(Component.text("使い方: /opart rollback <履歴ID>", NamedTextColor.YELLOW))
      return
    }
    val actorUuid = (sender as? Player)?.uniqueId ?: java.util.UUID(0L, 0L)
    when (val result = areaService.rollback(historyId, actorUuid, sender.name)) {
      RollbackResult.NotFound ->
          sender.sendMessage(Component.text("履歴ID #$historyId が見つかりません。", NamedTextColor.RED))
      RollbackResult.NothingToChange ->
          sender.sendMessage(
              Component.text("現在の状態は既に履歴 #$historyId の変更前と同じです。", NamedTextColor.YELLOW)
          )
      is RollbackResult.Success -> {
        val label = result.restoredArea?.name ?: result.entry.areaName
        val stateMsg = if (result.restoredArea == null) "削除された状態へ戻しました" else "変更前の状態へ復元しました"
        sender.sendMessage(
            Component.text("履歴 #$historyId ($label) を$stateMsg。", NamedTextColor.GREEN)
        )
      }
    }
  }

  private fun requirePlayer(sender: CommandSender): Player? {
    if (sender is Player) return sender
    sender.sendMessage(Component.text("このコマンドはプレイヤーのみ実行できます。", NamedTextColor.RED))
    return null
  }

  private fun sendHelp(sender: CommandSender) {
    sender.sendMessage(Component.text("=== OyasaiParticles (/opart) ===", NamedTextColor.AQUA))
    sender.sendMessage(Component.text("/opart toggle - 自分への表示 ON/OFF を切り替え", NamedTextColor.GRAY))
    sender.sendMessage(Component.text("/opart wand - 範囲指定ワンド (特殊ブレイズロッド) を取得", NamedTextColor.GRAY))
    sender.sendMessage(
        Component.text("/opart shape <box|cylinder> - 四角 / 円柱モード切替", NamedTextColor.GRAY)
    )
    sender.sendMessage(
        Component.text("/opart radius <数値> / height <minY> <maxY> - 円柱サイズ指定", NamedTextColor.GRAY)
    )
    sender.sendMessage(
        Component.text("/opart visualize - エリア境界線の常時可視化 ON/OFF", NamedTextColor.GRAY)
    )
    sender.sendMessage(Component.text("/opart list [all] - エリア一覧・設定・回収GUIを開く", NamedTextColor.GRAY))
    if (sender.hasPermission("oyasaiparticles.create")) {
      sender.sendMessage(Component.text("/opart create <名前> - 選択範囲に新規エリアを作成", NamedTextColor.GRAY))
    }
    if (sender.hasPermission("oyasaiparticles.give")) {
      sender.sendMessage(
          Component.text(
              "/opart give <プレイヤー> <プリセット> [個数] - パーティクルアイテム配布",
              NamedTextColor.GRAY,
          )
      )
    }
    if (sender.hasPermission("oyasaiparticles.history")) {
      sender.sendMessage(Component.text("/opart history [エリア名|件数] - 操作履歴を表示", NamedTextColor.GRAY))
    }
    if (sender.hasPermission("oyasaiparticles.rollback")) {
      sender.sendMessage(Component.text("/opart rollback <履歴ID> - 変更前の状態へ復元", NamedTextColor.GRAY))
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (args.size == 1) {
      val sub =
          mutableListOf(
              "help",
              "toggle",
              "wand",
              "shape",
              "radius",
              "height",
              "visualize",
              "list",
              "edit",
              "remove",
          )
      if (sender.hasPermission("oyasaiparticles.create")) sub.add("create")
      if (sender.hasPermission("oyasaiparticles.give")) sub.add("give")
      if (sender.hasPermission("oyasaiparticles.history")) sub.add("history")
      if (sender.hasPermission("oyasaiparticles.rollback")) sub.add("rollback")
      return sub.filter { it.startsWith(args[0], ignoreCase = true) }
    }
    if (args.size == 2) {
      return when (args[0].lowercase()) {
        "shape" -> listOf("box", "cylinder").filter { it.startsWith(args[1], ignoreCase = true) }
        "list" -> if (sender.hasPermission("oyasaiparticles.admin")) listOf("all") else emptyList()
        "edit",
        "remove",
        "history" -> {
          val player = sender as? Player
          areaService
              .allAreas()
              .filter {
                player == null ||
                    it.ownerUuid == player.uniqueId ||
                    player.hasPermission("oyasaiparticles.admin")
              }
              .map { it.name }
              .filter { it.startsWith(args[1], ignoreCase = true) }
        }
        "give" ->
            if (sender.hasPermission("oyasaiparticles.give")) {
              Bukkit.getOnlinePlayers()
                  .filter { sender !is Player || sender.canSee(it) }
                  .map { it.name }
                  .filter { it.startsWith(args[1], ignoreCase = true) }
            } else {
              emptyList()
            }
        else -> emptyList()
      }
    }
    if (args.size == 3 && args[0].equals("give", ignoreCase = true)) {
      if (sender.hasPermission("oyasaiparticles.give")) {
        return BuiltInItemPresets.presets.keys.filter { it.startsWith(args[2], ignoreCase = true) }
      }
    }
    return emptyList()
  }
}
