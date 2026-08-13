package com.github.srain3.sociallikes

import java.util.Optional
import java.util.concurrent.atomic.AtomicLong
import net.minecraft.advancements.Advancement
import net.minecraft.advancements.AdvancementHolder
import net.minecraft.advancements.AdvancementProgress
import net.minecraft.advancements.AdvancementRequirements
import net.minecraft.advancements.AdvancementRewards
import net.minecraft.advancements.AdvancementType
import net.minecraft.advancements.Criterion
import net.minecraft.advancements.DisplayInfo
import net.minecraft.core.ClientAsset
import net.minecraft.network.chat.Component
import net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket
import net.minecraft.resources.Identifier
import org.bukkit.Material
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.craftbukkit.inventory.CraftItemStack
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack as BukkitItemStack

object SocialLikeToastSender {
  private const val NAMESPACE = "sociallikes3"
  private const val ROOT_CRITERION = "root"
  private const val TOAST_CRITERION = "trigger"
  private val sequence = AtomicLong()
  private val noBackground: Optional<ClientAsset.ResourceTexture> = Optional.empty()
  private val noParent: Optional<Identifier> = Optional.empty()
  private val criteria: Map<String, Criterion<*>> = emptyMap()

  fun display(player: Player, icon: BukkitItemStack, title: String) {
    val serial = nextSerial(player)
    val rootId = Identifier.fromNamespaceAndPath(NAMESPACE, "toast_root_$serial")
    val toastId = Identifier.fromNamespaceAndPath(NAMESPACE, "toast_$serial")

    val rootRequirements = AdvancementRequirements.allOf(listOf(ROOT_CRITERION))
    val toastRequirements = AdvancementRequirements.allOf(listOf(TOAST_CRITERION))
    val root =
        AdvancementHolder(
            rootId,
            advancement(
                noParent,
                DisplayInfo(
                    CraftItemStack.asNMSCopy(BukkitItemStack(Material.GRASS_BLOCK)),
                    Component.literal("SocialLikes"),
                    Component.literal("SocialLikes notification root."),
                    noBackground,
                    AdvancementType.TASK,
                    false,
                    false,
                    true,
                ),
                rootRequirements,
            ),
        )
    val toastDisplay =
        DisplayInfo(
            nmsIcon(icon),
            legacyComponent(title.ifBlank { "SocialLikes" }),
            legacyComponent("\n§7A notification."),
            noBackground,
            AdvancementType.TASK,
            true,
            false,
            true,
        )
    toastDisplay.setLocation(1F, 0F)
    val toast =
        AdvancementHolder(
            toastId,
            advancement(Optional.of(rootId), toastDisplay, toastRequirements),
        )

    val addPacket =
        ClientboundUpdateAdvancementsPacket(
            false,
            listOf(root, toast),
            emptySet(),
            mapOf(
                rootId to completedProgress(rootRequirements, ROOT_CRITERION),
                toastId to completedProgress(toastRequirements, TOAST_CRITERION),
            ),
            true,
        )
    val removePacket =
        ClientboundUpdateAdvancementsPacket(
            false,
            emptyList(),
            setOf(rootId, toastId),
            emptyMap(),
            true,
        )

    val connection = (player as CraftPlayer).handle.connection
    connection.send(addPacket)
    connection.send(removePacket)
  }

  private fun nextSerial(player: Player): String {
    return player.uniqueId.toString().replace("-", "") + "_" + sequence.incrementAndGet()
  }

  private fun advancement(
      parent: Optional<Identifier>,
      display: DisplayInfo,
      requirements: AdvancementRequirements,
  ): Advancement {
    return Advancement(
        parent,
        Optional.of(display),
        AdvancementRewards.EMPTY,
        criteria,
        requirements,
        false,
    )
  }

  private fun completedProgress(
      requirements: AdvancementRequirements,
      criterion: String,
  ): AdvancementProgress {
    return AdvancementProgress().also {
      it.update(requirements)
      it.grantProgress(criterion)
    }
  }

  private fun nmsIcon(icon: BukkitItemStack): net.minecraft.world.item.ItemStack {
    val source = if (icon.type.isItem) icon else BukkitItemStack(Material.OAK_SIGN)
    val nmsStack = CraftItemStack.asNMSCopy(source)
    return if (nmsStack.isEmpty) CraftItemStack.asNMSCopy(BukkitItemStack(Material.OAK_SIGN))
    else nmsStack
  }

  private fun legacyComponent(text: String): Component {
    return org.bukkit.craftbukkit.util.CraftChatMessage.fromStringOrEmpty(text)
  }
}
