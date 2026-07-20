@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.Locale
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

/** OP専用コマンド処理 */
class OpCommands(
    private val plugin: JavaPlugin,
    private val showUsageFn: (Player) -> Unit,
    private val forceStoreFn: (Player) -> Unit,
    private val forceStoreAllFn: (Player, Array<out String>) -> Unit,
    private val historyFn: (Player, Array<out String>) -> Unit,
) {

  fun handleCommand(player: Player, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      showUsageFn(player)
      return true
    }

    return when (val sub = args[0].lowercase()) {
      "item" -> {
        handleItemCommand(player, args)
        true
      }
      "reload" -> {
        handleReload(player)
        true
      }
      "version" -> {
        handleVersion(player)
        true
      }
      "force_store" -> {
        forceStoreFn(player)
        true
      }
      "force_storeall" -> {
        forceStoreAllFn(player, args)
        true
      }
      "history" -> {
        historyFn(player, args)
        true
      }
      "debug_egg" -> {
        handleDebugEgg(player, args)
        true
      }
      "config" -> {
        handleConfigCommand(player, args)
        true
      }
      else -> {
        player.sendMessage(Component.text("不明なサブコマンド: $sub", RED))
        false
      }
    }
  }

  /** アイテム配布コマンド */
  fun handleItemCommand(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(
          Component.text(
              "使い方: /bigwolf item <food|brush|treat|heal|toys|skillbook|skillbook1|skillbook2|skillbook3|particle|all>",
              RED,
          )
      )
      return
    }

    val key = args[1].lowercase()
    when (key) {
      "food" -> {
        player.inventory.addItem(PetItemFactory.createPetFoodItem())
        player.sendMessage(Component.text("ペットフードを入手しました！", GREEN))
      }
      "brush" -> {
        player.inventory.addItem(PetItemFactory.createPetBrushItem())
        player.sendMessage(Component.text("ペットブラシを入手しました！", GREEN))
      }
      "treat" -> {
        player.inventory.addItem(PetItemFactory.createPetTreatItem())
        player.sendMessage(Component.text("ペットのおやつを入手しました！", GREEN))
      }
      "heal" -> {
        player.inventory.addItem(PetItemFactory.createPetHealItem())
        player.sendMessage(Component.text("ヒールポーションを入手しました！", GREEN))
      }
      "toys" -> {
        val toys = PetRegistry.getAllToyItems()
        if (toys.isNotEmpty()) {
          toys.forEach { player.inventory.addItem(it) }
          player.sendMessage(Component.text("おもちゃセットを入手しました！", GREEN))
        } else {
          player.sendMessage(Component.text("おもちゃ定義が見つかりません。", GRAY))
        }
      }
      "skillbook" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        player.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
      }
      "skillbook1" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.sendMessage(Component.text("スキルブック(Lv.1)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook2" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.sendMessage(Component.text("スキルブック(Lv.2)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook3" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        player.sendMessage(Component.text("スキルブック(Lv.3)を入手しました！", LIGHT_PURPLE))
      }
      "particle" -> {
        for (i in 5..10) {
          player.inventory.addItem(PetItemFactory.createParticleUnlockItem(i))
        }
        player.sendMessage(Component.text("パーティクルの結晶セットを入手しました！", LIGHT_PURPLE))
      }
      "all" -> {
        player.inventory.addItem(PetItemFactory.createPetFoodItem())
        player.inventory.addItem(PetItemFactory.createPetBrushItem())
        player.inventory.addItem(PetItemFactory.createPetTreatItem())
        player.inventory.addItem(PetItemFactory.createPetHealItem())
        PetRegistry.getAllToyItems().forEach { player.inventory.addItem(it) }
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        for (i in 5..10) {
          player.inventory.addItem(PetItemFactory.createParticleUnlockItem(i))
        }
        player.sendMessage(Component.text("全アイテムを入手しました！", GREEN))
      }
      else -> {
        player.sendMessage(Component.text("不明なアイテムタイプ: $key", RED))
      }
    }
  }

  /** 実験的召喚コマンド */
  /** 設定リロードコマンド */
  fun handleReload(player: Player) {
    plugin.reloadConfig()
    BigWolfConfig.loadFrom(plugin.config)
    PetRegistry.applyConfig(plugin)
    player.sendMessage(Component.text("BigWolf: config reloaded!", GREEN))
  }

  /** バージョン表示コマンド */
  @Suppress("DEPRECATION")
  fun handleVersion(player: Player) {
    val version = plugin.description.version
    player.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
    player.sendMessage(Component.text("Version: $version", YELLOW))
  }

  private fun handleDebugEgg(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(
          Component.text(
              "使い方: /bigwolfop debug_egg <mob> [variant=<name>] [level=<n>] [skill=<0-3>] [unlocked=<0-3>] [speed=<1.0>] [jump=<1.0>] [gen=<1>] [temperament=<typical|atypical>]",
              RED,
          )
      )
      return
    }
    val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
    if (type == null || !type.isAlive) {
      player.sendMessage(Component.text("無効なMOB名: ${args[1]}", RED))
      return
    }
    val params = mutableMapOf<String, String>()
    for (i in 2 until args.size) {
      val kv = args[i].split("=", limit = 2)
      if (kv.size == 2) params[kv[0].lowercase()] = kv[1]
    }
    val variant = params["variant"]
    val level = params["level"]?.toIntOrNull()?.coerceIn(0, BigWolfConfig.maxFoodLevel) ?: 0
    val skillType = params["skill"]?.toIntOrNull()?.coerceIn(0, 3) ?: 0
    val unlocked = params["unlocked"]?.toIntOrNull()?.coerceIn(0, 3) ?: 0
    val speedMul = params["speed"]?.toDoubleOrNull() ?: 1.0
    val jumpMul = params["jump"]?.toDoubleOrNull() ?: 1.0
    val gen = params["gen"]?.toIntOrNull() ?: 0
    val temperament = params["temperament"]?.lowercase() ?: "typical"
    val allParticles = "0,1,2,3,4,5,6,7,8,9,10"

    val petId = UUID.randomUUID().toString()
    val debugName = "[DEBUG] ${type.name}${variant?.let { " ($it)" } ?: ""}"

    // PetDataManagerに登録（STORED状態で）
    PetDataManager.recordPurchase(player.uniqueId, petId, type, variant, debugName)
    PetDataManager.updateFromSnapshot(
        player.uniqueId,
        PetSnapshot(
            petId = petId,
            ownerUuid = player.uniqueId,
            type = type,
            customName = debugName,
            variant = variant,
            status = PetStatus.STORED,
            lastLocation = null,
            stats = PetStats(),
            skillType = skillType,
            skillUnlockedLevel = unlocked,
            foodLevel = level,
            particleUnlocked = allParticles,
            breedCount = 0,
            originalOwnerId = null,
        ),
    )

    // 収納スポーンエッグを作成
    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(eggMat)
    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer
    meta.displayName(
        Component.text("【DEBUG】${type.name}${variant?.let { " ($it)" } ?: ""}", LIGHT_PURPLE)
    )
    meta.lore(
        listOf(
            Component.text("★ デバッグ用スポーンエッグ", RED),
            Component.text("右クリックでペットを解放", GRAY),
            Component.text("Lv: $level | スキル: $skillType | 解放: $unlocked", YELLOW),
            Component.text("速度: $speedMul | ジャンプ: $jumpMul | 世代: $gen", YELLOW),
            Component.text("性質: $temperament", YELLOW),
            Component.text("全パーティクル解放済み", AQUA),
        )
    )

    pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, type.name)
    variant?.let { pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, debugName)
    pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, petId)
    pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, player.uniqueId.toString())
    pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, skillType)
    pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, unlocked)
    pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, level)
    pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, 0.0)
    pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_BRUSHES, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_TREATS, PersistentDataType.INTEGER, 0)
    pdc.set(
        BigWolfKeys.STORED_PCD_VERSION,
        PersistentDataType.INTEGER,
        BigWolfKeys.CURRENT_PCD_VERSION,
    )
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, allParticles)
    pdc.set(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE, speedMul)
    pdc.set(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE, jumpMul)
    pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, gen)
    pdc.set(BigWolfKeys.STORED_TEMPERAMENT, PersistentDataType.STRING, temperament)
    pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, 0)
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta

    player.inventory.addItem(item)
    player.sendMessage(Component.text("デバッグ用スポーンエッグを付与しました: $debugName", GREEN))
  }

  private fun handleConfigCommand(player: Player, args: Array<out String>) {
    when (args.getOrNull(1)?.lowercase()) {
      null,
      "list" -> {
        player.sendMessage(Component.text("=== BigWolf Config ===", GOLD))
        BigWolfConfig.asEntryList().forEach { (key, value) ->
          player.sendMessage(Component.text("  $key = $value", YELLOW))
        }
        player.sendMessage(
            Component.text("使い方: /bigwolfop config get <key> | set <key> <value>", GRAY)
        )
      }
      "get" -> {
        val key =
            args.getOrNull(2)
                ?: run {
                  player.sendMessage(Component.text("使い方: /bigwolfop config get <key>", RED))
                  return
                }
        val value =
            BigWolfConfig.getField(key)
                ?: run {
                  player.sendMessage(Component.text("不明なキー: $key", RED))
                  return
                }
        player.sendMessage(Component.text("$key = $value", YELLOW))
      }
      "set" -> {
        val key =
            args.getOrNull(2)
                ?: run {
                  player.sendMessage(
                      Component.text("使い方: /bigwolfop config set <key> <value>", RED)
                  )
                  return
                }
        val raw =
            args.getOrNull(3)
                ?: run {
                  player.sendMessage(
                      Component.text("使い方: /bigwolfop config set <key> <value>", RED)
                  )
                  return
                }
        if (!BigWolfConfig.setField(key, raw)) {
          player.sendMessage(Component.text("不明なキーまたは無効な値: $key = $raw", RED))
          return
        }
        BigWolfConfig.saveField(key, plugin)
        val newValue = BigWolfConfig.getField(key)
        player.sendMessage(Component.text("$key を $newValue に設定しました。", GREEN))
      }
      "mob" -> {
        val mobName = args.getOrNull(2)
        if (mobName == null) {
          player.sendMessage(Component.text("利用可能なモブ:", GOLD))
          PetRegistry.allConfigurableTypes()
              .sortedBy { it.name }
              .forEach { player.sendMessage(Component.text("  ${it.name.lowercase()}", YELLOW)) }
          player.sendMessage(
              Component.text(
                  "使い方: /bigwolfop config mob <mob> [list | get <key> | set <key> <value>]",
                  GRAY,
              )
          )
          return
        }
        val type =
            runCatching { EntityType.valueOf(mobName.uppercase(Locale.ROOT)) }.getOrNull()
                ?: run {
                  player.sendMessage(Component.text("不明なモブ: $mobName", RED))
                  return
                }
        when (args.getOrNull(3)?.lowercase()) {
          null,
          "list" -> {
            player.sendMessage(Component.text("=== ${type.name.lowercase()} ===", GOLD))
            PetRegistry.getMobEntryList(type).forEach { (k, v) ->
              player.sendMessage(Component.text("  $k = $v", YELLOW))
            }
            player.sendMessage(
                Component.text("キー: baseSpeed / maxSpeed / jumpPower / scaleMin / scaleMax", GRAY)
            )
          }
          "get" -> {
            val key =
                args.getOrNull(4)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> get <key>", RED)
                      )
                      return
                    }
            val value =
                PetRegistry.getMobField(type, key)
                    ?: run {
                      player.sendMessage(Component.text("不明なキー: $key", RED))
                      return
                    }
            player.sendMessage(Component.text("${type.name.lowercase()}.$key = $value", YELLOW))
          }
          "set" -> {
            val key =
                args.getOrNull(4)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> set <key> <value>", RED)
                      )
                      return
                    }
            val raw =
                args.getOrNull(5)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> set <key> <value>", RED)
                      )
                      return
                    }
            if (!PetRegistry.setMobField(type, key, raw, plugin)) {
              player.sendMessage(Component.text("不明なキーまたは無効な値: $key = $raw", RED))
              return
            }
            val newValue = PetRegistry.getMobField(type, key)
            player.sendMessage(
                Component.text("${type.name.lowercase()}.$key を $newValue に設定しました。", GREEN)
            )
          }
          else ->
              player.sendMessage(
                  Component.text(
                      "使い方: /bigwolfop config mob <mob> [list | get <key> | set <key> <value>]",
                      RED,
                  )
              )
        }
      }
      else ->
          player.sendMessage(
              Component.text(
                  "使い方: /bigwolfop config [list | get <key> | set <key> <value> | mob <mob> ...]",
                  RED,
              )
          )
    }
  }
}
