package io.oyasai.directstate.edit.hand

import io.oyasai.directstate.edit.hand.HandEditor.Result
import io.oyasai.directstate.edit.hand.HandGeometry.CrafterPart
import io.oyasai.directstate.edit.hand.HandGeometry.LocalPart
import io.oyasai.directstate.edit.hand.HandGeometry.crafterPart
import io.oyasai.directstate.edit.hand.HandGeometry.cycleAxis
import io.oyasai.directstate.edit.hand.HandGeometry.cycleFacing
import io.oyasai.directstate.edit.hand.HandGeometry.cycleRotation
import io.oyasai.directstate.edit.hand.HandGeometry.dripstoneThicknessOrder
import io.oyasai.directstate.edit.hand.HandGeometry.horizontalFaces
import io.oyasai.directstate.edit.hand.HandGeometry.isCrafterTriggerVertex
import io.oyasai.directstate.edit.hand.HandGeometry.isHangingSignUpperSideHit
import io.oyasai.directstate.edit.hand.HandGeometry.isPistonExtendedHit
import io.oyasai.directstate.edit.hand.HandGeometry.isPistonHeadRootHit
import io.oyasai.directstate.edit.hand.HandGeometry.isRedstonePowerCenterHit
import io.oyasai.directstate.edit.hand.HandGeometry.isVerticalFace
import io.oyasai.directstate.edit.hand.HandGeometry.localPart
import io.oyasai.directstate.edit.hand.HandGeometry.selectClickedFace
import io.oyasai.directstate.edit.hand.HandGeometry.toggleChorusFace
import io.oyasai.directstate.edit.hand.HandGeometry.toggleMultipleFacing
import io.oyasai.directstate.edit.hand.HandGeometry.toggleSensorPhase
import io.oyasai.directstate.edit.hand.HandMaterials.ATTACHED_STEM_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.CORAL_FAN_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.FURNACE_HOLE_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.PLAIN_BRUSHABLE_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.PUMPKIN_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.STEM_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.SUSPICIOUS_MATERIALS
import io.oyasai.directstate.edit.hand.HandMaterials.attachedStemMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.growthFaceMaterials
import io.oyasai.directstate.edit.hand.HandMaterials.hangingSignMaterialTransition
import io.oyasai.directstate.edit.hand.HandMaterials.isAnvilMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.isFacingMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.isRotatableMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.isSign
import io.oyasai.directstate.edit.hand.HandMaterials.mushroomFaceMaterials
import io.oyasai.directstate.edit.hand.HandMaterials.nextAnvilMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.regularStemMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.strippedCounterpart
import io.oyasai.directstate.edit.hand.HandMaterials.switchMaterial
import io.oyasai.directstate.edit.hand.HandMaterials.twoBlockPlantMaterials
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.block.Orientation
import org.bukkit.block.data.*
import org.bukkit.block.data.type.*
import org.bukkit.util.Vector

/** ブロック固有の操作。上から最初に一致した操作を適用する。 */
internal object BlockStateEditor {
  /** 一つの幾何操作が「対象ブロックの判定」と「編集処理」を一緒に持つ。 同じ対象条件を supports と edit の二か所へ書かずに済ませるための中間層。 */
  private class Rule(
      val id: String,
      val matches: (BlockData) -> Boolean,
      val edit: (BlockData, BlockClick) -> Result?,
  )

  /** T型だけにmatchesとeditを呼び、登録箇所で型変換を書かなくて済むようにする。 */
  private inline fun <reified T : BlockData> rule(
      id: String,
      noinline matches: (T) -> Boolean = { true },
      noinline edit: (T, BlockClick) -> Result?,
  ) = Rule(id, { it is T && matches(it) }, { data, click -> edit(data as T, click) })

