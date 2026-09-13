package io.oyasai.directstate

import io.oyasai.directstate.command.DirectStateCommand
import io.oyasai.directstate.edit.BlockEdit
import io.oyasai.directstate.edit.BlockEditService
import io.oyasai.directstate.edit.EditInteractionListener
import io.oyasai.directstate.edit.ToolItems
import io.oyasai.directstate.edit.hand.HandEditor
import io.oyasai.directstate.edit.hold.HoldEditor
import io.oyasai.directstate.edit.replace.BlockReplacement
import io.oyasai.directstate.edit.replace.TypeReplacement
import io.oyasai.directstate.edit.shape.ShapeEditor
import io.oyasai.directstate.integration.CoreProtectLogging
import io.oyasai.directstate.integration.BlockEntityAccess
import io.oyasai.directstate.integration.WorldGuardUpdates
import io.oyasai.directstate.settings.PlayerSettingsStore
import io.oyasai.directstate.update.PlayerUpdateRule
import io.oyasai.directstate.update.UpdateMode
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.data.BlockData
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

class DirectState : JavaPlugin() {
  private lateinit var playerSettings: PlayerSettingsStore
  private lateinit var holdEditor: HoldEditor
  private lateinit var edits: BlockEditService
  private lateinit var updateMode: UpdateMode
  private var regionUpdateRule: PlayerUpdateRule = PlayerUpdateRule { false }

  /** WorldGuardのフラグはonEnableより前に登録する必要があるらしい */
  override fun onLoad() {
    if (server.pluginManager.getPlugin("WorldGuard") != null) {
      regionUpdateRule = WorldGuardUpdates.register(this) ?: regionUpdateRule
    }
  }

  override fun onEnable() {
    playerSettings = PlayerSettingsStore(dataFolder, logger)
    playerSettings.load()

    val tools = ToolItems(this)
    val shapeEditor = ShapeEditor()
    val handEditor = HandEditor(shapeEditor)
    val typeReplacement =
        TypeReplacement(Material.entries.filter { it.isBlock }.map { it.name }.toSet())
    val blockReplacement = BlockReplacement(typeReplacement)
    holdEditor = HoldEditor(server, tools::isHoldTool, ::applyEdit)

    updateMode =
        UpdateMode(
            this,
            tools::isTool,
            regionUpdateRule,
            ::personalUpdateEnabled,
            ::writeUpdateMode,
            ::applyEdit,
        )
    val blockChangeLog =
        if (server.pluginManager.isPluginEnabled("CoreProtect")) {
          CoreProtectLogging.connect(this)
        } else {
          logger.info("CoreProtect is not installed or enabled; block change logging is disabled.")
          null
        }
    edits = BlockEditService(this, updateMode, blockChangeLog)

    val interactions =
        EditInteractionListener(
            playerSettings,
            tools,
            holdEditor,
            edits,
            shapeEditor,
            handEditor,
            blockReplacement,
        )
    // 同じ優先度のUpdate Modeより先に、通常の編集イベントを処理する。
    server.pluginManager.registerEvents(interactions, this)
    server.pluginManager.registerEvents(updateMode, this)
    DirectStateCommand(this, playerSettings, updateMode, tools::create, tools::mark).register()

    server.scheduler.runTaskTimer(
        this,
        Runnable {
          edits.tick()
          holdEditor.tick()
        },
        1L,
        1L,
    )
  }

  override fun onDisable() {
    if (::edits.isInitialized) edits.flush()
    BlockEntityAccess.flush()
    if (::holdEditor.isInitialized) holdEditor.clear()
    if (::updateMode.isInitialized) updateMode.close()
    if (::playerSettings.isInitialized) playerSettings.close()
  }

  /** 個人設定がONで、一括停止されていない場合だけ更新抑制を有効にする。 */
  private fun personalUpdateEnabled(player: Player): Boolean {
    val settings = playerSettings.get(player.uniqueId)
    return settings.updateEnabled && !settings.itemlessModesDisabled
  }

  /** UpdateModeから通知された設定変更を永続化する。 */
  private fun writeUpdateMode(player: Player, enabled: Boolean) {
    playerSettings.update(player.uniqueId) { it.updateEnabled = enabled }
  }

  /** 各Editorの単一ブロック編集を、共通の適用サービスへ渡す。 */
  private fun applyEdit(player: Player, block: Block, data: BlockData) {
    edits.apply(player, listOf(BlockEdit(block, data)))
  }
}
