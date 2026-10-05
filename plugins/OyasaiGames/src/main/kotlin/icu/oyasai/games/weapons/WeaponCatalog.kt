package icu.oyasai.games.weapons

import icu.oyasai.games.OyasaiGamesPlugin
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.Locale
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

internal data class WeaponDefinition(
    val id: String,
    val config: ConfigurationSection,
    val material: Material,
) {
  fun s(path: String): String = config.getString(path).orEmpty()

  fun i(path: String): Int = config.getInt(path)

  fun d(path: String): Double = config.getDouble(path)

  fun b(path: String): Boolean = config.getBoolean(path)

  val accessory: Boolean
    get() = s("Item_Information.Attachments.Type").equals("accessory", true)
}

/** Only legacy IDs actually referenced by the supported configuration formats. */
internal object WeaponMaterials {
  private val ids =
      mapOf(
          "1" to "STONE",
          "6" to "OAK_SAPLING",
          "8" to "WATER",
          "24" to "SANDSTONE",
          "25" to "NOTE_BLOCK",
          "35" to "WHITE_WOOL",
          "40" to "RED_MUSHROOM",
          "46" to "TNT",
          "51" to "FIRE",
          "55" to "REDSTONE_WIRE",
          "57" to "DIAMOND_BLOCK",
          "69" to "LEVER",
          "76" to "REDSTONE_TORCH",
          "77" to "STONE_BUTTON",
          "80" to "SNOW_BLOCK",
          "85" to "OAK_FENCE",
          "127" to "COCOA",
          "152" to "REDSTONE_BLOCK",
          "159" to "WHITE_TERRACOTTA",
          "159~14" to "RED_TERRACOTTA",
          "198" to "END_ROD",
          "264" to "DIAMOND",
          "266" to "GOLD_INGOT",
          "267" to "IRON_SWORD",
          "273" to "STONE_SHOVEL",
          "283" to "GOLDEN_SWORD",
          "288" to "FEATHER",
          "325" to "BUCKET",
          "340" to "BOOK",
          "343" to "FURNACE_MINECART",
          "351~3" to "COCOA_BEANS",
          "351~8" to "GRAY_DYE",
          "362" to "MELON_SEEDS",
          "370" to "GHAST_TEAR",
          "385" to "FIRE_CHARGE",
          "397" to "SKELETON_SKULL",
          "402" to "FIREWORK_STAR",
          "404" to "COMPARATOR",
          "417" to "IRON_HORSE_ARMOR",
      )

  fun resolve(value: String): Material? {
    val normalized = value.trim().uppercase(Locale.ROOT)
    return Material.matchMaterial(ids[normalized] ?: normalized)
  }
}

internal class WeaponCatalog(private val plugin: OyasaiGamesPlugin) {
  val key = NamespacedKey(plugin, "weapon")
  val ammoKey = NamespacedKey(plugin, "weapon_ammo")
  val actionKey = NamespacedKey(plugin, "weapon_action")
  var definitions: Map<String, WeaponDefinition> = emptyMap()
    private set

  var general = YamlConfiguration()
    private set