  private val cauldrons =
      setOf("CAULDRON", "WATER_CAULDRON", "POWDER_SNOW_CAULDRON", "LAVA_CAULDRON")
  private val bambooBlocks = setOf("BAMBOO_BLOCK", "STRIPPED_BAMBOO_BLOCK")
  private val ironOpenables = setOf("IRON_DOOR", "IRON_TRAPDOOR")
  /** クリック位置の解釈が必要な操作。ここで登録してく　並び順が、そのまま判定の優先順になる。 */
  private val geometryRules =
      listOf(
          rule<BlockData>("cauldron", { it.material.name in cauldrons }, ::editCauldron),
          rule<CopperBulb>(
              "copper-bulb",
              { it.material.name == "COPPER_BULB" || it.material.name.endsWith("_COPPER_BULB") },
              ::editCopperBulb,
          ),
          rule<MultipleFacing>(
              "chorus-plant",
              { it.material.name == "CHORUS_PLANT" },
              ::editChorusPlant,
          ),
          rule<BlockData>(
              "repeater-comparator",
              { it.material.name == "COMPARATOR" || it.material.name == "REPEATER" },
              ::editRepeaterOrComparator,
          ),
          rule<CaveVinesPlant>(
              "cave-vines",
              { it.material.name.contains("CAVE_VINES") },
              ::editCaveVines,
          ),
          rule<Piston>(
              "piston",
              { it.material.name == "PISTON" || it.material.name == "STICKY_PISTON" },
              ::editPiston,
          ),
          rule<PistonHead>("piston-head", { it.material.name == "PISTON_HEAD" }, ::editPistonHead),
          rule<Crafter>("crafter", edit = ::editCrafter),
          rule<ChiseledBookshelf>("bookshelf", edit = ::editBookshelf),
          rule<MossyCarpet>("mossy-carpet", edit = ::editMossyCarpet),
          rule<BlockData>("sign", { isSign(it) }, ::editSign),
          rule<MultipleFacing>(
              "growth-faces",
              { it.material.name in growthFaceMaterials },
              ::editGrowthFaces,
          ),
          rule<RedstoneWire>(
              "redstone-wire",
              { it.material.name == "REDSTONE_WIRE" },
              ::editRedstone,
          ),
          rule<Observer>("observer", { it.material.name == "OBSERVER" }, ::editObserver),
      )

  internal val geometryRuleIds
    get() = geometryRules.map { it.id }

  /** falseならクリックを消費せず、Minecraft本来の操作へ譲る。 */
  fun supports(data: BlockData): Boolean {
    val name = data.material.name
    if (geometryRules.any { it.matches(data) }) return true

    // 材質名を問わず、BlockDataの種類だけで操作が決まるもの。
    when (data) {
      is Furnace,
      is Gate,
      is Rail,
      is TripwireHook,
      is Campfire,
      is LightningRod,
      is Speleothem,
      is Ladder,
      is Chain,
      is MangrovePropagule,
      is TrialSpawner,
      is Vault,
      is Bed,
      is Beehive,
      is Candle,
      is CreakingHeart,
      is DriedGhast,
      is RespawnAnchor,
      is SculkSensor,
      is SculkCatalyst,
      is SculkShrieker,
      is SeaPickle,
      is FlowerBed,
      is LeafLitter,
      is Dripleaf,
      is Grindstone,
      is Hopper,
      is HangingMoss,
      is Skull,
      is WallSkull,
      is PotentSulfur,
      is Orientable -> return true
    }

    // 同じBlockData型でも、一部の材質だけに専用操作があるもの。
    return when {
      data is MultipleFacing && name == "IRON_BARS" -> true
      data is Openable && name in ironOpenables -> true
      data is BrewingStand && name == "BREWING_STAND" -> true
      data is Farmland && name == "FARMLAND" -> true
      data is Lectern && name == "LECTERN" -> true
      name == "KELP" || name == "KELP_PLANT" -> true
      data is Bamboo && name == "BAMBOO" -> true
      data is Cake && name == "CAKE" -> true
      data is Lantern && name.endsWith("LANTERN") -> true
      data is TurtleEgg && name == "TURTLE_EGG" -> true
      data is Hatchable && name == "SNIFFER_EGG" -> true
      data is Brushable && name in SUSPICIOUS_MATERIALS -> true
      name in PLAIN_BRUSHABLE_MATERIALS -> true
      name == "ICE" || name == "FROSTED_ICE" -> true
      data is Ageable && name == "CHORUS_FLOWER" -> true
      name in CORAL_FAN_MATERIALS -> true
      name == "PUMPKIN" || data is Directional && name in PUMPKIN_MATERIALS -> true
      name == "TORCHFLOWER" -> true
      data is Snow && name == "SNOW" -> true
      data is Rotatable && isRotatableMaterial(name) -> true
      data is Directional && isAnvilMaterial(name) -> true
      data is Ageable && name in STEM_MATERIALS -> true
      data is Directional && name in ATTACHED_STEM_MATERIALS -> true
      data is Directional && isFacingMaterial(name) -> true
      data is EndPortalFrame && name == "END_PORTAL_FRAME" -> true
      data is Chest && name == "CHEST" -> true
      data is Bell && name == "BELL" || name == "ENCHANTING_TABLE" -> true
      data is Scaffolding && name == "SCAFFOLDING" -> true
      data is Bisected && name in twoBlockPlantMaterials -> true
      data is MultipleFacing && name in mushroomFaceMaterials -> true
      name == "SEAGRASS" -> true
      else -> false
    }
  }

