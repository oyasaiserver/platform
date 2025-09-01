package com.github.srain3

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent

object TPevent : Listener {
  private var tpcmd = """/tp|/Tp|/tP|/TP""".toRegex()
  private var playerName = """\.?[a-zA-Z0-9_]*[a-zA-Z0-9_]""".toRegex()
  private lateinit var main1: TPswitch

  fun playerCmdEvent(main: TPswitch) {
    main1 = main
    return
  }

  @EventHandler
  fun onCommandPreprocess(event: PlayerCommandPreprocessEvent) {
    val msg = event.message.split(" ")
    if (msg.size == 2) {
      if (tpcmd.matches(msg[0]) && playerName.matches(msg[1])) {
        event.isCancelled = main1.onPlayerCheck(msg[1], event.player)
      }
    }
  }
}
