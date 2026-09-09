package io.oyasai.directstate

import org.bukkit.permissions.Permissible

/** コマンドと機能の権限。dsはすべての機能を含む。 */
internal object Permissions {
  const val ALL = "directstate.ds"
  const val HAND = "directstate.dsh"
  const val REPLACE = "directstate.dsr"
  const val UPDATE = "directstate.dsu"
  const val STICK = "directstate.stick"
  const val SIMPLE_STICK = "directstate.sstick"
  const val HOLD_STICK = "directstate.hstick"

  fun has(permissible: Permissible, permission: String) =
      permissible.hasPermission(ALL) || permissible.hasPermission(permission)
}
