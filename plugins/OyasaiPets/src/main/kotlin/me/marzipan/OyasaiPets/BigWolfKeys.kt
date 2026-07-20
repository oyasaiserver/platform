@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.Plugin

/** BigWolfプラグインで使用するNamespacedKeyの管理クラス */
object BigWolfKeys {
  // ペット基本情報
  lateinit var FOOD: NamespacedKey
  lateinit var OWNER: NamespacedKey
  lateinit var PARTICLE: NamespacedKey
  lateinit var PET_ID: NamespacedKey
  lateinit var SKILL_TYPE: NamespacedKey
  lateinit var HOVER_STATE: NamespacedKey
  lateinit var SKILL_UNLOCKED: NamespacedKey

  // ペット統計
  lateinit var STAT_DISTANCE: NamespacedKey
  lateinit var STAT_JUMPS: NamespacedKey
  lateinit var STAT_TOYS: NamespacedKey
  lateinit var STAT_BRUSHES: NamespacedKey
  lateinit var STAT_TREATS: NamespacedKey

  // 収納アイテム（メタデータ）
  lateinit var STORED_FLAG: NamespacedKey
  lateinit var STORED_TYPE: NamespacedKey
  lateinit var STORED_VARIANT: NamespacedKey
  lateinit var STORED_NAME: NamespacedKey
  lateinit var STORED_ID: NamespacedKey
  lateinit var STORED_OWNER: NamespacedKey
  lateinit var STORED_SKILL: NamespacedKey
  lateinit var STORED_HOVER: NamespacedKey
  lateinit var STORED_UNLOCKED: NamespacedKey
  lateinit var STORED_STAT_DISTANCE: NamespacedKey
  lateinit var STORED_STAT_JUMPS: NamespacedKey
  lateinit var STORED_STAT_TOYS: NamespacedKey
  lateinit var STORED_STAT_BRUSHES: NamespacedKey
  lateinit var STORED_STAT_TREATS: NamespacedKey

  // ショップMOB
  lateinit var SHOP_FLAG: NamespacedKey
  lateinit var SHOP_TYPE: NamespacedKey
  lateinit var SHOP_VARIANT: NamespacedKey
  lateinit var SHOP_COST: NamespacedKey

  // v2: 交配・譲渡関連
  lateinit var PARENT_1: NamespacedKey
  lateinit var PARENT_2: NamespacedKey
  lateinit var GENERATION: NamespacedKey
  lateinit var BREED_COUNT: NamespacedKey
  lateinit var ORIGINAL_OWNER: NamespacedKey
  lateinit var TRANSFER_COUNT: NamespacedKey
  lateinit var PARTICLE_UNLOCKED: NamespacedKey
  lateinit var SPEED_MULTIPLIER: NamespacedKey
  lateinit var JUMP_MULTIPLIER: NamespacedKey
  lateinit var PCD_VERSION: NamespacedKey

  // v2: 収納アイテム用の追加キー
  lateinit var STORED_PCD_VERSION: NamespacedKey
  lateinit var STORED_ORIGINAL_OWNER: NamespacedKey
  lateinit var STORED_TRANSFER_COUNT: NamespacedKey
  lateinit var STORED_BREED_COUNT: NamespacedKey
  lateinit var STORED_PARENT_1: NamespacedKey
  lateinit var STORED_PARENT_2: NamespacedKey
  lateinit var STORED_GENERATION: NamespacedKey
  lateinit var STORED_PARTICLE_UNLOCKED: NamespacedKey
  lateinit var STORED_SPEED_MULTIPLIER: NamespacedKey
  lateinit var STORED_JUMP_MULTIPLIER: NamespacedKey

  // v3: 性質（定型/非定型）関連
  lateinit var TEMPERAMENT: NamespacedKey
  lateinit var STORED_TEMPERAMENT: NamespacedKey

  // PCDバージョン定数
  const val CURRENT_PCD_VERSION = 3

