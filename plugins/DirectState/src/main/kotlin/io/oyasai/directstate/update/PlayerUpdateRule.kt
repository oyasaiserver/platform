package io.oyasai.directstate.update

import org.bukkit.entity.Player

/** プレイヤーごとに、配置時の物理更新を抑止するか決める境界。 */
internal fun interface PlayerUpdateRule {
  /** このプレイヤーの配置で物理更新を抑止する必要があるか判定する。 */
  fun suppress(player: Player): Boolean
}
