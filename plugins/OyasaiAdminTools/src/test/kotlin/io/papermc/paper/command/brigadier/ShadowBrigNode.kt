package io.papermc.paper.command.brigadier

import com.mojang.brigadier.tree.CommandNode
import com.mojang.brigadier.tree.LiteralCommandNode

// The API mirror exposes a handle, while reading children directly throws.
class ShadowBrigNode(private val handle: CommandNode<Any>) :
    LiteralCommandNode<Any>(handle.name, { 0 }, { false }, null, null, false) {
  fun getHandle(): CommandNode<Any> = handle

  override fun getChildren(): MutableCollection<CommandNode<Any>> =
      throw UnsupportedOperationException("Opaque API mirror")
}
