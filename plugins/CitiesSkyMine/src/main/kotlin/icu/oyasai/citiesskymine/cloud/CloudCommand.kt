package icu.oyasai.citiesskymine.cloud

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.random.Random
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitTask

class CloudCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  private val activeBuilds = ConcurrentHashMap<UUID, BukkitTask>()

  fun cancelAll() {
    activeBuilds.values.forEach { it.cancel() }
    activeBuilds.clear()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.CLOUD)) return true
    build(sender, args.toList())
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.size > 5) return emptyList()
    val suggestions =
        when (args.size - 1) {
          0 -> ArgSuggest.positional("size", "1-256", listOf("64", "96", "128", "160"))
          1 -> ArgSuggest.positional("height", "1-256", listOf("16", "24", "32", "48"))
          2 -> ArgSuggest.positional("density", "0.30-0.95", listOf("0.50", "0.72", "0.85"))
          3 -> ArgSuggest.positional("seed", "0-10000000", listOf("42", "123", "2026"))
          4 -> ArgSuggest.positional("yOffset", "-256~512", listOf("80", "100", "128"))
          else -> emptyList()
        }
    return ArgSuggest.filterSuggestions(suggestions, args.lastOrNull().orEmpty())
  }

  fun sendHelp(sender: CommandSender, base: String) {
    MessageUtil.header(sender, "Cloud Generator")
    MessageUtil.helpEntry(
        sender,
        "$base [size] [height] [density] [seed] [yOffset]",
        "cobweb の雲をFAWEで生成",
    )
    MessageUtil.helpEntry(
        sender,
        "$base 128 16 0.9 2026",
        "100ブロック上, seed=2026",
    )
    MessageUtil.helpEntry(sender, "$base 128 16 0.9 2026 128", "128ブロック上, seed=2026")
    MessageUtil.info(sender, "density は元 Python の coverage 相当です。既定値は 0.72、値が大きいほど濃くなります。")
    MessageUtil.info(sender, "yOffset はプレイヤー位置から雲の底面までの高さです。既定値は 100 です。")
    MessageUtil.info(sender, "seed は 0 から $MAX_SEED までです。省略時はランダムです。")
  }

  private fun build(player: Player, rawArgs: List<String>) {
    val options = parseOptions(player, rawArgs) ?: return
    val origin = resolveOrigin(player, options)
    val volume = options.size.toLong() * options.height.toLong() * options.size.toLong()
    val maxVolume = plugin.config.getLong("limits.max-volume-cloud", 4_000_000L)
    if (maxVolume > 0 && volume > maxVolume) {
      MessageUtil.error(player, "計算ボリュームが上限 ($maxVolume) を超えています: $volume")
      return
    }
    if (activeBuilds.containsKey(player.uniqueId)) {
      MessageUtil.warn(player, "雲生成が既に実行中です。完了まで待ってください。")
      return
    }

    val world = player.world
    val playerId = player.uniqueId
    val task =
        plugin.server.scheduler.runTaskAsynchronously(
            plugin,
            Runnable {
              try {
                val plan = CloudGenerator.buildPlan(origin, options)
                val maxBlocks = maxBlocks()
                if (maxBlocks > 0 && plan.placements.size > maxBlocks) {
                  plugin.server.scheduler.runTask(
                      plugin,
                      Runnable {
                        try {
                          if (player.isOnline) {
                            MessageUtil.send(
                                player,
                                "<red>生成ブロック数が上限 ($maxBlocks) を超えています: ${plan.placements.size}</red>",
                            )
                          }
                        } finally {
                          activeBuilds.remove(playerId)
                        }
                      },
                  )
                  return@Runnable
                }
                plugin.server.scheduler.runTask(
                    plugin,
                    Runnable {
                      try {
                        if (!player.isOnline) return@Runnable
                        val result =
                            CsmEditSession.run(world, player, plugin.logger) { editSession ->
                              for (placement in plan.placements) {
                                editSession.setBlock(
                                    BlockVector3.at(placement.x, placement.y, placement.z),
                                    BukkitAdapter.adapt(placement.material.createBlockData()),
                                )
                              }
                              plan.placements.isNotEmpty()
                            }
                        MessageUtil.success(
                            player,
                            "雲を生成しました: size=${options.size} height=${options.height} density=${options.density} yOffset=${options.yOffset} seed=${options.resolvedSeed} blocks=${plan.placements.size}",
                        )
                        if (result.undoRecorded) {
                          MessageUtil.info(player, "FAWE の //undo でこの雲生成を取り消せます。")
                        } else {
                          MessageUtil.warn(player, "雲生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
                        }
                      } catch (e: Exception) {
                        if (player.isOnline) MessageUtil.error(player, "雲生成に失敗しました: ${e.message}")
                      } finally {
                        activeBuilds.remove(playerId)
                      }
                    },
                )
              } catch (e: Exception) {
                plugin.server.scheduler.runTask(
                    plugin,
                    Runnable {
                      try {
                        if (player.isOnline) MessageUtil.error(player, "雲生成に失敗しました: ${e.message}")
                      } finally {
                        activeBuilds.remove(playerId)
                      }
                    },
                )
              }
            },
        )
    activeBuilds[playerId] = task
    MessageUtil.info(
        player,
        "雲生成を開始しました: size=${options.size} height=${options.height} density=${options.density} yOffset=${options.yOffset} seed=${options.resolvedSeed}",
    )
  }

  private fun parseOptions(sender: CommandSender, rawArgs: List<String>): CloudOptions? {
    if (rawArgs.size > 5) {
      MessageUtil.error(sender, "引数が多すぎます。使い方は /csm help cloud または /.help cloud を見てください。")
      return null
    }
    val args = rawArgs.map { raw -> raw.takeUnless { ArgSuggest.isPlaceholder(it) } }

    val size =
        if (args.getOrNull(0) == null) 128
        else parseInt(sender, "size", args[0]!!, 1, 256) ?: return null
    val height =
        if (args.getOrNull(1) == null) 48
        else parseInt(sender, "height", args[1]!!, 1, 256) ?: return null
    val density =
        if (args.getOrNull(2) == null) 0.72
        else parseDouble(sender, "density", args[2]!!, 0.30, 0.95) ?: return null
    val seed = args.getOrNull(3)?.let { parseInt(sender, "seed", it, 0, MAX_SEED) ?: return null }
    val yOffset =
        if (args.getOrNull(4) == null) 100
        else parseInt(sender, "yOffset", args[4]!!, -256, 512) ?: return null
    val resolvedSeed = seed ?: Random.nextInt(0, MAX_SEED + 1)

    return CloudOptions(
        size = size,
        height = height,
        density = density,
        yOffset = yOffset,
        seed = seed,
        resolvedSeed = resolvedSeed,
    )
  }

  private fun parseInt(
      sender: CommandSender,
      key: String,
      raw: String,
      min: Int,
      max: Int,
  ): Int? {
    val value = raw.toIntOrNull()
    if (value == null) {
      MessageUtil.error(sender, "$key は整数で指定してください: $raw")
      return null
    }
    if (value !in min..max) {
      MessageUtil.error(sender, "$key は $min から $max の範囲で指定してください: $raw")
      return null
    }
    return value
  }

  private fun parseDouble(
      sender: CommandSender,
      key: String,
      raw: String,
      min: Double,
      max: Double,
  ): Double? {
    val value = raw.toDoubleOrNull()
    if (value == null) {
      MessageUtil.error(sender, "$key は数値で指定してください: $raw")
      return null
    }
    if (value < min || value > max) {
      MessageUtil.error(sender, "$key は $min から $max の範囲で指定してください: $raw")
      return null
    }
    return value
  }

  private fun resolveOrigin(player: Player, options: CloudOptions): Location =
      player.location.block.location.add(0.0, options.yOffset.toDouble(), 0.0)

  private fun maxBlocks(): Long =
      plugin.config.getLong(
          "limits.max-blocks-cloud",
          plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
      )

  private companion object {
    const val MAX_SEED = 10_000_000
  }
}
