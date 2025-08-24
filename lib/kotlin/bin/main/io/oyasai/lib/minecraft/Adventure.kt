package io.oyasai.lib.minecraft

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer

fun Component.asPlainText() = PlainTextComponentSerializer.plainText().serialize(this)