  fun load() {
    val folder = File(plugin.dataFolder, "weapons")
    copyLegacyWeapons(folder)
    val loaded = linkedMapOf<String, WeaponDefinition>()
    for (file in folder.listFiles().orEmpty().sortedBy { it.name }) {
      if (
          !file.isFile ||
              file.extension.lowercase() !in setOf("yml", "yaml") ||
              file.name == "general.yml"
      )
          continue
      try {
        val yaml = YamlConfiguration().apply { load(file) }
        for (id in yaml.getKeys(false)) {
          try {
            val config = yaml.getConfigurationSection(id) ?: error("definition must be a section")
            require(id.isNotBlank() && !id.any { it.isWhitespace() }) {
              "invalid weapon identifier"
            }
            val definition = readWeaponDefinition(id, config)
            require(definition.accessory || definition.material.isItem) { "unsupported Item_Type" }
            if (definition.b("Ammo.Enable"))
                require(
                    WeaponMaterials.resolve(definition.s("Ammo.Ammo_Item_ID"))?.isItem == true
                ) {
                  "unsupported ammo item"
                }
            val canonical = id.lowercase(Locale.ROOT)
            require(canonical !in loaded) { "duplicate weapon identifier" }
            for (path in config.getKeys(true).filter { !config.isConfigurationSection(it) }) {
              if (path !in supportedKeys) plugin.logger.warning("weapons: $id の未対応キー: $path")
            }
            loaded[canonical] = definition
          } catch (exception: Exception) {
            plugin.logger.warning("weapons: $id を読み込めません: ${exception.javaClass.simpleName}")
          }
        }
      } catch (exception: Exception) {
        plugin.logger.warning("weapons: 定義ファイルを読み込めません (${exception.javaClass.simpleName})")
      }
    }
    require(loaded.isNotEmpty()) { "weapon definitions are missing or invalid" }
    val nextGeneral = YamlConfiguration()
    val generalFile = File(folder, "general.yml")
    if (generalFile.isFile) nextGeneral.load(generalFile)
    for (path in nextGeneral.getKeys(true).filter { !nextGeneral.isConfigurationSection(it) }) {
      if (
          path != "Disabled_Worlds" &&
              !path.matches(
                  Regex("Inventory_Control\\.[^.]+\\.(Limit|Message_Exceeded|Sounds_Exceeded)")
              ) &&
              path !in
                  setOf(
                      "Merged_Reload.Disable",
                      "Merged_Reload.Message_Denied",
                      "Merged_Reload.Sounds_Denied",
                  )
      ) {
        plugin.logger.warning("weapons: general.yml の未対応キー: $path")
      }
    }
    for (w in loaded.values) {
      for (path in
          listOf("Item_Information.Melee_Attachment", "Item_Information.Attachments.Info")) {
        if (w.s(path).isNotEmpty())
            require(loaded.containsKey(w.s(path).lowercase(Locale.ROOT))) {
              "missing weapon attachment"
            }
      }
    }
    definitions = loaded
    general = nextGeneral
  }

  fun identify(item: ItemStack?): WeaponDefinition? {
    if (item == null || item.type.isAir || !item.hasItemMeta()) return null
    val meta = item.itemMeta
    val marked = meta.persistentDataContainer.get(key, PersistentDataType.STRING)
    if (marked != null)
        return definitions[marked.lowercase(Locale.ROOT)]?.takeIf {
          !it.accessory && matchesWeaponMaterial(it, item.type)
        }
    if (!meta.hasDisplayName()) return null
    return WeaponNames.match(
        meta.displayName,
        legacyWeaponCandidates(definitions.values).filter { matchesWeaponMaterial(it, item.type) },
    ) {
      listOf(it.s("Item_Information.Item_Name"))
    }
  }

  fun create(w: WeaponDefinition, amount: Int = 1): ItemStack {
    require(!w.accessory && amount in 1..64)
    val item = ItemStack(w.material, amount)
    val meta = item.itemMeta
    meta.persistentDataContainer.set(key, PersistentDataType.STRING, w.id.lowercase(Locale.ROOT))
    val capacity = w.i("Reload.Reload_Amount")
    var name = w.s("Item_Information.Item_Name")
    if (w.b("Reload.Enable")) {
      val rounds =
          if (w.config.contains("Reload.Starting_Amount"))
              w.i("Reload.Starting_Amount").coerceIn(0, capacity)
          else capacity
      meta.persistentDataContainer.set(ammoKey, PersistentDataType.INTEGER, rounds)
      if (w.s("Firearm_Action.Type").isNotEmpty()) {
        name += " ▪"
        meta.persistentDataContainer.set(actionKey, PersistentDataType.STRING, "▪")
      }
      name += if (w.b("Shooting.Dual_Wield")) " «$rounds|$rounds»" else " «$rounds»"
    } else if (!w.b("Item_Information.Remove_Unused_Tag")) name += " «×»"
    meta.setDisplayName(color(name))
    if (w.config.contains("Item_Information.Item_Lore"))
        meta.lore = w.s("Item_Information.Item_Lore").split('|').map(::color)
    item.itemMeta = meta
    return item
  }
}

