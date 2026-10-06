package icu.oyasai.games.slot

import java.io.File
import java.util.UUID
import java.util.logging.Logger
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack

internal data class SlotPrize(
    val key: String,
    val display: ItemStack,
    val weight: Long,
    val rewards: List<SlotReward>,
)

internal data class SlotReward(val item: ItemStack? = null, val command: String? = null)

internal data class SlotMachine(
    val id: UUID,
    val file: File,
    val yaml: YamlConfiguration,
    val prizes: List<SlotPrize>,
) {
  val name: String
    get() = yaml.getString("slotMachineName") ?: id.toString()

  val price: Double
    get() = yaml.getDouble("pullPrice")

  val visual: String
    get() = yaml.getString("visualType")!!

  fun item(key: String): ItemStack = yaml.getItemStack(key)!!.clone()
}

internal val machineKeys =
    setOf(
        "saveTime",
        "iVersion",
        "machineType",
        "worldUID",
        "blockX",
        "blockY",
        "blockZ",
        "locked",
        "machineUUID",
        "guiPermission",
        "slotMachineName",
        "visualType",
        "priceType",
        "tokenIdentifier",
        "pullPrice",
        "chanceToWin",
        "secondsBeforePrize",
        "winMessage",
        "hasWinMessage",
        "lossMessage",
        "hasLossMessage",
        "displayItemNameInChat",
        "broadcastWonItem",
        "leverTitle",
        "leverDescription",
        "customLever",
        "affectedByLuck",
        "allowContentPreview",
        "itemWeightOnPreview",
        "itemChanceOnPreview",
        "timesUsed",
        "playMode",
        "cooldown",
        "backgroundItem",
        "emphasisItem",
        "leverItem",
        "leverItemActivated",
        "itemListItem",
        "sounds",
        "items",
        "linkTo",
        "entityUID",
        "isCitizensNPC",
    )

internal fun loadSlotYaml(file: File): YamlConfiguration = YamlConfiguration().apply { load(file) }

internal fun auditSlotKeys(
    section: ConfigurationSection,
    allowed: Set<String>,
    context: String,
    logger: Logger,
) {
  for (key in section.getKeys(false) - allowed) logger.warning("slot: $context の未対応キー: $key")
}

internal fun loadSlotMachine(file: File, logger: Logger): SlotMachine {
  val yaml = loadSlotYaml(file)
  auditSlotKeys(yaml, machineKeys, "machine", logger)
  val id = UUID.fromString(yaml.getString("machineUUID"))
  val type = yaml.getString("machineType")
  require(type in setOf("BLOCK", "BLOCK_LINK", "ENTITY")) { "machineType" }
  if (type == "ENTITY") {
    UUID.fromString(yaml.getString("entityUID"))
    require(!yaml.getBoolean("isCitizensNPC")) { "isCitizensNPC" }
  } else {
    UUID.fromString(yaml.getString("worldUID"))
    for (key in listOf("blockX", "blockY", "blockZ")) require(yaml.isInt(key)) { key }
  }
  if (type == "BLOCK_LINK") {
    UUID.fromString(yaml.getString("linkTo"))
    return SlotMachine(id, file, yaml, emptyList())
  }
  if (type == "ENTITY" && yaml.getConfigurationSection("items") == null) {
    logger.warning("slot: 景品がないENTITY台を遊べない台として読み込みました。")
    return SlotMachine(id, file, yaml, emptyList())
  }
  require(yaml.getString("priceType") == "MONEY") { "priceType" }
  require(yaml.getString("playMode") == "LIMITED_PLAYER") { "playMode" }
  require(yaml.getDouble("pullPrice", Double.NaN).let { it.isFinite() && it >= 0 }) { "pullPrice" }
  winChance(yaml.getDouble("chanceToWin", Double.NaN), 0, 0, 0.0, 0.0)
  for (key in listOf("cooldown", "secondsBeforePrize", "timesUsed")) require(
      yaml.isInt(key) || yaml.isLong(key)
  ) {
    key
  }
  for (key in
      listOf(
          "hasWinMessage",
          "hasLossMessage",
          "displayItemNameInChat",
          "broadcastWonItem",
          "customLever",
          "affectedByLuck",
          "allowContentPreview",
          "itemWeightOnPreview",
          "itemChanceOnPreview",
      )) require(yaml.isBoolean(key)) { key }
  require(yaml.getLong("cooldown", -1) in 0..(Long.MAX_VALUE / 1000)) { "cooldown" }
  require(yaml.getInt("secondsBeforePrize", -1) in 1..3600) { "secondsBeforePrize" }
  require(yaml.getLong("timesUsed", -1) in 0..<Long.MAX_VALUE) { "timesUsed" }
  reelSlots(yaml.getString("visualType") ?: "")
  for (key in
      listOf("backgroundItem", "emphasisItem", "leverItem", "leverItemActivated", "itemListItem")) {
    require(yaml.getItemStack(key)?.type?.isAir == false) { key }
  }
  val sounds = yaml.getConfigurationSection("sounds") ?: error("sounds")
  val soundKeys =
      setOf("machineOpen", "leverTrigger", "machineSpin", "csgoSpin", "win", "loss", "error")
  auditSlotKeys(sounds, soundKeys, "sounds", logger)
  for (key in soundKeys) {
    val sound = sounds.getConfigurationSection(key) ?: error("sounds.$key")
    auditSlotKeys(sound, setOf("key", "isCustom"), "sounds.$key", logger)
    require(sound.getString("key")?.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+")) == true) {
      "sounds.$key.key"
    }
  }
  val items =
      yaml.getConfigurationSection("items") ?: error("items missing; machine is not playable")
  val prizes =
      items.getKeys(false).map { key ->
        val item = items.getConfigurationSection(key) ?: error("items.$key")
        auditSlotKeys(
            item,
            setOf("item", "weight", "showAttributeModifiers", "rewards", "stats"),
            "items.$key",
            logger,
        )
        val display = item.getItemStack("item") ?: error("items.$key.item")
        require(item.isInt("weight") || item.isLong("weight")) { "items.$key.weight" }
        require(display.amount > 0 && !display.type.isAir) { "items.$key.item" }
        val weight = item.getLong("weight", -1)
        require(weight in 0..2_000_000_000L) { "items.$key.weight" }
        val rewards = item.getConfigurationSection("rewards") ?: error("items.$key.rewards")
        val parsed =
            rewards.getKeys(false).map { rewardKey ->
              val reward = rewards.getConfigurationSection(rewardKey) ?: error("reward")
              auditSlotKeys(reward, setOf("type", "item", "command"), "reward", logger)
              when (reward.getString("type")) {
                "ITEM" ->
                    SlotReward(
                        item =
                            reward
                                .getItemStack("item")
                                ?.takeIf { it.amount > 0 && !it.type.isAir }
                                ?.clone() ?: error("reward.item")
                    )
                "COMMAND" ->
                    SlotReward(
                        command =
                            reward.getString("command")?.takeIf { it.isNotBlank() }
                                ?: error("reward.command")
                    )
                else -> error("reward.type")
              }
            }
        require(parsed.isNotEmpty()) { "rewards empty" }
        item.getConfigurationSection("stats")?.let {
          auditSlotKeys(it, setOf("timesWon"), "stats", logger)
          require(it.getLong("timesWon", 0) in 0..<Long.MAX_VALUE) { "stats.timesWon" }
        }
        SlotPrize(key, display, weight, parsed)
      }
  weightedIndex(prizes.map { it.weight }, 0.0)
  return SlotMachine(id, file, yaml, prizes)
}
