package icu.oyasai.games.slot

import icu.oyasai.games.OyasaiGamesPlugin
import java.io.File
import java.util.UUID
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.block.*
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.*
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.potion.PotionEffectType
import org.bukkit.scheduler.BukkitTask

class SlotModule(private val plugin: OyasaiGamesPlugin) : Listener, CommandExecutor, TabCompleter {
  private val folder = File(plugin.dataFolder, "slot")
  private var config = YamlConfiguration()
  private var economy: Economy? = null
  private var machines = linkedMapOf<UUID, SlotMachine>()
  private var active = false
  private val sessions = mutableMapOf<Pair<UUID, UUID>, Spin>()
  private val players = mutableMapOf<UUID, YamlConfiguration>()
  private val unreadablePlayers = mutableSetOf<UUID>()

  private class View(
      val machine: UUID,
      val owner: UUID,
      val preview: Boolean = false,
      val page: Int = 0,
  ) : InventoryHolder {
    lateinit var contents: Inventory

    override fun getInventory(): Inventory = contents
  }

  private class Spin(
      val player: Player,
      val machine: SlotMachine,
      val payment: SlotPayment,
      val prize: SlotPrize?,
      val inventory: Inventory,
  ) {
    val startedAt = System.currentTimeMillis()
    var ticks = 0
    var task: BukkitTask? = null
  }

  fun enable() {
    val command = plugin.getCommand("oslot") ?: error("oslot missing")
    command.setExecutor(this)
    command.tabCompleter = this
    if (!plugin.config.getBoolean("games.slot.enabled", true)) return
    if (plugin.server.pluginManager.isPluginEnabled("SlotMachine")) {
      plugin.logger.warning("slot: 外製SlotMachineが有効なため起動しません。")
      return
    }
    if (!plugin.server.pluginManager.isPluginEnabled("Vault")) {
      plugin.logger.warning("slot: Vaultがないため起動しません。")
      return
    }
    economy = plugin.server.servicesManager.getRegistration(Economy::class.java)?.provider
    if (economy == null) {
      plugin.logger.warning("slot: Vault経済がないため起動しません。")
      return
    }
    val imported = importLegacySlot(folder, File(plugin.dataFolder.parentFile, "SlotMachine"))
    if (imported)
        plugin.logger.info(
            "slot: 初回取り込み machines=${File(folder, "machines").listFiles()?.count { it.extension == "yml" } ?: 0}, players=${File(folder, "players").listFiles()?.count { it.extension == "yml" } ?: 0}"
        )
    if (!folder.exists()) {
      File(folder, "machines").mkdirs()
      saveSlotFile(
          File(folder, "config.yml"),
          "luckLevelToPercentConversion: 12.5\nbadLuckLevelToPercentConversion: -12.5\n",
      )
    }
    load()
    recoverPayments()
    active = true
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.logger.info("slot: ${machines.size}台を有効化しました。")
  }