  /** 最初に一致した専用操作を試す。nullなら共通状態や材質切替へ処理を譲る。 */
  fun edit(
      data: BlockData,
      face: BlockFace?,
      hit: Vector = Vector(0.5, 0.5, 0.5),
      blockEntityPresent: Boolean = true,
  ): Result? {
    val name = data.material.name
    val click = BlockClick(hit, face)
    val geometryRule = geometryRules.firstOrNull { it.matches(data) }
    if (geometryRule != null) return geometryRule.edit(data, click)

    if (name in setOf("SEAGRASS", "TALL_SEAGRASS") && face == BlockFace.UP) {
      return Result(data, if (name == "SEAGRASS") Material.TALL_SEAGRASS else Material.SEAGRASS)
    }

    if (data is MultipleFacing && name == "IRON_BARS") {
      toggleMultipleFacing(data, face)
      return Result(data)
    }

    when {
      data is Furnace -> {
        if (name in FURNACE_HOLE_MATERIALS) {
          if (face == data.facing) data.isLit = !data.isLit else cycleFacing(data)
        } else if (click.isVertical) {
          data.isLit = !data.isLit
        } else {
          cycleFacing(data)
        }
      }
      data is Openable && name in ironOpenables -> {
        data.isOpen = !data.isOpen
      }
      data is Barrel && name == "BARREL" -> {
        if (face == data.facing) data.isOpen = !data.isOpen else cycleFacing(data)
      }
      data is BrewingStand && name == "BREWING_STAND" -> {
        // 左の枠から反転し、空き枠に置けたら止める。3枠の全8通りを巡回する。
        for (slot in 0..2) {
          val occupied = data.hasBottle(slot)
          data.setBottle(slot, !occupied)
          if (!occupied) break
        }
      }
      data is Farmland && name == "FARMLAND" -> {
        // 中間値も正規化し、乾湿の二値だけを切り替える。
        data.moisture = if (data.moisture == 0) data.maximumMoisture else 0
      }
      data is Scaffolding && name == "SCAFFOLDING" -> {
        data.isBottom = !data.isBottom
      }
      data is Lectern && name == "LECTERN" -> {
        data.setHasBook(!data.hasBook())
      }
      name == "KELP" || name == "KELP_PLANT" -> {
        return Result(data, switchMaterial(name))
      }
      data is Bamboo && name == "BAMBOO" -> {
        // 竹の状態を、タケノコ -> 普通の竹 -> 毛が生えた竹の順で切り替える。
        val leaves = Bamboo.Leaves.entries
        data.leaves = leaves[(leaves.indexOf(data.leaves) + 1) % leaves.size]
      }
      data is Cake && name == "CAKE" -> {
        data.bites = next(data.bites, data.maximumBites)
      }
      data is Lantern && name.endsWith("LANTERN") -> {
        data.isHanging = !data.isHanging
      }
      data is TurtleEgg && name == "TURTLE_EGG" -> {
        data.eggs = next(data.eggs, data.maximumEggs, data.minimumEggs)
      }
      data is Hatchable && name == "SNIFFER_EGG" -> {
        data.hatch = next(data.hatch, data.maximumHatch)
      }
      name in PLAIN_BRUSHABLE_MATERIALS -> {
        val target = if (name == "SAND") Material.SUSPICIOUS_SAND else Material.SUSPICIOUS_GRAVEL
        val brushable = target.createBlockData() as Brushable
        brushable.dusted = 0
        return Result(brushable, target)
      }
      data is Brushable && name in SUSPICIOUS_MATERIALS -> {
        if (data.dusted >= data.maximumDusted) {
          val target = if (name == "SUSPICIOUS_SAND") Material.SAND else Material.GRAVEL
          return Result(target.createBlockData(), target)
        }
        data.dusted = next(data.dusted, data.maximumDusted)
      }
      name == "ICE" -> {
        val frosted = Material.FROSTED_ICE.createBlockData() as Ageable
        frosted.age = 0
        return Result(frosted, Material.FROSTED_ICE)
      }
      data is Ageable && name == "FROSTED_ICE" -> {
        if (data.age >= data.maximumAge) {
          return Result(Material.ICE.createBlockData(), Material.ICE)
        }
        data.age++
      }
      data is Ageable && name == "CHORUS_FLOWER" -> {
        // chorus flower は通常のage cycleではなく、未開花/開花の2段階に正規化する。
        data.age = if (data.age == 5) 0 else 5
      }
      data is Ageable && data is Bisected && name == "PITCHER_CROP" && face == BlockFace.UP -> {
        if (data.half == Bisected.Half.TOP) {
          data.age =
              when {
                data.age < 3 -> 3.coerceAtMost(data.maximumAge)
                data.age >= data.maximumAge -> 3.coerceAtMost(data.maximumAge)
                else -> data.maximumAge
              }
        } else {
          data.age = next(data.age, data.maximumAge)
        }
      }
      data is Ageable && name == "TORCHFLOWER_CROP" -> {
        if (data.age >= data.maximumAge) {
          val flower = Material.TORCHFLOWER.createBlockData()
          return Result(flower, Material.TORCHFLOWER)
        }
        data.age++
      }
      name == "TORCHFLOWER" -> {
        val crop = Material.TORCHFLOWER_CROP.createBlockData() as Ageable
        crop.age = 0
        return Result(crop, Material.TORCHFLOWER_CROP)
      }
      data is Snow && name == "SNOW" -> {
        data.layers = next(data.layers, data.maximumLayers, data.minimumLayers)
      }
      data is Directional && isAnvilMaterial(name) -> {
        if (face == BlockFace.UP) {
          return Result(data, nextAnvilMaterial(name))
        }
        cycleFacing(data)
      }
      name in CORAL_FAN_MATERIALS ->
          coralEdit(data, name, face)?.let {
            return it
          }
      name in STEM_MATERIALS || name in ATTACHED_STEM_MATERIALS -> {
        if (face == BlockFace.UP) {
          return Result(
              data,
              if (name in STEM_MATERIALS) attachedStemMaterial(name) else regularStemMaterial(name),
          )
        }
        if (data is Directional) cycleFacing(data)
        else if (data is Ageable) data.age = next(data.age, data.maximumAge)
      }
      data is Rail -> {
        val shapes = data.shapes.toList().sortedBy { it.ordinal }
        if (shapes.isNotEmpty()) data.shape = shapes[(shapes.indexOf(data.shape) + 1) % shapes.size]
      }
      data is Gate -> {
        if (click.isVertical) data.isInWall = !data.isInWall else cycleFacing(data)
      }
      data is Rotatable && isRotatableMaterial(name) -> {
        cycleRotation(data)
      }
      data is EndPortalFrame && name == "END_PORTAL_FRAME" -> {
        if (click.isVertical) data.setEye(!data.hasEye()) else cycleFacing(data)
      }
      data is Chest && name == "CHEST" -> {
        cycleFacing(data)
      }
      data is Bell && name == "BELL" -> {
        if (face == BlockFace.UP) {
          val attachments = Bell.Attachment.entries
          data.attachment =
              attachments[(attachments.indexOf(data.attachment) + 1) % attachments.size]
          if (!blockEntityPresent) return Result(data, blockEntityPresent = false)
        } else if (face in horizontalFaces) {
          if (click.position.y >= 13.0 / 16.0) {
            cycleFacing(data)
            if (!blockEntityPresent) return Result(data, blockEntityPresent = false)
          } else {
            return Result(data, blockEntityPresent = !blockEntityPresent)
          }
        } else {
          cycleFacing(data)
        }
      }
      name == "ENCHANTING_TABLE" -> {
        return Result(data, blockEntityPresent = !blockEntityPresent)
      }
      data is Orientable && name in bambooBlocks -> {
        if (click.isVertical)
            switchMaterial(name)?.let {
              return Result(data, it)
            }
        else cycleAxis(data)
      }
      data is Orientable && strippedCounterpart(name) != null -> {
        if (face == null || click.isFaceEdge(insetPixels = 4)) {
          cycleAxis(data)
        } else {
          return Result(data, strippedCounterpart(name))
        }
      }
      name == "PUMPKIN" -> {
        // 通常のカボチャにはfacingがないため、側面クリック時に
        // クリック面をfacingとしてくりぬきカボチャへ変換する。
        if (face in horizontalFaces) {
          val carved = Material.CARVED_PUMPKIN.createBlockData() as Directional
          carved.facing = face ?: return Result(data)
          return Result(carved, Material.CARVED_PUMPKIN)
        }
      }
      data is Directional && name in PUMPKIN_MATERIALS -> {
        when {
          click.isVertical -> cycleFacing(data)
          face == data.facing -> {
            val target = if (name == "CARVED_PUMPKIN") Material.JACK_O_LANTERN else Material.PUMPKIN
            return Result(data, target)
          }
          else -> cycleFacing(data)
        }
      }
      data is Directional && isFacingMaterial(name) -> {
        cycleFacing(data)
      }
      name in HandMaterials.materialSwitches ->
          switchMaterial(name)?.let {
            return Result(data, it)
          }
      data is TripwireHook -> {
        when (click.part(data.facing)) {
          null,
          LocalPart.FRONT -> return null
          LocalPart.BACK,
          LocalPart.SIDE,
          LocalPart.TOP,
          LocalPart.BOTTOM -> cycleFacing(data)
        }
      }
      data is Campfire -> {
        when (click.part(data.facing)) {
          null,
          LocalPart.TOP -> return null
          LocalPart.BOTTOM -> data.isSignalFire = !data.isSignalFire
          LocalPart.FRONT,
          LocalPart.BACK,
          LocalPart.SIDE -> cycleFacing(data)
        }
      }
      data is LightningRod -> {
        when (click.part(data.facing)) {
          LocalPart.SIDE,
          LocalPart.TOP,
          LocalPart.BOTTOM -> cycleFacing(data)
          LocalPart.FRONT,
          LocalPart.BACK,
          null -> return null
        }
      }
      data is Speleothem -> {
        when (face?.let { localPart(it, data.verticalDirection) }) {
          null,
          LocalPart.FRONT,
          LocalPart.BACK -> {
            data.verticalDirection =
                if (data.verticalDirection == BlockFace.UP) BlockFace.DOWN else BlockFace.UP
          }
          LocalPart.SIDE -> {
            data.thickness =
                dripstoneThicknessOrder[
                    (dripstoneThicknessOrder.indexOf(data.thickness) + 1) %
                        dripstoneThicknessOrder.size]
          }
          // TOP/BOTTOM: vertical-only domainでは到達不能 (上下は必ずFRONT/BACKのいずれか)。
          LocalPart.TOP,
          LocalPart.BOTTOM -> return null
        }
      }
      data is Ladder -> cycleFacing(data)
      data is Chain -> cycleAxis(data)
      data is MangrovePropagule -> {
        // 上下面 → hanging toggle。他面・面なし → 汎用ageへ譲る (stageは対象外)。
        if (!isVerticalFace(face)) return null
        data.isHanging = !data.isHanging
      }
      data is TrialSpawner -> {
        // 全面 → ominous toggle。trial_spawner_stateは遷移中のため対象外。
        data.isOminous = !data.isOminous
      }
      data is Vault -> {
        // 上下面 → facing rotate。他面・面なし → ominous toggle。vault_stateは対象外。
        if (isVerticalFace(face)) cycleFacing(data) else data.isOminous = !data.isOminous
      }
      data is Bed -> {
        // ベッドはクリックされた1ブロックだけを独立した編集対象として扱う。
        if (face == null) return null
        if (isVerticalFace(face)) {
          cycleFacing(data)
        } else {
          val facing = data.facing
          data.part = if (data.part == Bed.Part.FOOT) Bed.Part.HEAD else Bed.Part.FOOT
          data.facing = facing
        }
      }
      data is Beehive -> {
        // 蜜の面だけ 0/5、それ以外の面は facing を回す。
        if (face == null) return null
        if (face == data.facing)
            data.honeyLevel = if (data.honeyLevel == 0) data.maximumHoneyLevel else 0
        else cycleFacing(data)
      }
      data is Candle -> {
        // 上面は本数、側面は点灯/消灯。側面の音はHandEditorのResultで伝える。
        when {
          face == BlockFace.UP -> {
            if (data.maximumCandles <= data.minimumCandles) return null
            data.candles = next(data.candles, data.maximumCandles, data.minimumCandles)
          }
          face != null -> data.isLit = !data.isLit
          else -> return null
        }
        return Result(
            data,
            sound = if (face != BlockFace.UP) Sound.BLOCK_CANDLE_EXTINGUISH else null,
        )
      }
      data is Skull -> {
        // 通常の頭はrotation。ドラゴンだけ水平な側面でpoweredを切り替える。
        if (data.material.name == "DRAGON_HEAD" && face in horizontalFaces) {
          data.isPowered = !data.isPowered
        } else {
          cycleRotation(data)
        }
      }
      data is WallSkull -> {
        // 壁頭はrotationを持たないため、通常はfacingをrotateする。
        if (data.material.name == "DRAGON_WALL_HEAD" && face in horizontalFaces) {
          data.isPowered = !data.isPowered
        } else {
          cycleFacing(data)
        }
      }
      data is PotentSulfur -> {
        // DRY/CONTINUOUS以外の進行中状態もCONTINUOUSへ正規化して反応させる。
        data.potentSulfurState =
            if (data.potentSulfurState == PotentSulfur.State.CONTINUOUS) {
              PotentSulfur.State.DRY
            } else {
              PotentSulfur.State.CONTINUOUS
            }
      }
      data is CreakingHeart -> {
        // 上下面 → axis cycle。他面 → state cycle (宣言順)。面なし → バニラに譲る。
        // naturalは不変。
        if (face == null) return null
        if (isVerticalFace(face)) cycleAxis(data)
        else {
          val states = CreakingHeart.State.entries
          data.creakingHeartState =
              states[(states.indexOf(data.creakingHeartState) + 1) % states.size]
        }
      }
      data is DriedGhast -> {
        // 上下面 → facing rotate。他面 → hydration cycle (0..max→0)。面なし → バニラに譲る。
        if (face == null) return null
        if (isVerticalFace(face)) cycleFacing(data)
        else data.hydration = next(data.hydration, data.maximumHydration)
      }
      data is RespawnAnchor -> {
        // 全面・面なし → charges cycle (0..max→0)。爆発条件に触れるため利用注意。
        data.charges = next(data.charges, data.maximumCharges)
      }
      data is CalibratedSculkSensor -> {
        // 上下面 → facing rotate。他面 → phase toggle。面なし → バニラに譲る。
        if (face == null) return null
        if (isVerticalFace(face)) cycleFacing(data) else toggleSensorPhase(data)
      }
      data is SculkSensor -> {
        // 全面・面なし → phase toggle (ACTIVE↔INACTIVE、COOLDOWN→ACTIVE)。
        toggleSensorPhase(data)
      }
      data is SculkCatalyst -> {
        // 全面・面なし → bloom toggle。
        data.isBloom = !data.isBloom
      }
      data is SculkShrieker -> {
        // 全面・面なし → canSummon toggle。shrieking (遷移) は不変。
        data.isCanSummon = !data.isCanSummon
      }
      data is SeaPickle -> {
        data.pickles = next(data.pickles, data.maximumPickles, data.minimumPickles)
      }
      data is FlowerBed -> {
        if (face in horizontalFaces) cycleFacing(data)
        else
            data.flowerAmount =
                next(data.flowerAmount, data.maximumFlowerAmount, data.minimumFlowerAmount)
      }
      data is LeafLitter -> {
        if (face in horizontalFaces) cycleFacing(data)
        else
            data.segmentAmount =
                next(data.segmentAmount, data.maximumSegmentAmount, data.minimumSegmentAmount)
      }
      data is BigDripleaf -> {
        if (face != null && !isVerticalFace(face)) {
          val tilts = BigDripleaf.Tilt.entries
          data.tilt = tilts[(tilts.indexOf(data.tilt) + 1) % tilts.size]
        } else {
          cycleFacing(data)
        }
      }
      data is HangingMoss -> data.isTip = !data.isTip
      data is Bisected && data.material.name in twoBlockPlantMaterials -> {
        if (data is Directional && face == BlockFace.UP) {
          cycleFacing(data)
        } else {
          val wasBottom = data.half == Bisected.Half.BOTTOM
          data.half =
              if (data.half == Bisected.Half.TOP) {
                Bisected.Half.BOTTOM
              } else {
                Bisected.Half.TOP
              }
          if (
              data.material.name == "PITCHER_CROP" &&
                  wasBottom &&
                  data is org.bukkit.block.data.Ageable
          ) {
            data.age = 3.coerceAtMost(data.maximumAge)
          }
        }
      }
      data is Dripleaf -> cycleFacing(data)
      data is Grindstone -> cycleFacing(data)
      data is Hopper -> cycleFacing(data)
      data is MultipleFacing && data.material.name in mushroomFaceMaterials -> {
        // クリック面toggle (位置不問)。選択不能時は未対応。
        val target = selectClickedFace(face, data.allowedFaces) ?: return null
        data.setFace(target, !data.hasFace(target))
      }
      data is Orientable -> {
        // 専用操作に該当しない原木・骨等のaxisを切り替える。
        cycleAxis(data)
      }
      else -> return null
    }
    return Result(data)
  }