  /** すべてのキーを初期化 */
  fun initialize(plugin: Plugin) {
    // ペット基本情報
    FOOD = NamespacedKey(plugin, "food_count")
    OWNER = NamespacedKey(plugin, "owner_uuid")
    PARTICLE = NamespacedKey(plugin, "particle_type")
    PET_ID = NamespacedKey(plugin, "unique_pet_id")
    SKILL_TYPE = NamespacedKey(plugin, "skill_type")
    HOVER_STATE = NamespacedKey(plugin, "hover_state")
    SKILL_UNLOCKED = NamespacedKey(plugin, "skill_unlocked_level")

    // ペット統計
    STAT_DISTANCE = NamespacedKey(plugin, "stat_distance_m")
    STAT_JUMPS = NamespacedKey(plugin, "stat_jumps")
    STAT_TOYS = NamespacedKey(plugin, "stat_toys")
    STAT_BRUSHES = NamespacedKey(plugin, "stat_brushes")
    STAT_TREATS = NamespacedKey(plugin, "stat_treats")

    // 収納アイテム（メタデータ）
    STORED_FLAG = NamespacedKey(plugin, "is_stored_pet")
    STORED_TYPE = NamespacedKey(plugin, "stored_type")
    STORED_VARIANT = NamespacedKey(plugin, "stored_variant")
    STORED_NAME = NamespacedKey(plugin, "stored_name")
    STORED_ID = NamespacedKey(plugin, "stored_pet_id")
    STORED_OWNER = NamespacedKey(plugin, "stored_owner_uuid")
    STORED_SKILL = NamespacedKey(plugin, "stored_skill")
    STORED_HOVER = NamespacedKey(plugin, "stored_hover")
    STORED_UNLOCKED = NamespacedKey(plugin, "stored_unlocked_level")
    STORED_STAT_DISTANCE = NamespacedKey(plugin, "stored_stat_distance_m")
    STORED_STAT_JUMPS = NamespacedKey(plugin, "stored_stat_jumps")
    STORED_STAT_TOYS = NamespacedKey(plugin, "stored_stat_toys")
    STORED_STAT_BRUSHES = NamespacedKey(plugin, "stored_stat_brushes")
    STORED_STAT_TREATS = NamespacedKey(plugin, "stored_stat_treats")

    // ショップMOB
    SHOP_FLAG = NamespacedKey(plugin, "shop_flag")
    SHOP_TYPE = NamespacedKey(plugin, "shop_type")
    SHOP_VARIANT = NamespacedKey(plugin, "shop_variant")
    SHOP_COST = NamespacedKey(plugin, "shop_cost")

    // v2: 交配・譲渡関連
    PARENT_1 = NamespacedKey(plugin, "parent_1_id")
    PARENT_2 = NamespacedKey(plugin, "parent_2_id")
    GENERATION = NamespacedKey(plugin, "generation")
    BREED_COUNT = NamespacedKey(plugin, "breed_count")
    ORIGINAL_OWNER = NamespacedKey(plugin, "original_owner_uuid")
    TRANSFER_COUNT = NamespacedKey(plugin, "transfer_count")
    PARTICLE_UNLOCKED = NamespacedKey(plugin, "particle_unlocked")
    SPEED_MULTIPLIER = NamespacedKey(plugin, "speed_multiplier")
    JUMP_MULTIPLIER = NamespacedKey(plugin, "jump_multiplier")
    PCD_VERSION = NamespacedKey(plugin, "pcd_version")

    // v2: 収納アイテム用の追加キー
    STORED_PCD_VERSION = NamespacedKey(plugin, "stored_pcd_version")
    STORED_ORIGINAL_OWNER = NamespacedKey(plugin, "stored_original_owner")
    STORED_TRANSFER_COUNT = NamespacedKey(plugin, "stored_transfer_count")
    STORED_BREED_COUNT = NamespacedKey(plugin, "stored_breed_count")
    STORED_PARENT_1 = NamespacedKey(plugin, "stored_parent_1")
    STORED_PARENT_2 = NamespacedKey(plugin, "stored_parent_2")
    STORED_GENERATION = NamespacedKey(plugin, "stored_generation")
    STORED_PARTICLE_UNLOCKED = NamespacedKey(plugin, "stored_particle_unlocked")
    STORED_SPEED_MULTIPLIER = NamespacedKey(plugin, "stored_speed_multiplier")
    STORED_JUMP_MULTIPLIER = NamespacedKey(plugin, "stored_jump_multiplier")

    // v3: 性質（定型/非定型）関連
    TEMPERAMENT = NamespacedKey(plugin, "temperament")
    STORED_TEMPERAMENT = NamespacedKey(plugin, "stored_temperament")
  }
}