  private fun load() {
    check(sessions.isEmpty()) { "抽選中はreloadできません。" }
    val nextConfig = loadSlotYaml(File(folder, "config.yml"))
    auditSlotKeys(
        nextConfig,
        setOf(
            "luckLevelToPercentConversion",
            "badLuckLevelToPercentConversion",
            "noPermissionNeededForDefaultAccess",
            "permissionDenied",
            "notEnoughMoney",
            "showItemName",
            "defaultWinMessage",
            "defaultLossMessage",
            "goodLuck",
            "debug",
            "pluginVersion",
            "language",
            "backupMachinesOnPluginUnload",
            "anonymouslyReportExceptionsToDeveloper",
            "enableLanguageOTAUpdates",
            "adminToolMaterial",
            "notEnoughCoinsEngineCurrency",
            "notEnoughTokens",
            "notEnoughGamePoints",
            "notEnoughTokensManager",
        ),
        "config",
        plugin.logger,
    )
    winChance(
        0.0,
        0,
        0,
        nextConfig.getDouble("luckLevelToPercentConversion", 12.5),
        nextConfig.getDouble("badLuckLevelToPercentConversion", -12.5),
    )
    val next = linkedMapOf<UUID, SlotMachine>()
    for (file in
        File(folder, "machines")
            .listFiles()
            .orEmpty()
            .filter { it.extension == "yml" }
            .sortedBy { it.name }) {
      try {
        val machine = loadSlotMachine(file, plugin.logger)
        require(!next.containsKey(machine.id)) { "duplicate machineUUID" }
        next[machine.id] = machine
      } catch (failure: Exception) {
        plugin.logger.warning(
            "slot: 台ファイルを読み込めません (index=${next.size}): ${failure.message?.substringBefore('\n')}"
        )
      }
    }
    val links =
        next.values
            .filter { it.yaml.getString("machineType") == "BLOCK_LINK" }
            .associate { it.id to UUID.fromString(it.yaml.getString("linkTo")) }
    for (id in links.keys) {
      try {
        require(next.containsKey(resolveSlotLink(id, links))) { "linkTo target missing" }
      } catch (failure: Exception) {
        next.remove(id)
        plugin.logger.warning("slot: linkToを解決できない台を無効化しました。")
      }
    }
    for (player in Bukkit.getOnlinePlayers()) if (player.openInventory.topInventory.holder is View)
        player.closeInventory()
    machines = next
    config = nextConfig
    players.clear()
    unreadablePlayers.clear()
    var count = 0
    for (file in File(folder, "players").listFiles().orEmpty().filter { it.extension == "yml" }) {
      val id = runCatching { UUID.fromString(file.nameWithoutExtension) }.getOrNull()
      if (id == null) {
        plugin.logger.warning("slot: プレイヤーファイル名がUUIDではありません。")
        continue
      }
      try {
        val yaml = loadSlotYaml(file)
        // SlotMachine's v2 serializer includes these metadata fields alongside cooldowns.
        auditSlotKeys(
            yaml,
            setOf("machines", "slotCooldownFormat", "version", "playerUUID"),
            "player",
            plugin.logger,
        )
        if (yaml.contains("playerUUID")) {
          require(UUID.fromString(yaml.getString("playerUUID")) == id) { "playerUUID mismatch" }
        }
        require(
            yaml.getString("slotCooldownFormat") in setOf(null, "epoch-millis/duration-seconds")
        ) {
          "slotCooldownFormat"
        }
        yaml.getConfigurationSection("machines")?.let { entries ->
          for (key in entries.getKeys(false)) {
            UUID.fromString(key)
            val entry = entries.getConfigurationSection(key) ?: error("machines entry")
            auditSlotKeys(
                entry,
                setOf("lastUsed", "cooldownDuration"),
                "player.machines",
                plugin.logger,
            )
            require(entry.isLong("lastUsed") || entry.isInt("lastUsed")) { "lastUsed" }
            require(entry.isLong("cooldownDuration") || entry.isInt("cooldownDuration")) {
              "cooldownDuration"
            }
            if (yaml.getString("slotCooldownFormat") != "epoch-millis/duration-seconds") {
              val (timestamp, duration) =
                  convertLegacyCooldown(
                      entry.getLong("lastUsed"),
                      entry.getLong("cooldownDuration"),
                      plugin.config.getString("games.slot.legacy-last-used-unit", "")!!,
                      plugin.config.getString("games.slot.legacy-cooldown-duration-unit", "")!!,
                  )
              entry.set("lastUsed", timestamp)
              entry.set("cooldownDuration", duration)
            }
            remainingCooldown(
                entry.getLong("lastUsed"),
                entry.getLong("cooldownDuration"),
                System.currentTimeMillis(),
            )
          }
        }
        yaml.set("slotCooldownFormat", "epoch-millis/duration-seconds")
        players[id] = yaml
        count++
      } catch (failure: Exception) {
        unreadablePlayers.add(id)
        plugin.logger.warning(
            "slot: クールダウンを読み込めないプレイヤーのプレイを停止しました: ${failure.message?.substringBefore('\n')}"
        )
      }
    }
    plugin.logger.info(
        "slot: 台=${machines.size}, cooldownファイル=$count, 読み込めないプレイヤー=${unreadablePlayers.size}"
    )
  }