  /** minimumからmaximumまで進め、maximumの次はminimumへ戻す。 */
  private fun next(value: Int, maximum: Int, minimum: Int = 0): Int =
      if (value >= maximum) minimum else value + 1

  /** 上面内側なら内容物を巡回し、それ以外は通常の水量編集へ譲る。 */
  private fun editCauldron(data: BlockData, click: BlockClick): Result? {
    val name = data.material.name
    if (click.isInsideTop(marginPixels = 2)) {
      val target =
          when (name) {
            "CAULDRON" -> Material.WATER_CAULDRON
            "WATER_CAULDRON" -> Material.POWDER_SNOW_CAULDRON
            "POWDER_SNOW_CAULDRON" -> Material.LAVA_CAULDRON
            else -> Material.CAULDRON
          }
      return Result(data, target)
    }
    if (name == "CAULDRON") {
      return if (click.face in horizontalFaces) Result(data)
      else Result(data, Material.WATER_CAULDRON)
    }
    if (
        data is Levelled &&
            name == "WATER_CAULDRON" &&
            data.level >= data.maximumLevel &&
            click.face !in horizontalFaces
    ) {
      return Result(data, Material.CAULDRON)
    }
    return null
  }

  /** 面中央ではpoweredを反転し、外側は共通lit編集へ譲る。 */
  private fun editCopperBulb(data: CopperBulb, click: BlockClick): Result? {
    if (!click.isFaceCenter(radiusPixels = 2)) return null
    data.isPowered = !data.isPowered
    return Result(data)
  }

