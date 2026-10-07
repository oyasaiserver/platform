package icu.oyasai.games.dice

import icu.oyasai.games.OyasaiGamesPlugin

class DiceModule(private val plugin: OyasaiGamesPlugin) {
  lateinit var diceItem: DiceItem
    private set

  lateinit var diceManager: DiceManager
    private set

  lateinit var chargeManager: DiceChargeManager
    private set

  fun enable() {
    diceItem = DiceItem(plugin)
    diceManager = DiceManager(plugin, diceItem)
    chargeManager = DiceChargeManager(plugin, diceItem, diceManager)
    chargeManager.start()

    val listener = DiceListener(diceItem, diceManager, chargeManager)
    plugin.server.pluginManager.registerEvents(listener, plugin)

    val diceCmd = plugin.getCommand("dice")
    if (diceCmd != null) {
      val executor = DiceCommand(diceItem, diceManager)
      diceCmd.setExecutor(executor)
      diceCmd.tabCompleter = executor
    } else {
      plugin.logger.warning("dice command is missing from plugin.yml")
    }

    plugin.logger.info("おやさいサイコロ (DiceModule) を有効化しました。")
  }

  fun disable() {
    chargeManager.shutdown()
    diceManager.shutdown()
    plugin.logger.info("おやさいサイコロ (DiceModule) を安全に停止しました。")
  }
}
