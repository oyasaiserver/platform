package com.github.srain3.painttools.events

import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapDataCash
import com.github.srain3.painttools.tools.configs.MapIdList
import java.awt.Color
import java.util.*
import kotlin.math.absoluteValue
import kotlin.math.roundToInt
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.BlockFace
import org.bukkit.entity.ItemFrame
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

/** プレイヤーがブロックをクリックしたときに処理する */
object PlayerClickEvent : Listener {
  @Suppress("DEPRECATION")
  @EventHandler
  fun clickEvent(event: PlayerInteractEvent) {
    if (!event.hasBlock()) return
    if (!event.hasItem()) return

    val clickBlock = event.clickedBlock ?: return
    var clickFace = event.blockFace
    val faceVec = faceVec(clickFace)
    val entityList =
        clickBlock.world.getNearbyEntities(
            clickBlock.location.clone().add(faceVec.x + 0.5, faceVec.y + 0.5, faceVec.z + 0.5),
            0.5,
            0.5,
            0.5,
        ) {
          it is ItemFrame
        }
    if (entityList.isEmpty()) return

    val frame = (entityList.first() ?: return) as ItemFrame
    if (frame.item.type != Material.FILLED_MAP) return
    if (frame.facing != clickFace) {
      if (frame.facing != clickFace.oppositeFace) {
        return
      }
    } else {
      clickFace = clickFace.oppositeFace
    }

    val mapMeta = frame.item.itemMeta as MapMeta
    val id =
        mapMeta.persistentDataContainer.get(
            NamespacedKey(ToolBox.pl, "ID"),
            PersistentDataType.INTEGER,
        ) ?: return
    if (!MapIdList.checkID(id)) return
    val view = mapMeta.mapView ?: return
    val mMap = MapData.loadMapData(id)

    val handItem = event.item ?: return
    val sneak = event.player.isSneaking
    val rtr = event.player.rayTraceBlocks(8.0) ?: return
    val pos = clickBlock.location.toVector().subtract(rtr.hitPosition)
    view.centerX = frame.location.blockX
    view.centerZ = frame.location.blockZ

    // L=>true R=>false
    val lrSwitch =
        when (event.action) {
          Action.RIGHT_CLICK_BLOCK -> {
            // 0..2tickでイベントを更に起こしてマウスクリックでも続けて書きやすく
            if (!event.player.isSneaking) {
              // ここでイベントループを防ぐ
              if (event !is RepeatStopEvent) {
                if (!event.isCancelled) {
                  if (!MapIdList.checkLockID(id)) {
                    for (i in 1..1) {
                      object : BukkitRunnable() {
                            override fun run() {
                              val newEvent = RepeatStopEvent(event)
                              newEvent.isCancelled = true
                              Bukkit.getServer().pluginManager.callEvent(newEvent)
                            }
                          }
                          .runTaskLater(ToolBox.pl, i.toLong())
                    }
                  }
                }
              }
            }
            false
          }
          Action.LEFT_CLICK_BLOCK -> {
            true
          }
          else -> {
            null
          }
        } ?: return

    if (event.player.hasPermission("painttools.canvas.use")) {
      if (!MapIdList.checkLockID(id)) {
        if (ToolBox.checkDye(event.item?.type)) {
          val javaColor =
              when (handItem.type.name.replace("_DYE", "")) {
                "WHITE" -> {
                  Color(255, 255, 255, 255)
                }

                "ORANGE" -> {
                  Color(255, 165, 0, 255)
                }

                "MAGENTA" -> {
                  Color(255, 0, 255, 255)
                }

                "LIGHT_BLUE" -> {
                  Color(0, 255, 255, 255)
                }

                "YELLOW" -> {
                  Color(255, 255, 0, 255)
                }

                "LIME" -> {
                  Color(0, 255, 0, 255)
                }

                "PINK" -> {
                  Color(255, 128, 255, 255)
                }

                "GRAY" -> {
                  Color(128, 128, 128, 255)
                }

                "LIGHT_GRAY" -> {
                  Color(192, 192, 192, 255)
                }

                "CYAN" -> {
                  Color(0, 128, 128, 255)
                }

                "PURPLE" -> {
                  Color(128, 0, 128, 255)
                }

                "BLUE" -> {
                  Color(0, 0, 255, 255)
                }

                "BROWN" -> {
                  Color(130, 64, 16, 255)
                }

                "GREEN" -> {
                  Color(0, 128, 0, 255)
                }

                "RED" -> {
                  Color(255, 0, 0, 255)
                }

                "BLACK" -> {
                  Color(0, 0, 0, 255)
                }

                else -> {
                  Color(1, 1, 1, 0)
                }
              }
          if (lrSwitch) {
            buketPaint(sneak, pos, clickFace, mMap, javaColor)
          } else {
            paint(sneak, pos, clickFace, mMap, javaColor, userBrushSize[event.player.uniqueId] ?: 2)
          }
        } else if (event.item?.type == Material.PAPER) {
          // 透明判定用
          if (lrSwitch) {
            buketPaint(sneak, pos, clickFace, mMap, Color(1, 1, 1, 0))
          } else {
            paint(
                sneak,
                pos,
                clickFace,
                mMap,
                Color(1, 1, 1, 0),
                userBrushSize[event.player.uniqueId] ?: 2,
            )
          }
        } else if (event.item?.type == Material.FEATHER) {
          val featherMeta = event.item?.itemMeta ?: return
          if (featherMeta.hasDisplayName()) {
            val dName = featherMeta.displayName
            var javaColor =
                if (rgbRegex.matches(dName)) {
                  val split = dName.split(",")
                  val red = split[0].toIntOrNull() ?: return
                  val green = split[1].toIntOrNull() ?: return
                  val blue = split[2].toIntOrNull() ?: return
                  Color(red, green, blue)
                } else if (htmlColorRegex.matches(dName)) {
                  Color.decode("#" + dName.replace("#", ""))
                } else {
                  event.player.sendMessage(ToolBox.colorMessage("[PaintTools] &c有効なカラーコードではありません!"))
                  return
                }
            if (javaColor.red == 1 && javaColor.green == 1 && javaColor.blue == 1) {
              javaColor = Color(1, 1, 1, 0)
            }
            if (lrSwitch) {
              buketPaint(sneak, pos, clickFace, mMap, javaColor)
            } else {
              paint(
                  sneak,
                  pos,
                  clickFace,
                  mMap,
                  javaColor,
                  userBrushSize[event.player.uniqueId] ?: 2,
              )
            }
          }
        } else if (event.item?.type == Material.INK_SAC) {
          // 色を暗くさせる
          if (lrSwitch) {
            buketPaint(sneak, pos, clickFace, mMap, true)
          } else {
            grayPaint(sneak, pos, clickFace, mMap, true, userBrushSize[event.player.uniqueId] ?: 2)
          }
        } else if (event.item?.type == Material.SUGAR) {
          // 色を明るくさせる
          if (lrSwitch) {
            buketPaint(sneak, pos, clickFace, mMap, false)
          } else {
            grayPaint(sneak, pos, clickFace, mMap, false, userBrushSize[event.player.uniqueId] ?: 2)
          }
        }
      } else {
        event.player.sendMessage(ToolBox.colorMessage("[PaintTools] &cLockされたIDです!"))
      }
    }

    for (render in view.renderers) {
      view.removeRenderer(render)
    }
    view.addRenderer(mMap.render())

    event.isCancelled = true
  }