  /** 打点に最も近いChorus Plantの接続面だけを反転する。 */
  private fun editChorusPlant(data: MultipleFacing, click: BlockClick): Result {
    toggleChorusFace(data, click.face, click.position)
    return Result(data)
  }

  /** 側面では向きを回し、Repeater上面中央ではlockを反転する。 */
  private fun editRepeaterOrComparator(data: BlockData, click: BlockClick): Result? {
    if (click.face in horizontalFaces) {
      cycleFacing(data as Directional)
      return Result(data)
    }
    if (data is Repeater && click.face == BlockFace.UP && !click.isFaceEdge(insetPixels = 4)) {
      data.isLocked = !data.isLocked
      return Result(data)
    }
    return null
  }

  /** 中央ではberry、外周ではCave VinesとPlantの材質を切り替える。 */
  private fun editCaveVines(data: CaveVinesPlant, click: BlockClick): Result {
    if (click.face != null && click.isFaceEdge(insetPixels = 4)) {
      switchMaterial(data.material.name)?.let {
        return Result(data, it)
      }
    } else {
      data.setBerries(!data.hasBerries())
    }
    return Result(data)
  }

  /** ピストン先端側ではextendedを反転し、それ以外では向きを回す。 */
  private fun editPiston(data: Piston, click: BlockClick): Result {
    if (isPistonExtendedHit(click.position, click.face, data.facing))
        data.isExtended = !data.isExtended
    else cycleFacing(data)
    return Result(data)
  }