  private fun recoverPayments() {
    for (file in File(folder, "payments").listFiles().orEmpty().filter { it.extension == "yml" }) {
      try {
        val id = UUID.fromString(file.nameWithoutExtension.substringBefore('_'))
        val payment = SlotPayment(file)
        if (payment.phase in setOf("PAID", "REFUND_FAILED")) {
          if (
              !payment.refund {
                economy!!.depositPlayer(Bukkit.getOfflinePlayer(id), it).transactionSuccess()
              }
          )
              plugin.logger.severe("slot: 復旧返金に失敗しました。paymentsを確認してください。")
        } else if (payment.blocked)
            plugin.logger.severe("slot: 未確定の${payment.phase}を自動再実行しません。経済ログとpaymentsを照合してください。")
      } catch (failure: Exception) {
        plugin.logger.severe("slot: paymentファイルの復旧に失敗しました。")
      }
    }
  }

  private fun target(machine: SlotMachine): SlotMachine {
    val links =
        machines.values
            .filter { it.yaml.getString("machineType") == "BLOCK_LINK" }
            .associate { it.id to UUID.fromString(it.yaml.getString("linkTo")) }
    return machines.getValue(resolveSlotLink(machine.id, links))
  }

  private fun at(block: Block): SlotMachine? =
      machines.values.firstOrNull {
        it.yaml.getString("worldUID") == block.world.uid.toString() &&
            it.yaml.getInt("blockX") == block.x &&
            it.yaml.getInt("blockY") == block.y &&
            it.yaml.getInt("blockZ") == block.z
      }

  private fun permitted(player: Player, machine: SlotMachine): Boolean {
    val permission = machine.yaml.getString("guiPermission", "slotmachine.access.default")!!
    return (permission == "slotmachine.access.default" &&
        config.getBoolean("noPermissionNeededForDefaultAccess")) || player.hasPermission(permission)
  }

  @EventHandler(ignoreCancelled = true)
  fun interact(event: PlayerInteractEvent) {
    if (!active || event.hand != EquipmentSlot.HAND || event.action != Action.RIGHT_CLICK_BLOCK)
        return
    val machine = event.clickedBlock?.let { at(it) } ?: return
    event.isCancelled = true
    open(event.player, target(machine))
  }

  @EventHandler(ignoreCancelled = true)
  fun entity(event: PlayerInteractEntityEvent) {
    if (!active || event.hand != EquipmentSlot.HAND) return
    val machine =
        machines.values.firstOrNull {
          it.yaml.getString("entityUID") == event.rightClicked.uniqueId.toString()
        } ?: return
    event.isCancelled = true
    open(event.player, target(machine))
  }

