package io.oyasai.directstate.settings

import io.oyasai.directstate.edit.replace.TypeReplaceMode

/** プレイヤーごとの設定値。保存処理はPlayerSettingsStoreが担当する。 */
internal data class PlayerSettings(
    var handEnabled: Boolean = false,
    var updateEnabled: Boolean = false,
    var replacementEnabled: Boolean = false,
    var typeReplacementMode: TypeReplaceMode = TypeReplaceMode.OFF,
    var itemlessModesDisabled: Boolean = false,
    var inverseCushionOnShift: Boolean = false,
    var adjustmentDivisor: Int = 8,
    var forcePlacement: Boolean = true,
    var keepState: Boolean = true,
    var editSound: Boolean = true,
    var playerName: String? = null,
)