  /** ピストンヘッドの根元ではshortを反転し、それ以外では向きを回す。 */
  private fun editPistonHead(data: PistonHead, click: BlockClick): Result {
    if (isPistonHeadRootHit(click.position, click.face, data.facing)) data.isShort = !data.isShort
    else cycleFacing(data)
    return Result(data)
  }

  /** 頂点ではtriggered、上面ではcrafting、その他の面ではorientationを変更する。 */
  private fun editCrafter(data: Crafter, click: BlockClick): Result? {
    if (isCrafterTriggerVertex(click.position, click.face, data.orientation)) {
      data.isTriggered = !data.isTriggered
      return Result(data)
    }
    when (crafterPart(click.face, data.orientation)) {
      CrafterPart.FRONT,
      CrafterPart.BACK,
      CrafterPart.SIDE,
      CrafterPart.BOTTOM -> {
        val orientations = Orientation.entries
        data.orientation =
            orientations[(orientations.indexOf(data.orientation) + 1) % orientations.size]
      }
      CrafterPart.TOP -> data.isCrafting = !data.isCrafting
      null -> return null
    }
    return Result(data)
  }

  /** 正面では6枠の本を切り替え、他面では本棚の向きを回す。 */
  private fun editBookshelf(data: ChiseledBookshelf, click: BlockClick): Result? {
    val clicked = click.face ?: return null
    if (clicked != data.facing) {
      cycleFacing(data)
    } else {
      val slot = click.bookshelfSlot(data.facing) ?: return null
      data.setSlotOccupied(slot, !data.isSlotOccupied(slot))
    }
    return Result(data)
  }

