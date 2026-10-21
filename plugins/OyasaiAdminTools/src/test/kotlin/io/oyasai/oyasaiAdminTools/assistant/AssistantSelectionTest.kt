package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.worldedit.LocalSession
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.math.Vector3
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import com.sk89q.worldedit.regions.selector.EllipsoidRegionSelector
import com.sk89q.worldedit.world.NullWorld
import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.Server
import org.bukkit.entity.Player
import org.bukkit.plugin.PluginManager

class AssistantSelectionTest {
  private class World(private val worldName: String) : NullWorld() {
    override fun getName() = worldName

    override fun getMinY() = -64

    override fun getMaxY() = 319

    override fun getBlock(position: BlockVector3): Nothing = error("Must not read blocks")
  }

  private val world = World("selection-world")

  @Test
  fun absentAndIncompleteSelectionsAreReported() {
    assertContains(FaweSelection.read(null, world), "選択範囲がありません")
    val session = LocalSession()
    assertContains(FaweSelection.read(session, world), "選択範囲がありません")
    session.setRegionSelector(world, CuboidRegionSelector(world))
    assertContains(FaweSelection.read(session, world), "未完了")
  }

  @Test
  fun returnsCuboidBoundsInclusiveDimensionsAndLongVolumeWithoutReadingBlocks() {
    val session = LocalSession()
    session.setRegionSelector(
        world,
        CuboidRegionSelector(
            world,
            BlockVector3.at(100000, 99, 100000),
            BlockVector3.at(-2, 0, -3),
        ),
    )
    assertEquals(
        "world=selection-world; shape=cuboid; min=(-2,0,-3); max=(100000,99,100000); " +
            "size=(x=100003,y=100,z=100004); blocks=1000070001200",
        FaweSelection.read(session, world),
    )
  }

  @Test
  fun nonCuboidUsesTheRegionsVolumeInsteadOfBoundingBoxVolume() {
    val session = LocalSession()
    val selector =
        EllipsoidRegionSelector(world, BlockVector3.at(0, 64, 0), Vector3.at(2.0, 3.0, 4.0))
    session.setRegionSelector(world, selector)
    val result = FaweSelection.read(session, world)
    assertContains(result, "shape=ellipsoid")
    assertContains(result, "size=(x=5,y=7,z=9)")
    assertContains(result, "blocks=${selector.region.volume}")
    assertTrue(selector.region.volume < 5 * 7 * 9)
  }

  @Test
  fun differentWorldDoesNotClearOrMoveTheSelection() {
    val session = LocalSession()
    val selector = CuboidRegionSelector(world, BlockVector3.ZERO, BlockVector3.ONE)
    session.setRegionSelector(world, selector)
    assertContains(FaweSelection.read(session, World("other")), "ワールドが現在のワールドと異なります")
    assertSame(world, session.selectionWorld)
    assertSame(selector.region, session.getSelection(world))
    assertContains(FaweSelection.read(session, world), "blocks=8")
  }

  private inline fun <reified T> fake(crossinline action: (String) -> Any?): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, method, _ ->
        action(method.name)
      } as T

  @Test
  fun unavailablePluginAndMissingClassesReturnUnavailable() {
    for (enabled in listOf(false, true)) {
      val manager =
          fake<PluginManager> { name ->
            check(name == "isPluginEnabled")
            enabled
          }
      val server =
          fake<Server> { name ->
            check(name == "getPluginManager")
            manager
          }
      val player =
          fake<Player> { name ->
            check(name == "getServer")
            server
          }
      val parent = javaClass.classLoader
      val loader =
          object : ClassLoader(parent) {
            override fun loadClass(name: String, resolve: Boolean): Class<*> {
              if (name.startsWith("com.sk89q.") || name.startsWith("com.fastasyncworldedit."))
                  throw ClassNotFoundException(name)
              if (
                  name == AssistantSelection::class.java.name ||
                      name == FaweSelection::class.java.name
              ) {
                val loaded =
                    findLoadedClass(name)
                        ?: run {
                          val bytes =
                              parent.getResourceAsStream(name.replace('.', '/') + ".class")!!.use {
                                it.readBytes()
                              }
                          defineClass(name, bytes, 0, bytes.size)
                        }
                if (resolve) resolveClass(loaded)
                return loaded
              }
              return super.loadClass(name, resolve)
            }
          }
      val type = loader.loadClass(AssistantSelection::class.java.name)
      val result =
          type
              .getMethod("read", Player::class.java)
              .invoke(type.getField("INSTANCE").get(null), player)
      assertContains(result as String, "FAWE が使えません")
    }
  }
}
