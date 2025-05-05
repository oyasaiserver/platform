package com.github.oyasaiserver.vertex.util

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import java.text.NumberFormat
import java.util.Locale

fun emptyString() = ""

fun String.asComponent() = Component.text(this)

fun Component.asPlainText() = PlainTextComponentSerializer.plainText().serialize(this)

operator fun Component.plus(text: Component): Component = append(text)

fun Number.format(): String = NumberFormat.getNumberInstance(Locale.US).format(this)