  /** 打点から底面または側面を選び、最後の一部を消さない範囲で苔カーペットを編集する。 */
  private fun editMossyCarpet(data: MossyCarpet, click: BlockClick): Result? {
    val clicked = click.face ?: return null
    val activeSides = horizontalFaces.count { data.getHeight(it) != Wall.Height.NONE }
    val activeParts = activeSides + if (data.isBottom) 1 else 0

    /** 底面が最後の一部なら、空の状態にならないよう削除しない。 */
    fun toggleBottom() {
      if (!data.isBottom || activeParts > 1) data.isBottom = !data.isBottom
    }

    /** 側面をNONE→LOW→TALL→NONEで巡回し、最後の一部は残す。 */
    fun cycleSide(target: BlockFace) {
      val current = runCatching { data.getHeight(target) }.getOrNull() ?: return
      if (activeParts <= 1 && current == Wall.Height.TALL) return
      data.setHeight(
          target,
          when (current) {
            Wall.Height.NONE -> Wall.Height.LOW
            Wall.Height.LOW -> Wall.Height.TALL
            Wall.Height.TALL -> Wall.Height.NONE
          },
      )
    }

    if (click.isVertical) {
      if (click.isFaceEdge(insetPixels = 4)) {
        click.relativeFace()?.takeIf { it in horizontalFaces }?.let(::cycleSide)
      } else {
        toggleBottom()
      }
      return Result(data)
    }

    val clickedSide = click.selectedFace(horizontalFaces.toSet())
    if (clickedSide != null && !click.isFaceEdge(clickedSide, insetPixels = 4)) {
      val current = runCatching { data.getHeight(clickedSide) }.getOrNull() ?: return null
      if (current != Wall.Height.NONE && activeParts > 1)
          data.setHeight(clickedSide, Wall.Height.NONE)
      return Result(data)
    }
    val target = click.relativeFace()
    when {
      target == BlockFace.DOWN -> toggleBottom()
      target != null && target in horizontalFaces -> cycleSide(target)
      else -> return null
    }
    return Result(data)
  }

