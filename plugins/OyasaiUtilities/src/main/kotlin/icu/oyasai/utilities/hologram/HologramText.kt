package icu.oyasai.utilities.hologram

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer

private val hexOpen = Regex("<#([0-9A-Fa-f]{6})>")
private val hexClose = Regex("</#[0-9A-Fa-f]{6}>")
private val animOpen = Regex("<ANIM:[^>]*>", RegexOption.IGNORE_CASE)
private val animClose = Regex("</ANIM>", RegexOption.IGNORE_CASE)

private val legacy = LegacyComponentSerializer.builder().character('&').hexColors().build()

/** `§` / MiniMessage hex / `<ANIM>` を Legacy の `&` 表記へ潰す。アニメは中身だけ残す。 */
fun normalizeHologramText(raw: String): String =
    raw.replace('§', '&')
        .replace(hexOpen) { "&#${it.groupValues[1]}" }
        .replace(hexClose, "")
        .replace(animOpen, "")
        .replace(animClose, "")

fun hologramComponent(line: String): Component = legacy.deserialize(normalizeHologramText(line))
