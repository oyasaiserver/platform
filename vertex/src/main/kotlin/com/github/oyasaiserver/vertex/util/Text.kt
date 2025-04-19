package com.github.oyasaiserver.vertex.util

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer

fun emptyString() = ""

fun Component.asPlainText() = PlainTextComponentSerializer.plainText().serialize(this)

operator fun Component.plus(text: Component): Component = append(text)
