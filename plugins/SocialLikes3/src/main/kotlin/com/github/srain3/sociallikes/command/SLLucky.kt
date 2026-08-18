package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.stats.SLDataLogger
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** /sllucky コマンド まだ自分がいいねしていない他プレイヤーの建築をランダムに1件抽選し、案内・テレポートする標準コマンド。 */
object SLLucky : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage(Tools.socialLikesLOGO + " &c/sllucky はプレイヤー専用です。".color())
      SLDataLogger.log(sender, label, args.toList(), 0, false, "Console execution blocked")
      return true
    }

    val t0 = System.currentTimeMillis()
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            Tools.plugin,
            Runnable {
              val build = SLDatabase.loadLuckyUnlikedBuildBlocking(sender.uniqueId.toString())
              val duration = System.currentTimeMillis() - t0

              Bukkit.getScheduler()
                  .runTask(
                      Tools.plugin,
                      Runnable {
                        if (build == null) {
                          sender.sendMessage(
                              Tools.socialLikesLOGO + " &e未いいねの他者建築は見つかりませんでした。".color()
                          )
                          SLDataLogger.log(
                              sender,
                              label,
                              args.toList(),
                              duration,
                              true,
                              "No unliked build found",
                          )
                          return@Runnable
                        }

                        val owner =
                            SLDatabase.loadPlayerNamesBlocking(listOf(build.ownerUuid))[
                                    build.ownerUuid] ?: "unknown"
                        sender.sendMessage(
                            Tools.socialLikesLOGO +
                                " &dLucky! &f${owner}さんの「${build.title}」(ID:${build.id}) を案内します。"
                                    .color()
                        )
                        Bukkit.dispatchCommand(sender, "sltp ${build.id}")
                        SLDataLogger.log(
                            sender,
                            label,
                            args.toList(),
                            duration,
                            true,
                            "Teleported to build ID:${build.id}",
                        )
                      },
                  )
            },
        )
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> {
    return mutableListOf()
  }
}