internal fun readWeaponDefinition(id: String, config: ConfigurationSection): WeaponDefinition {
  val accessory = config.getString("Item_Information.Attachments.Type").equals("accessory", true)
  val type =
      if (accessory) Material.AIR
      else WeaponMaterials.resolve(config.getString("Item_Information.Item_Type").orEmpty())
  require(type != null) { "unsupported Item_Type" }
  require(accessory || !config.getString("Item_Information.Item_Name").isNullOrBlank()) {
    "missing Item_Name"
  }
  for (path in
      listOf(
          "Shooting.Projectile_Amount",
          "Shooting.Delay_Between_Shots",
          "Shooting.Projectile_Speed",
          "Shooting.Projectile_Damage",
          "Reload.Reload_Amount",
          "Reload.Reload_Duration",
          "Burstfire.Shots_Per_Burst",
          "Burstfire.Delay_Between_Shots_In_Burst",
          "Firearm_Action.Open_Duration",
          "Firearm_Action.Close_Duration",
          "Firearm_Action.Close_Shoot_Delay",
      )) {
    if (config.contains(path))
        require(config.getDouble(path).isFinite() && config.getDouble(path) >= 0) {
          "invalid numeric setting"
        }
  }
  if (config.getBoolean("Fully_Automatic.Enable"))
      require(config.getInt("Fully_Automatic.Fire_Rate") in 1..16) { "invalid automatic rate" }
  if (config.getBoolean("Reload.Enable"))
      require(config.getInt("Reload.Reload_Amount") > 0) { "invalid magazine capacity" }
  if (config.getBoolean("Ammo.Enable"))
      require(WeaponMaterials.resolve(config.getString("Ammo.Ammo_Item_ID").orEmpty()) != null) {
        "unsupported ammo item"
      }
  return WeaponDefinition(id, config, type)
}

/** Arena kits also retained gray dye for the legacy light gray dye ID. Preserve that item as-is. */
internal fun matchesWeaponMaterial(w: WeaponDefinition, material: Material): Boolean =
    material == w.material ||
        (w.s("Item_Information.Item_Type").trim() == "351~8" &&
            material in setOf(Material.GRAY_DYE, Material.LIGHT_GRAY_DYE))

/** An identically named melee attachment is selected through its parent, as in legacy items. */
internal fun legacyWeaponCandidates(
    definitions: Collection<WeaponDefinition>
): List<WeaponDefinition> {
  val meleeAttachments =
      definitions
          .mapNotNull { parent ->
            definitions
                .firstOrNull {
                  it.id.equals(parent.s("Item_Information.Melee_Attachment"), true) &&
                      it.b("Item_Information.Melee_Mode") &&
                      it.material == parent.material &&
                      WeaponNames.base(it.s("Item_Information.Item_Name")) ==
                          WeaponNames.base(parent.s("Item_Information.Item_Name"))
                }
                ?.id
          }
          .toSet()
  return definitions.filter { !it.accessory && it.id !in meleeAttachments }
}

internal fun color(text: String): String = ChatColor.translateAlternateColorCodes('&', text)

/** Copy through a staging folder so an interrupted copy cannot become a partial installation. */
internal fun copyLegacyWeapons(target: File): Boolean {
  if (target.exists()) return false
  val legacy = File(target.parentFile.parentFile, "CrackShot/weapons")
  if (!legacy.isDirectory) return false
  Files.createDirectories(target.parentFile.toPath())
  val staging = Files.createTempDirectory(target.parentFile.toPath(), "weapons-import-")
  try {
    Files.walk(legacy.toPath()).use { paths ->
      paths.forEach { source ->
        val destination = staging.resolve(legacy.toPath().relativize(source))
        if (Files.isDirectory(source)) Files.createDirectories(destination)
        else if (source.toString().endsWith(".yml") || source.toString().endsWith(".yaml"))
            Files.copy(source, destination)
      }
    }
    val general = File(legacy.parentFile, "general.yml")
    if (general.isFile) Files.copy(general.toPath(), staging.resolve("general.yml"))
    Files.move(staging, target.toPath(), StandardCopyOption.ATOMIC_MOVE)
    return true
  } finally {
    if (Files.exists(staging))
        Files.walk(staging).use { paths ->
          paths.sorted(Comparator.reverseOrder()).forEach(Files::delete)
        }
  }
}

