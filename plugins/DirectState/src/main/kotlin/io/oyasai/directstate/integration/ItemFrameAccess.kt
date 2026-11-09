package io.oyasai.directstate.integration

import net.minecraft.util.ProblemReporter
import net.minecraft.world.entity.EntityTypes
import net.minecraft.world.entity.decoration.GlowItemFrame
import net.minecraft.world.entity.decoration.ItemFrame as NativeItemFrame
import net.minecraft.world.level.storage.TagValueInput
import net.minecraft.world.level.storage.TagValueOutput
import org.bukkit.craftbukkit.entity.CraftItemFrame
import org.bukkit.entity.ItemFrame

/** 種類の変更には再生成が必要なため、UUIDと保存データを引き継ぐ。 */
internal object ItemFrameAccess {
  fun switchGlowing(frame: ItemFrame): ItemFrame? {
    val original = (frame as CraftItemFrame).handle
    val level = original.level() as net.minecraft.server.level.ServerLevel
    val output =
        TagValueOutput.createWithContext(ProblemReporter.DISCARDING, level.registryAccess())
    original.saveWithoutId(output)
    val saved = output.buildResult()
    fun create(glowing: Boolean): NativeItemFrame {
      val entity =
          if (glowing) GlowItemFrame(EntityTypes.GLOW_ITEM_FRAME, level)
          else NativeItemFrame(EntityTypes.ITEM_FRAME, level)
      entity.load(TagValueInput.create(ProblemReporter.DISCARDING, level.registryAccess(), saved))
      return entity
    }
    val replacement = create(original !is GlowItemFrame)
    frame.remove()
    if (!level.addFreshEntity(replacement)) {
      // 削除済みインスタンスはスケジューラも終了しているため、復元時も再生成する。
      check(level.addFreshEntity(create(original is GlowItemFrame), null)) {
        "Could not restore item frame ${frame.uniqueId}"
      }
      return null
    }
    return replacement.bukkitEntity as ItemFrame
  }
}
