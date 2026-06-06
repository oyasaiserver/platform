package io.oyasai.oyasaiAdminTools.utils

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.CommandSender

object MMUtils {
    private val mm = MiniMessage.miniMessage()

    /**
     * Extension to deserialize MiniMessage strings.
     */
    fun String.mm(): Component = mm.deserialize(this)

    /**
     * Extension to send MiniMessage-formatted messages.
     */
    fun CommandSender.msg(text: String) = this.sendMessage(text.mm())

    /**
     * Global access to MiniMessage instance.
     */
    fun get() = mm
}
