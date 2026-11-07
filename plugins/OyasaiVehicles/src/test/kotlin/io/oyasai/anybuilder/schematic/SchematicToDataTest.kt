@file:Suppress("DEPRECATION")

package io.oyasai.anybuilder.schematic

import com.sk89q.jnbt.CompoundTag
import com.sk89q.jnbt.IntArrayTag
import com.sk89q.jnbt.IntTag
import com.sk89q.jnbt.ListTag
import com.sk89q.jnbt.NBTInputStream
import com.sk89q.jnbt.NBTOutputStream
import com.sk89q.jnbt.StringTag
import java.io.ByteArrayOutputStream
import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class SchematicToDataTest {
  @Test
  fun `stripEntitiesFromSchematicStream removes Sponge V2 BlockEntities and Entities`() {
    val bedTile =
        CompoundTag(
            mapOf("Id" to StringTag("minecraft:bed"), "Pos" to IntArrayTag(intArrayOf(1, 2, 3)))
        )
    val tileList = createCompoundListTag(listOf(bedTile))
    val v2Root =
        CompoundTag(
            mapOf(
                "Version" to IntTag(2),
                "DataVersion" to IntTag(3465),
                "Width" to IntTag(1),
                "Height" to IntTag(1),
                "Length" to IntTag(1),
                "BlockEntities" to tileList,
                "TileEntities" to tileList,
                "Entities" to tileList,
            )
        )
    val rawBytes = writeGzippedNbt("Schematic", v2Root)

    val strippedStream = SchematicToData.stripEntitiesFromSchematicStream(rawBytes)
    val parsed = NBTInputStream(GZIPInputStream(strippedStream)).use { it.readNamedTag() }

    assertEquals("Schematic", parsed.name)
    val root = parsed.tag as CompoundTag
    assertEquals(2, root.getInt("Version"))
    assertEquals(3465, root.getInt("DataVersion"))
    assertFalse(root.containsKey("BlockEntities"))
    assertFalse(root.containsKey("TileEntities"))
    assertFalse(root.containsKey("Entities"))
  }

  @Test
  fun `stripEntitiesFromSchematicStream removes Sponge V3 nested Blocks BlockEntities`() {
    val bedTile =
        CompoundTag(
            mapOf("Id" to StringTag("minecraft:bed"), "Pos" to IntArrayTag(intArrayOf(0, 1, 0)))
        )
    val tileList = createCompoundListTag(listOf(bedTile))
    val blocksTag =
        CompoundTag(
            mapOf(
                "Palette" to CompoundTag(mapOf("minecraft:stone" to IntTag(0))),
                "BlockEntities" to tileList,
            )
        )
    val v3Schematic =
        CompoundTag(
            mapOf(
                "Version" to IntTag(3),
                "DataVersion" to IntTag(4440),
                "Blocks" to blocksTag,
                "Entities" to tileList,
            )
        )
    val v3Root = CompoundTag(mapOf("Schematic" to v3Schematic))
    val rawBytes = writeGzippedNbt("", v3Root)

    val strippedStream = SchematicToData.stripEntitiesFromSchematicStream(rawBytes)
    val parsed = NBTInputStream(GZIPInputStream(strippedStream)).use { it.readNamedTag() }

    assertEquals("", parsed.name)
    val root = parsed.tag as CompoundTag
    val schematic = root.value["Schematic"] as? CompoundTag
    assertNotNull(schematic)
    assertFalse(schematic.containsKey("Entities"))
    val blocks = schematic.value["Blocks"] as? CompoundTag
    assertNotNull(blocks)
    assertTrue(blocks.containsKey("Palette"))
    assertFalse(blocks.containsKey("BlockEntities"))
  }

  private fun createCompoundListTag(items: List<CompoundTag>): ListTag<*, *> {
    val ctor = ListTag::class.java.getConstructor(Class::class.java, List::class.java)
    return ctor.newInstance(CompoundTag::class.java, items)
  }

  private fun writeGzippedNbt(rootName: String, rootTag: CompoundTag): ByteArray {
    val out = ByteArrayOutputStream()
    GZIPOutputStream(out).use { gzipOut ->
      NBTOutputStream(gzipOut).use { nbtOut -> nbtOut.writeNamedTag(rootName, rootTag) }
    }
    return out.toByteArray()
  }
}