internal val supportedKeys =
    setOf(
        "Abilities.Death_No_Drop",
        "Abilities.Knockback",
        "Abilities.No_Fall_Damage",
        "Abilities.No_Vertical_Recoil",
        "Abilities.Reset_Hit_Cooldown",
        "Abilities.Super_Effective",
        "Airstrikes.Area",
        "Airstrikes.Block_Type",
        "Airstrikes.Distance_Between_Bombs",
        "Airstrikes.Enable",
        "Airstrikes.Flare_Activation_Delay",
        "Airstrikes.Height_Dropped",
        "Airstrikes.Horizontal_Variation",
        "Airstrikes.Message_Call_Airstrike",
        "Airstrikes.Multiple_Strikes.Delay_Between_Strikes",
        "Airstrikes.Multiple_Strikes.Enable",
        "Airstrikes.Multiple_Strikes.Number_Of_Strikes",
        "Airstrikes.Particle_Call_Airstrike",
        "Airstrikes.Sounds_Airstrike",
        "Airstrikes.Vertical_Variation",
        "Ammo.Ammo_Item_ID",
        "Ammo.Enable",
        "Ammo.Sounds_Out_Of_Ammo",
        "Ammo.Sounds_Shoot_With_No_Ammo",
        "Backstab.Bonus_Damage",
        "Backstab.Enable",
        "Backstab.Sounds_Shooter",
        "Burstfire.Delay_Between_Shots_In_Burst",
        "Burstfire.Enable",
        "Burstfire.Shots_Per_Burst",
        "Cluster_Bombs.Bomblet_Type",
        "Cluster_Bombs.Delay_Before_Detonation",
        "Cluster_Bombs.Delay_Before_Split",
        "Cluster_Bombs.Detonation_Delay_Variation",
        "Cluster_Bombs.Enable",
        "Cluster_Bombs.Number_Of_Bomblets",
        "Cluster_Bombs.Number_Of_Splits",
        "Cluster_Bombs.Particle_Release",
        "Cluster_Bombs.Sounds_Release",
        "Cluster_Bombs.Speed_Of_Bomblets",
        "Critical_Hits.Bonus_Damage",
        "Critical_Hits.Chance",
        "Critical_Hits.Enable",
        "Critical_Hits.Message_Shooter",
        "Critical_Hits.Sounds_Shooter",
        "Critical_Hits.Sounds_Victim",
        "Custom_Death_Message.Normal",
        "Damage_Based_On_Flight_Time.Bonus_Damage_Per_Tick",
        "Damage_Based_On_Flight_Time.Enable",
        "Damage_Based_On_Flight_Time.Maximum_Damage",
        "Explosions.Damage_Multiplier",
        "Explosions.Enable",
        "Explosions.Enable_Owner_Immunity",
        "Explosions.Explosion_Delay",
        "Explosions.Explosion_No_Damage",
        "Explosions.Explosion_No_Grief",
        "Explosions.Explosion_Potion_Effect",
        "Explosions.Explosion_Radius",
        "Explosions.Ignite_Victims",
        "Explosions.Knockback",
        "Explosions.On_Impact_With_Anything",
        "Explosions.Projectile_Activation_Time",
        "Explosions.Sounds_Explode",
        "Explosions.Sounds_Shooter",
        "Explosions.Sounds_Victim",
        "Explosive_Devices.Device_Info",
        "Explosive_Devices.Device_Type",
        "Explosive_Devices.Enable",
        "Explosive_Devices.Message_Disarm",
        "Explosive_Devices.Message_Trigger_Placer",
        "Explosive_Devices.Message_Trigger_Victim",
        "Explosive_Devices.Sounds_Alert_Placer",
        "Explosive_Devices.Sounds_Deploy",
        "Explosive_Devices.Sounds_Trigger",
        "Extras.Disable_Underwater",
        "Extras.One_Time_Use",
        "Extras.Run_Command",
        "Firearm_Action.Close_Duration",
        "Firearm_Action.Close_Shoot_Delay",
        "Firearm_Action.Open_Duration",
        "Firearm_Action.Sound_Close",
        "Firearm_Action.Sound_Open",
        "Firearm_Action.Type",
        "Fireworks.Enable",
        "Fireworks.Firework_Headshot",
        "Fully_Automatic.Enable",
        "Fully_Automatic.Fire_Rate",
        "Headshot.Bonus_Damage",
        "Headshot.Enable",
        "Headshot.Sounds_Shooter",
        "Headshot.Sounds_Victim",
        "Hit_Events.Enable",
        "Hit_Events.Sounds_Shooter",
        "Hit_Events.Sounds_Victim",
        "Item_Information.Attachments.Info",
        "Item_Information.Attachments.Sounds_Toggle",
        "Item_Information.Attachments.Toggle_Delay",
        "Item_Information.Attachments.Type",
        "Item_Information.Hidden_From_List",
        "Item_Information.Inventory_Control",
        "Item_Information.Item_Lore",
        "Item_Information.Item_Name",
        "Item_Information.Item_Type",
        "Item_Information.Melee_Attachment",
        "Item_Information.Melee_Mode",
        "Item_Information.Remove_Unused_Tag",
        "Item_Information.Sounds_Acquired",
        "Lightning.Enable",
        "Lightning.No_Damage",
        "Lightning.On_Impact_With_Anything",
        "Particles.Enable",
        "Particles.Particle_Backstab",
        "Particles.Particle_Critical",
        "Particles.Particle_Hit",
        "Particles.Particle_Impact_Anything",
        "Particles.Particle_Player_Shoot",
        "Particles.Particle_Terrain",
        "Potion_Effects.Activation",
        "Potion_Effects.Potion_Effect_Shooter",
        "Reload.Dual_Wield.Single_Reload_Duration",
        "Reload.Dual_Wield.Sounds_Shoot_With_No_Ammo",
        "Reload.Dual_Wield.Sounds_Single_Reload",
        "Reload.Enable",
        "Reload.Reload_Amount",
        "Reload.Reload_Bullets_Individually",
        "Reload.Reload_Duration",
        "Reload.Sounds_Out_Of_Ammo",
        "Reload.Sounds_Reloading",
        "Reload.Starting_Amount",
        "Reload.Take_Ammo_As_Magazine",
        "Reload.Take_Ammo_On_Reload",
        "Riot_Shield.Durability_Loss_Per_Hit",
        "Riot_Shield.Enable",
        "Riot_Shield.Sounds_Blocked",
        "Riot_Shield.Sounds_Break",
        "Scope.Enable",
        "Scope.Night_Vision",
        "Scope.Sounds_Toggle_Zoom",
        "Scope.Zoom_Amount",
        "Scope.Zoom_Before_Shooting",
        "Scope.Zoom_Bullet_Spread",
        "Shooting.Bullet_Spread",
        "Shooting.Cancel_Left_Click_Block_Damage",
        "Shooting.Cancel_Right_Click_Interactions",
        "Shooting.Delay_Between_Shots",
        "Shooting.Dual_Wield",
        "Shooting.Projectile_Amount",
        "Shooting.Projectile_Damage",
        "Shooting.Projectile_Flames",
        "Shooting.Projectile_Incendiary.Duration",
        "Shooting.Projectile_Incendiary.Enable",
        "Shooting.Projectile_Speed",
        "Shooting.Projectile_Subtype",
        "Shooting.Projectile_Type",
        "Shooting.Recoil_Amount",
        "Shooting.Removal_Or_Drag_Delay",
        "Shooting.Remove_Arrows_On_Impact",
        "Shooting.Reset_Fall_Distance",
        "Shooting.Right_Click_To_Shoot",
        "Shooting.Sounds_Projectile",
        "Shooting.Sounds_Shoot",
        "Shrapnel.Amount",
        "Shrapnel.Block_Type",
        "Shrapnel.Enable",
        "Shrapnel.Speed",
        "SignShops.Enable",
        "SignShops.Price",
        "SignShops.Sign_Gun_ID",
        "Sneak.Bullet_Spread",
        "Sneak.Enable",
        "Sneak.No_Recoil",
        "Spawn_Entity_On_Hit.Chance",
        "Spawn_Entity_On_Hit.Enable",
        "Spawn_Entity_On_Hit.EntityType_Baby_Explode_Amount",
        "Spawn_Entity_On_Hit.Entity_Disable_Drops",
        "Spawn_Entity_On_Hit.Message_Shooter",
        "Spawn_Entity_On_Hit.Mob_Name",
        "Spawn_Entity_On_Hit.Timed_Death",
    )
