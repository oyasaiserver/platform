package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
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
import org.bukkit.craftbukkit.util.CraftChatMessage
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

/** 右上Toastをクライアントへ一時Advancementパケットとして直接送る。 BukkitのloadAdvancement方式と異なり、サーバーの進捗データには保存しない。 */
class ToastNotificationService(private val plugin: OyasaiMusic) {

  private companion object {
    const val NAMESPACE = "oyasaimusic"
    const val ROOT_CRITERION = "root"
    const val TOAST_CRITERION = "trigger"
  }

  private val sequence = AtomicLong()
  private val noBackground: Optional<ClientAsset.ResourceTexture> = Optional.empty()
  private val noParent: Optional<Identifier> = Optional.empty()
  private val criteria: Map<String, Criterion<*>> = emptyMap()

  fun showLikeReceived(author: Player, songTitle: String, likerName: String) {
    if (!author.isOnline) return
    display(
        player = author,
        icon = ItemStack(Material.HEART_OF_THE_SEA),
        title = "§d$likerName §fさんが §b「$songTitle」 §fにいいねしました",
    )
    plugin.soundEffectService.play(PluginSoundEffect.LIKE_RECEIVED, listOf(author))
  }

  private fun display(player: Player, icon: ItemStack, title: String) {
    val serial = player.uniqueId.toString().replace("-", "") + "_${sequence.incrementAndGet()}"
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
                    CraftItemStack.asNMSCopy(ItemStack(Material.GRASS_BLOCK)),
                    Component.literal("OyasaiMusic"),
                    Component.literal("OyasaiMusic notification root."),
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
            legacyComponent(title.ifBlank { "OyasaiMusic" }),
            legacyComponent("\n§7いいねを受け取りました"),
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

  private fun advancement(
      parent: Optional<Identifier>,
      display: DisplayInfo,
      requirements: AdvancementRequirements,
  ): Advancement =
      Advancement(
          parent,
          Optional.of(display),
          AdvancementRewards.EMPTY,
          criteria,
          requirements,
          false,
      )

  private fun completedProgress(
      requirements: AdvancementRequirements,
      criterion: String,
  ): AdvancementProgress =
      AdvancementProgress().also {
        it.update(requirements)
        it.grantProgress(criterion)
      }

  private fun nmsIcon(icon: ItemStack): net.minecraft.world.item.ItemStack {
    val source = if (icon.type.isItem) icon else ItemStack(Material.OAK_SIGN)
    val nmsStack = CraftItemStack.asNMSCopy(source)
    return if (nmsStack.isEmpty) CraftItemStack.asNMSCopy(ItemStack(Material.OAK_SIGN))
    else nmsStack
  }

  private fun legacyComponent(text: String): Component = CraftChatMessage.fromStringOrEmpty(text)
}