  val rgbRegex =
      Regex(
          """(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2}),(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2}),(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})""")
  val htmlColorRegex = Regex("""#?[0-9a-fA-F]{6}""")

  private fun faceVec(face: BlockFace): Vector {
    return when (face) {
      BlockFace.NORTH -> Vector(0.0, 0.0, -1.0)
      BlockFace.SOUTH -> Vector(0.0, 0.0, 1.0)
      BlockFace.WEST -> Vector(-1.0, 0.0, 0.0)
      BlockFace.EAST -> Vector(1.0, 0.0, 0.0)
      BlockFace.UP -> Vector(0.0, 1.0, 0.0)
      BlockFace.DOWN -> Vector(0.0, -1.0, 0.0)
      else -> Vector(0.0, 0.0, 0.0)
    }
  }

  private fun paint(
      sneak: Boolean,
      pos: Vector,
      facing: BlockFace,
      mapData: MapDataCash,
      javaColor: Color,
      size: Int,
  ) {
    if (!sneak) {
      var x = (pos.x.absoluteValue * 128).roundToInt().absoluteValue
      val y = 128 - (pos.y.absoluteValue * 128).roundToInt().absoluteValue
      var z = (pos.z.absoluteValue * 128).roundToInt().absoluteValue

      when (facing) {
        BlockFace.NORTH -> {
          for (x1 in x - size..x + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, javaColor)
            }
          }
        }

        BlockFace.SOUTH -> {
          x = 128 - x
          for (x1 in x - size..x + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, javaColor)
            }
          }
        }

        BlockFace.EAST -> {
          for (x1 in z - size..z + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, javaColor)
            }
          }
        }

        BlockFace.WEST -> {
          z = 128 - z
          for (x1 in z - size..z + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, javaColor)
            }
          }
        }

        BlockFace.UP,
        BlockFace.DOWN -> {
          for (x1 in x - size..x + size) {
            for (y1 in z - size..z + size) {
              setColorToPix(mapData, x1, y1, javaColor)
            }
          }
        }

        else -> {}
      }
    } else {
      mapData.cash.clear()
      // プレイヤースニーク時 塗りつぶし
      for (x1 in 0..127) {
        for (y1 in 0..127) {
          mapData.cash[(x1 + 1) + (y1 * 128)] = javaColor
        }
      }
    }
    // MapData.savaData(mapData)
  }

  private fun grayPaint(
      sneak: Boolean,
      pos: Vector,
      facing: BlockFace,
      mapData: MapDataCash,
      gray: Boolean,
      size: Int,
  ) {
    if (!sneak) {
      var x = (pos.x.absoluteValue * 128).roundToInt().absoluteValue
      val y = 128 - (pos.y.absoluteValue * 128).roundToInt().absoluteValue
      var z = (pos.z.absoluteValue * 128).roundToInt().absoluteValue

      when (facing) {
        BlockFace.NORTH -> {
          for (x1 in x - size..x + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, getColorToPix(mapData, x1, y1, gray) ?: continue)
            }
          }
        }

        BlockFace.SOUTH -> {
          x = 128 - x
          for (x1 in x - size..x + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, getColorToPix(mapData, x1, y1, gray) ?: continue)
            }
          }
        }

        BlockFace.EAST -> {
          for (x1 in z - size..z + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, getColorToPix(mapData, x1, y1, gray) ?: continue)
            }
          }
        }

        BlockFace.WEST -> {
          z = 128 - z
          for (x1 in z - size..z + size) {
            for (y1 in y - size..y + size) {
              setColorToPix(mapData, x1, y1, getColorToPix(mapData, x1, y1, gray) ?: continue)
            }
          }
        }

        BlockFace.UP,
        BlockFace.DOWN -> {
          for (x1 in x - size..x + size) {
            for (y1 in z - size..z + size) {
              setColorToPix(mapData, x1, y1, getColorToPix(mapData, x1, y1, gray) ?: continue)
            }
          }
        }

        else -> {}
      }
    } else {
      // プレイヤースニーク時 塗りつぶし
      for (x1 in 0..127) {
        for (y1 in 0..127) {
          mapData.cash[(x1 + 1) + (y1 * 128)] = getColorToPix(mapData, x1, y1, gray) ?: continue
        }
      }
    }
  }

  private fun setColorToPix(mapData: MapDataCash, x1: Int, y1: Int, color: Color) {
    if (x1 < 0 || x1 > 127 || y1 < 0 || y1 > 127) return
    mapData.cash[(x1 + 1) + (y1 * 128)] = color
  }

  private fun getColorToPix(mapData: MapDataCash, x1: Int, y1: Int, gray: Boolean): Color? {
    if (x1 < 0 || x1 > 127 || y1 < 0 || y1 > 127) return null
    val color = mapData.cash[(x1 + 1) + (y1 * 128)] ?: return null
    var newRed =
        if (gray) {
          (color.red * 0.75).toInt()
        } else {
          (color.red * 1.25).toInt()
        }
    if (newRed !in 0..255) {
      newRed = 255
    }
    var newGreen =
        if (gray) {
          (color.green * 0.75).toInt()
        } else {
          (color.green * 1.25).toInt()
        }
    if (newGreen !in 0..255) {
      newGreen = 255
    }
    var newBlue =
        if (gray) {
          (color.blue * 0.75).toInt()
        } else {
          (color.blue * 1.25).toInt()
        }
    if (newBlue !in 0..255) {
      newBlue = 255
    }

    return Color(newRed, newGreen, newBlue, color.alpha)
  }

  private fun getColorToPix(mapData: MapDataCash, x1: Int, y1: Int): Color? {
    if (x1 < 0 || x1 > 127 || y1 < 0 || y1 > 127) return null
    return mapData.cash[(x1 + 1) + (y1 * 128)]
  }

  private fun buketPaint(
      sneak: Boolean,
      pos: Vector,
      facing: BlockFace,
      mapData: MapDataCash,
      javaColor: Color,
  ) {
    var x = (pos.x.absoluteValue * 128).roundToInt().absoluteValue
    val y = 128 - (pos.y.absoluteValue * 128).roundToInt().absoluteValue
    var z = (pos.z.absoluteValue * 128).roundToInt().absoluteValue

    when (facing) {
      BlockFace.NORTH -> {
        val selectColor = getColorToPix(mapData, x, y) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, y)
        }
      }

      BlockFace.SOUTH -> {
        x = 128 - x
        val selectColor = getColorToPix(mapData, x, y) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, y)
        }
      }

      BlockFace.EAST -> {
        val selectColor = getColorToPix(mapData, z, y) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, z, y)
        }
      }

      BlockFace.WEST -> {
        z = 128 - z
        val selectColor = getColorToPix(mapData, z, y) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, z, y)
        }
      }

      BlockFace.UP,
      BlockFace.DOWN -> {
        val selectColor = getColorToPix(mapData, x, z) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, z)
        }
      }

      else -> {}
    }
  }

  private fun buketPaint(
      sneak: Boolean,
      pos: Vector,
      facing: BlockFace,
      mapData: MapDataCash,
      gray: Boolean,
  ) {
    var x = (pos.x.absoluteValue * 128).roundToInt().absoluteValue
    val y = 128 - (pos.y.absoluteValue * 128).roundToInt().absoluteValue
    var z = (pos.z.absoluteValue * 128).roundToInt().absoluteValue

    when (facing) {
      BlockFace.NORTH -> {
        val selectColor = getColorToPix(mapData, x, y) ?: return
        val javaColor = getColorToPix(mapData, x, y, gray) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, y)
        }
      }

      BlockFace.SOUTH -> {
        x = 128 - x
        val selectColor = getColorToPix(mapData, x, y) ?: return
        val javaColor = getColorToPix(mapData, x, y, gray) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, y)
        }
      }

      BlockFace.EAST -> {
        val selectColor = getColorToPix(mapData, z, y) ?: return
        val javaColor = getColorToPix(mapData, z, y, gray) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, z, y)
        }
      }

      BlockFace.WEST -> {
        z = 128 - z
        val selectColor = getColorToPix(mapData, z, y) ?: return
        val javaColor = getColorToPix(mapData, z, y, gray) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, z, y)
        }
      }

      BlockFace.UP,
      BlockFace.DOWN -> {
        val selectColor = getColorToPix(mapData, x, z) ?: return
        val javaColor = getColorToPix(mapData, x, z, gray) ?: return
        if (selectColor == javaColor) return
        if (sneak) {
          buketTaskALL(selectColor, mapData, javaColor)
        } else {
          buketTaskFill(selectColor, mapData, javaColor, x, z)
        }
      }

      else -> {}
    }
  }

  private fun buketTaskALL(selectColor: Color, mapData: MapDataCash, javaColor: Color) {
    mapData.cash.forEach { (index, oldColor) ->
      if (selectColor == oldColor) {
        mapData.cash[index] = javaColor
      }
    }
  }

  private fun buketTaskFill(
      selectColor: Color,
      mapData: MapDataCash,
      javaColor: Color,
      x: Int,
      y: Int,
  ) {
    if (x < 0 || x > 127 || y < 0 || y > 127) return
    if (mapData.cash[(x + 1) + (y * 128)] != selectColor) return
    if (selectColor == javaColor) return
    mapData.cash[(x + 1) + (y * 128)] = javaColor
    buketTaskFill(selectColor, mapData, javaColor, x + 1, y)
    buketTaskFill(selectColor, mapData, javaColor, x - 1, y)
    buketTaskFill(selectColor, mapData, javaColor, x, y + 1)
    buketTaskFill(selectColor, mapData, javaColor, x, y - 1)
    // Java起動時に-Xssのサイズを大きめ(開発時は5M指定)でエラーなくなる
  }

  // 一時保存のブラシサイズ
  private val userBrushSize = mutableMapOf<UUID, Int>()

  fun setBrushSize(uuid: UUID, size: Int) {
    userBrushSize[uuid] = size
  }
}