  @EventHandler(ignoreCancelled = true)
  fun breakBlock(event: BlockBreakEvent) {
    if (at(event.block)?.yaml?.getBoolean("locked") == true) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun explode(event: EntityExplodeEvent) {
    event.blockList().removeIf { at(it)?.yaml?.getBoolean("locked") == true }
  }

  @EventHandler(ignoreCancelled = true)
  fun explodeBlock(event: BlockExplodeEvent) {
    event.blockList().removeIf { at(it)?.yaml?.getBoolean("locked") == true }
  }

  @EventHandler(ignoreCancelled = true)
  fun piston(event: BlockPistonExtendEvent) {
    if (event.blocks.any { at(it)?.yaml?.getBoolean("locked") == true }) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun pistonBack(event: BlockPistonRetractEvent) {
    if (event.blocks.any { at(it)?.yaml?.getBoolean("locked") == true }) event.isCancelled = true
  }

  @EventHandler
  fun coexist(event: PluginEnableEvent) {
    if (event.plugin.name == "SlotMachine" && active) {
      plugin.logger.warning("slot: SlotMachineが有効になったため停止します。")
      disable()
    }
  }

  private fun values(player: Player, machine: SlotMachine): Map<String, String> =
      mapOf(
          "player" to player.name,
          "machineName" to machine.name,
          "price" to economy!!.format(machine.price),
          "balance" to economy!!.format(economy!!.getBalance(player)),
          "newline" to "\n",
      )

  private fun text(message: String, player: Player, machine: SlotMachine): String =
      ChatColor.translateAlternateColorCodes('&', slotText(message, values(player, machine)))

  private fun sound(player: Player, machine: SlotMachine, key: String) {
    runCatching {
          player.playSound(player.location, machine.yaml.getString("sounds.$key.key")!!, 1f, 1f)
        }
        .onFailure { plugin.logger.warning("slot: sounds.${key}を再生できません。") }
  }

  private fun fail(player: Player, machine: SlotMachine, message: String) {
    player.sendMessage(text(message, player, machine))
    sound(player, machine, "error")
  }

  private fun message(key: String, fallback: String): String =
      config.getString(key)?.takeUnless {
        it == "permission.denied" || it == "money.notenough" || it == "play.goodluck"
      } ?: fallback

  private fun open(player: Player, machine: SlotMachine) {
    if (machine.prizes.isEmpty()) {
      fail(player, machine, "&cこの台には景品が設定されていません。")
      return
    }
    if (!permitted(player, machine)) {
      fail(player, machine, message("permissionDenied", "&cこの台を使う権限がありません。"))
      return
    }
    sessions[player.uniqueId to machine.id]?.let {
      player.openInventory(it.inventory)
      return
    }
    val view = View(machine.id, player.uniqueId)
    val inventory =
        Bukkit.createInventory(
            view,
            slotSize(machine.visual),
            ChatColor.translateAlternateColorCodes('&', machine.name),
        )
    view.contents = inventory
    for (slot in 0..<inventory.size) inventory.setItem(slot, machine.item("backgroundItem"))
    for (slot in reelSlots(machine.visual)) inventory.setItem(
        slot,
        machine.prizes.random().display.clone(),
    )
    for (slot in emphasisSlots(machine.visual)) inventory.setItem(
        slot,
        machine.item("emphasisItem"),
    )
    inventory.setItem(leverSlot(machine.visual), lever(player, machine, false))
    if (machine.yaml.getBoolean("allowContentPreview"))
        inventory.setItem(previewSlot(machine.visual), machine.item("itemListItem"))
    player.openInventory(inventory)
    sound(player, machine, "machineOpen")
  }

  private fun lever(player: Player, machine: SlotMachine, activated: Boolean): ItemStack {
    val item = machine.item(if (activated) "leverItemActivated" else "leverItem")
    val meta = item.itemMeta
    meta.setDisplayName(
        text(machine.yaml.getString("leverTitle", "&6Play for \$price")!!, player, machine)
    )
    meta.lore =
        text(
                machine.yaml.getString("leverDescription", "\$machineName\$newline\$balance")!!,
                player,
                machine,
            )
            .split('\n')
    item.itemMeta = meta
    return item
  }

  private fun preview(player: Player, machine: SlotMachine, page: Int) {
    val last = (machine.prizes.size - 1) / 45
    val safePage = page.coerceIn(0, last)
    val view = View(machine.id, player.uniqueId, true, safePage)
    val inventory = Bukkit.createInventory(view, 54, "景品一覧 ${safePage + 1}/${last + 1}")
    view.contents = inventory
    val total = machine.prizes.sumOf { it.weight }
    for ((slot, prize) in machine.prizes.drop(safePage * 45).take(45).withIndex()) {
      val item = prize.display.clone()
      val meta = item.itemMeta
      val lore = (meta.lore ?: emptyList()).toMutableList()
      if (machine.yaml.getBoolean("itemWeightOnPreview")) lore.add("重み: ${prize.weight}")
      if (machine.yaml.getBoolean("itemChanceOnPreview"))
          lore.add(
              "当選率: ${"%.4f".format(java.util.Locale.ROOT, machine.yaml.getDouble("chanceToWin") * prize.weight / total * 100)}% (運補正前)"
          )
      if (!machine.yaml.getBoolean("items.${prize.key}.showAttributeModifiers", true))
          meta.addItemFlags(org.bukkit.inventory.ItemFlag.HIDE_ATTRIBUTES)
      meta.lore = lore
      item.itemMeta = meta
      inventory.setItem(slot, item)
    }
    inventory.setItem(45, ItemStack(Material.ARROW))
    inventory.setItem(49, machine.item("leverItem"))
    inventory.setItem(53, ItemStack(Material.ARROW))
    player.openInventory(inventory)
  }

  @EventHandler
  fun click(event: InventoryClickEvent) {
    val view = event.view.topInventory.holder as? View ?: return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (!active || player.uniqueId != view.owner) return
    val machine = machines[view.machine] ?: return
    val inventory = event.view.topInventory
    val clicked = event.rawSlot
    // Bukkit forbids opening/closing inventories inside InventoryClickEvent.
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (!active || !player.isOnline || player.openInventory.topInventory !== inventory)
                  return@Runnable
              if (view.preview) {
                when (clicked) {
                  45 -> preview(player, machine, view.page - 1)
                  53 -> preview(player, machine, view.page + 1)
                  49 -> open(player, machine)
                }
              } else
                  when (clicked) {
                    leverSlot(machine.visual) -> play(player, machine, inventory)
                    previewSlot(machine.visual) ->
                        if (
                            machine.yaml.getBoolean("allowContentPreview") &&
                                !sessions.containsKey(player.uniqueId to machine.id)
                        )
                            preview(player, machine, 0)
                  }
            },
        )
  }

