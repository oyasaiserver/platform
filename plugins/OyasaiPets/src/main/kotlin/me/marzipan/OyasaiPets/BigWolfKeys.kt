package me.marzipan.OyasaiPets

import org.bukkit.NamespacedKey
import org.bukkit.plugin.Plugin

/** BigWolfプラグインで使用するNamespacedKeyの管理クラス */
object BigWolfKeys {
  // ペット基本情報
  lateinit var FOOD: NamespacedKey
  lateinit var OWNER: NamespacedKey
  lateinit var SILENT: NamespacedKey
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

  // 購入券
  lateinit var VOUCHER_FLAG: NamespacedKey
  lateinit var VOUCHER_TYPE: NamespacedKey
  lateinit var VOUCHER_VARIANT: NamespacedKey

  /** すべてのキーを初期化 */
  fun initialize(plugin: Plugin) {
    // ペット基本情報
    FOOD = NamespacedKey(plugin, "food_count")
    OWNER = NamespacedKey(plugin, "owner_uuid")
    SILENT = NamespacedKey(plugin, "is_silent_mode")
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

    // 購入券
    VOUCHER_FLAG = NamespacedKey(plugin, "voucher_flag")
    VOUCHER_TYPE = NamespacedKey(plugin, "voucher_type")
    VOUCHER_VARIANT = NamespacedKey(plugin, "voucher_variant")
  }
}