  /** 上端では吊り方・材質を切り替え、それ以外では看板の向きを回す。 */
  private fun editSign(data: BlockData, click: BlockClick): Result {
    val name = data.material.name
    // 吊り看板は上面または側面上部で、壁付きと天井付きの材質を切り替える。
    val switchMaterial =
        click.face == BlockFace.UP || isHangingSignUpperSideHit(click.position, click.face)
    if (switchMaterial && name.endsWith("_WALL_HANGING_SIGN")) {
      return Result(data, hangingSignMaterialTransition(name, false))
    }
    if (switchMaterial && data is HangingSign) {
      hangingSignMaterialTransition(name, data.isAttached)?.let {
        if (!name.endsWith("_WALL_HANGING_SIGN")) data.isAttached = false
        return Result(data, it)
      }
      if (name.endsWith("_HANGING_SIGN")) {
        data.isAttached = true
        return Result(data)
      }
    }
    when (data) {
      is Rotatable -> cycleRotation(data)
      is Directional -> cycleFacing(data)
    }
    return Result(data)
  }

  /** 中央では既存面を外し、外周では隣接面を追加する。最後の面は残す。 */
  private fun editGrowthFaces(data: MultipleFacing, click: BlockClick): Result? {
    val clicked = click.selectedFace(data.allowedFaces)
    val activeFaces = data.allowedFaces.count(data::hasFace)
    if (clicked != null && !click.isFaceEdge(clicked, insetPixels = 4)) {
      if (data.hasFace(clicked) && activeFaces > 1) data.setFace(clicked, false)
      return Result(data)
    }
    val target = click.relativeFace()?.takeIf { it in data.allowedFaces } ?: return null
    if (activeFaces > 1 || !data.hasFace(target)) data.setFace(target, !data.hasFace(target))
    return Result(data)
  }

  /** 中央ではpower、外周では選ばれた方向の接続状態を巡回する。 */
  private fun editRedstone(data: RedstoneWire, click: BlockClick): Result? {
    if (isRedstonePowerCenterHit(click.position, click.face)) {
      data.power = next(data.power, data.maximumPower)
      return Result(data)
    }
    val target = click.relativeFace()?.takeIf { it in horizontalFaces } ?: return null
    data.setFace(
        target,
        when (data.getFace(target)) {
          RedstoneWire.Connection.NONE -> RedstoneWire.Connection.SIDE
          RedstoneWire.Connection.SIDE -> RedstoneWire.Connection.UP
          RedstoneWire.Connection.UP -> RedstoneWire.Connection.NONE
        },
    )
    return Result(data)
  }

  /** 背面中央ではpoweredを反転し、それ以外では向きを回す。 */
  private fun editObserver(data: Observer, click: BlockClick): Result {
    if (click.face == data.facing.oppositeFace && click.isFaceCenter(radiusPixels = 2)) {
      data.isPowered = !data.isPowered
    } else {
      cycleFacing(data)
    }
    return Result(data)
  }

  /** 上下面では床置き・壁付きを切り替え、壁付きを作るときはクリック面を向きにする。 */
  private fun coralEdit(data: BlockData, name: String, face: BlockFace?): Result? {
    if (data is CoralWallFan && isVerticalFace(face)) {
      cycleFacing(data)
      return Result(data)
    }
    val clickedFace = face?.takeIf { it in horizontalFaces }
    val target = CORAL_FAN_MATERIALS[name]?.let(Material::matchMaterial) ?: return null
    val converted = target.createBlockData()
    if (converted is CoralWallFan) converted.facing = clickedFace ?: BlockFace.NORTH
    if (converted is Waterlogged && data is Waterlogged)
        converted.isWaterlogged = data.isWaterlogged
    return Result(converted, target)
  }
}