  @EventHandler
  fun drag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is View) event.isCancelled = true
  }

  private fun playerData(id: UUID): YamlConfiguration {
    check(id !in unreadablePlayers) { "プレイヤーのクールダウンを読み込めません。" }
    return players.getOrPut(id) {
      YamlConfiguration().apply { set("slotCooldownFormat", "epoch-millis/duration-seconds") }
    }
  }

  private fun payment(player: UUID, machine: UUID) =
      SlotPayment(File(folder, "payments/${player}_${machine}.yml"))

  private fun play(player: Player, machine: SlotMachine, inventory: Inventory) {
    val key = player.uniqueId to machine.id
    if (!player.isOnline || player.isDead || sessions.containsKey(key)) return
    if (machine.prizes.isEmpty()) {
      fail(player, machine, "&cこの台には景品が設定されていません。")
      return
    }
    if (!permitted(player, machine)) {
      fail(player, machine, message("permissionDenied", "&c権限がありません。"))
      return
    }
    var payment: SlotPayment? = null
    try {
      val data = playerData(player.uniqueId)
      val path = "machines.${machine.id}"
      val remaining =
          remainingCooldown(
              data.getLong("$path.lastUsed"),
              data.getLong("$path.cooldownDuration"),
              System.currentTimeMillis(),
          )
      if (remaining > 0) {
        fail(player, machine, "&cあと ${(remaining + 999) / 1000} 秒待ってください。")
        return
      }
      payment = payment(player.uniqueId, machine.id)
      check(!payment.blocked) { "未解決の取引があります。管理者に連絡してください。" }
      // Validate capacity for every possible prize before charging, without revealing the draw.
      for (prize in machine.prizes.filter { it.weight > 0 }) stagedItems(player, prize)
      val luck =
          if (machine.yaml.getBoolean("affectedByLuck"))
              (player.getPotionEffect(PotionEffectType.LUCK)?.amplifier?.plus(1) ?: 0)
          else 0
      val badLuck =
          if (machine.yaml.getBoolean("affectedByLuck"))
              (player.getPotionEffect(PotionEffectType.UNLUCK)?.amplifier?.plus(1) ?: 0)
          else 0
      val chance =
          winChance(
              machine.yaml.getDouble("chanceToWin"),
              luck,
              badLuck,
              config.getDouble("luckLevelToPercentConversion", 12.5),
              config.getDouble("badLuckLevelToPercentConversion", -12.5),
          )
      val random = java.util.concurrent.ThreadLocalRandom.current()
      val prize =
          if (random.nextDouble() < chance)
              machine.prizes[weightedIndex(machine.prizes.map { it.weight }, random.nextDouble())]
          else null
      if (
          !payment.charge(machine.price, prize?.key) {
            economy!!.withdrawPlayer(player, it).transactionSuccess()
          }
      ) {
        fail(player, machine, message("notEnoughMoney", "&c所持金が足りません。"))
        return
      }
      val spin = Spin(player, machine, payment, prize, inventory)
      sessions[key] = spin
      inventory.setItem(leverSlot(machine.visual), lever(player, machine, true))
      sound(player, machine, "leverTrigger")
      player.sendMessage(text(message("goodLuck", "&aGood luck!"), player, machine))
      val frames =
          slotAnimationFrames(machine.visual, machine.yaml.getInt("secondsBeforePrize")).toSet()
      val resultTick = slotResultTick(machine.visual, machine.yaml.getInt("secondsBeforePrize"))
      spin.task =
          Bukkit.getScheduler()
              .runTaskTimer(
                  plugin,
                  Runnable {
                    try {
                      spin.ticks++
                      if (spin.ticks >= resultTick) settle(key, spin)
                      else if (spin.ticks in frames) {
                        for (column in reelColumns(machine.visual)) {
                          for (index in 0..<column.lastIndex) inventory.setItem(
                              column[index],
                              inventory.getItem(column[index + 1])?.clone(),
                          )
                          inventory.setItem(column.last(), machine.prizes.random().display.clone())
                        }
                        sound(
                            player,
                            machine,
                            if (machine.visual == "SLOTMACHINE") "machineSpin" else "csgoSpin",
                        )
                      }
                    } catch (failure: Exception) {
                      abort(key, spin, failure.message ?: "抽選に失敗しました。")
                    }
                  },
                  1L,
                  1L,
              )
    } catch (failure: Exception) {
      sessions.remove(key)?.task?.cancel()
      if (payment?.phase == "PAID") refund(player, payment)
      fail(player, machine, "&c${failure.message?.substringBefore('\n') ?: "プレイを開始できません。"}")
    }
  }

  private fun stagedItems(player: Player, prize: SlotPrize?): Array<ItemStack?> {
    val prototypes = mutableListOf<ItemStack>()
    fun stack(item: ItemStack?): SlotStack? {
      if (item == null || item.type.isAir) return null
      var kind = prototypes.indexOfFirst { it.isSimilar(item) }
      if (kind < 0) {
        kind = prototypes.size
        prototypes.add(item.clone())
      }
      return SlotStack(kind, item.amount, minOf(item.maxStackSize, player.inventory.maxStackSize))
    }
    val existing = player.inventory.storageContents.map { stack(it) }
    val rewards = prize?.rewards.orEmpty().mapNotNull { stack(it.item) }
    return packSlotItems(existing, rewards)
        .map { cell -> cell?.let { prototypes[it.kind].clone().apply { amount = it.amount } } }
        .toTypedArray()
  }

  private fun settle(key: Pair<UUID, UUID>, spin: Spin) {
    val player = spin.player
    val machine = spin.machine
    if (!player.isOnline || player.isDead) {
      abort(key, spin, "ログアウトによる返金")
      return
    }
    val contents = stagedItems(player, spin.prize)
    val oldInventory = player.inventory.storageContents.map { it?.clone() }.toTypedArray()
    val data = playerData(player.uniqueId)
    val oldPlayer = data.saveToString()
    val oldMachine = machine.file.readText()
    val oldUsed = machine.yaml.getLong("timesUsed")
    val wonPath = spin.prize?.let { "items.${it.key}.stats.timesWon" }
    val oldWon = wonPath?.let { machine.yaml.getLong(it) }
    spin.payment.delivering()
    try {
      val path = "machines.${machine.id}"
      data.set("$path.lastUsed", spin.startedAt)
      data.set("$path.cooldownDuration", machine.yaml.getLong("cooldown"))
      machine.yaml.set("timesUsed", Math.addExact(machine.yaml.getLong("timesUsed"), 1L))
      spin.prize?.let { prize ->
        val stat = "items.${prize.key}.stats.timesWon"
        machine.yaml.set(stat, Math.addExact(machine.yaml.getLong(stat), 1L))
      }
      saveSlotFile(File(folder, "players/${player.uniqueId}.yml"), data.saveToString())
      saveSlotFile(
          machine.file,
          patchMachineCounters(
              oldMachine,
              machine.yaml.getLong("timesUsed"),
              spin.prize?.let {
                mapOf(it.key to machine.yaml.getLong("items.${it.key}.stats.timesWon"))
              } ?: emptyMap(),
          ),
      )
      for (reward in spin.prize?.rewards.orEmpty()) {
        reward.command?.let { command ->
          check(
              Bukkit.dispatchCommand(
                  Bukkit.getConsoleSender(),
                  slotText(command, values(player, machine)).removePrefix("/"),
              )
          ) {
            "COMMAND景品の実行に失敗しました。"
          }
        }
      }
      player.inventory.storageContents = contents
      spin.payment.complete()
    } catch (failure: Exception) {
      player.inventory.storageContents = oldInventory
      data.loadFromString(oldPlayer)
      machine.yaml.set("timesUsed", oldUsed)
      if (wonPath != null) machine.yaml.set(wonPath, oldWon)
      runCatching {
            saveSlotFile(File(folder, "players/${player.uniqueId}.yml"), oldPlayer)
            saveSlotFile(machine.file, oldMachine)
          }
          .onFailure { plugin.logger.severe("slot: 統計/クールダウンの復元に失敗しました。paymentsとデータを照合してください。") }
      throw failure
    }
    spin.task?.cancel()
    sessions.remove(key)
    // Presentation failures after settlement must never refund an already delivered prize.
    runCatching {
          if (spin.prize != null) {
            resultMessage(
                    machine.yaml.getBoolean("hasWinMessage"),
                    machine.yaml.getString("winMessage", "")!!,
                )
                ?.let { player.sendMessage(text(it, player, machine)) }
            val itemName =
                spin.prize.display.itemMeta.displayName.takeIf { it.isNotBlank() }
                    ?: spin.prize.display.type.name
            if (
                machine.yaml.getBoolean("displayItemNameInChat") &&
                    config.getBoolean("showItemName", true)
            )
                player.sendMessage(itemName)
            if (machine.yaml.getBoolean("broadcastWonItem"))
                Bukkit.broadcastMessage("${player.name}: $itemName (${machine.name})")
            for (slot in winningSlots(machine.visual)) spin.inventory.setItem(
                slot,
                spin.prize.display.clone(),
            )
          } else {
            resultMessage(
                    machine.yaml.getBoolean("hasLossMessage"),
                    machine.yaml.getString("lossMessage", "")!!,
                )
                ?.let { player.sendMessage(text(it, player, machine)) }
            val slots = winningSlots(machine.visual)
            for ((index, slot) in slots.withIndex()) spin.inventory.setItem(
                slot,
                if (index == slots.lastIndex) machine.item("backgroundItem")
                else machine.prizes.random().display.clone(),
            )
          }
          spin.inventory.setItem(leverSlot(machine.visual), lever(player, machine, false))
          sound(player, machine, if (spin.prize != null) "win" else "loss")
        }
        .onFailure { plugin.logger.warning("slot: 決済済み抽選の表示に失敗しました。") }
  }

  private fun refund(player: Player, payment: SlotPayment) {
    runCatching {
          check(payment.refund { economy!!.depositPlayer(player, it).transactionSuccess() })
        }
        .onFailure {
          plugin.logger.severe("slot: 返金未完了 (${payment.phase})。paymentsと経済ログを確認してください。")
        }
  }

  private fun abort(key: Pair<UUID, UUID>, spin: Spin, reason: String) {
    if (sessions.remove(key) == null) return
    spin.task?.cancel()
    refund(spin.player, spin.payment)
    if (spin.player.isOnline) {
      spin.player.sendMessage("§c抽選を中止しました: $reason")
      spin.player.closeInventory()
    }
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    for ((key, spin) in sessions.toMap()) if (key.first == event.player.uniqueId)
        abort(key, spin, "ログアウト")
  }

  @EventHandler
  fun death(event: PlayerDeathEvent) {
    for ((key, spin) in sessions.toMap()) if (key.first == event.entity.uniqueId)
        abort(key, spin, "死亡")
  }

  fun reload() {
    if (sessions.isNotEmpty()) {
      plugin.logger.warning("slot: 抽選中のためモジュールの再設定を延期しました。")
      return
    }
    disable()
    enable()
  }

  fun disable() {
    active = false
    for ((key, spin) in sessions.toMap()) abort(key, spin, "モジュール停止")
    for (player in Bukkit.getOnlinePlayers()) if (player.openInventory.topInventory.holder is View)
        player.closeInventory()
    HandlerList.unregisterAll(this)
    if (config.getBoolean("backupMachinesOnPluginUnload")) {
      runCatching {
            val backup = File(folder, "machinesLastBackup")
            backup.mkdirs()
            for (file in
                File(folder, "machines").listFiles().orEmpty().filter {
                  it.extension == "yml"
                }) java.nio.file.Files.copy(
                file.toPath(),
                File(backup, file.name).toPath(),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING,
            )
          }
          .onFailure { plugin.logger.warning("slot: 台バックアップを保存できませんでした。") }
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("oyasaigames.slot.admin")) {
      sender.sendMessage("権限がありません。")
      return true
    }
    if (!active) {
      sender.sendMessage("slotモジュールは無効です。")
      return true
    }
    try {
      when (args.firstOrNull()?.lowercase()) {
        "list" ->
            for (machine in machines.values) sender.sendMessage("${machine.id}: ${machine.name}")
        "info" -> {
          val id =
              matchingSlot(args.drop(1).joinToString(" "), machines.mapValues { it.value.name })
                  ?: error("台UUIDまたは一意な台名を指定してください。")
          val placed = machines.getValue(id)
          val machine = target(placed)
          sender.sendMessage(
              "${placed.id}: ${machine.name} / ${placed.yaml.getString("machineType")} / ${machine.visual} / price=${machine.price} / chance=${machine.yaml.getDouble("chanceToWin")} / timesUsed=${machine.yaml.getLong("timesUsed")} / cooldown=${machine.yaml.getLong("cooldown")} / 景品=${machine.prizes.size}"
          )
        }
        "reload" -> {
          load()
          sender.sendMessage("slotを再読み込みしました。")
        }
        else -> sender.sendMessage("/oslot list | info <台UUID/台名> | reload")
      }
    } catch (failure: Exception) {
      sender.sendMessage("slot: ${failure.message?.substringBefore('\n')}")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (!sender.hasPermission("oyasaigames.slot.admin")) return emptyList()
    val options =
        if (args.size == 1) listOf("list", "info", "reload")
        else if (args.size == 2 && args[0] == "info") machines.keys.map { it.toString() }
        else emptyList()
    return options.filter { it.startsWith(args.lastOrNull() ?: "", true) }
  }
}
