package com.github.sahyuya.socialvotes.data

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGO
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Sign
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin
import java.io.File
import java.util.UUID

class DataManager(private val plugin: Plugin) {

    private val dataFile = File(plugin.dataFolder, "data.yml")
    private val yaml = YamlConfiguration()

    // ============================================
    // In-memory structures
    // ============================================

    val signById: MutableMap<Int, SVSign> = mutableMapOf()
    val locationToId: MutableMap<Location, Int> = mutableMapOf()
    val groupByName: MutableMap<String, SVGroup> = mutableMapOf()

    // groupName -> (uuid -> count)
    val playerVotes: MutableMap<String, MutableMap<UUID, Int>> = mutableMapOf()

    // signId -> (uuid -> count)
    val playerVotesPerSign: MutableMap<Int, MutableMap<UUID, Int>> = mutableMapOf()

    init {
        if (!plugin.dataFolder.exists()) plugin.dataFolder.mkdirs()
    }

    // ============================================
    // Load
    // ============================================

    fun load() {
        if (!dataFile.exists()) {
            save()
            return
        }

        yaml.load(dataFile)

        // -------- Signs --------
        val sSec = yaml.getConfigurationSection("signs")
        sSec?.getKeys(false)?.forEach { idStr ->

            val sec = sSec.getConfigurationSection(idStr) ?: return@forEach
            val id = idStr.toInt()
            val creators = sec.getStringList("creators")
                .mapNotNull {
                    runCatching { UUID.fromString(it) }.getOrNull()
                }
                .toMutableSet()

            // 最低1人保証（安全策）
            if (creators.isEmpty()) {
                plugin.logger.warning("Sign $id has no valid creators.")
            }

            val sign = SVSign(
                id = id,
                world = sec.getString("world", "")!!,
                x = sec.getInt("x"),
                y = sec.getInt("y"),
                z = sec.getInt("z"),
                name = sec.getString("name", "SVSign")!!,
                creators = creators,
                creatorDisplayName = sec.getString("creatorDisplayName"),
                votes = sec.getInt("votes", 0),
                showVotes = sec.getBoolean("showVotes", true),
                group = sec.getString("group", null),
                maxVotesPerSign = sec.getInt("maxVotesPerSign", 1),
                createdAt = sec.getLong("createdAt", System.currentTimeMillis())
            )

            signById[id] = sign

            // === Location Map へ登録 ===
            val world = Bukkit.getWorld(sign.world)
            if (world != null) {
                val loc = Location(
                    world,
                    sign.x.toDouble(),
                    sign.y.toDouble(),
                    sign.z.toDouble()
                )
                locationToId[loc] = id
            }
        }

        // -------- Groups --------
        val gSec = yaml.getConfigurationSection("groups")
        gSec?.getKeys(false)?.forEach { name ->
            val sec = gSec.getConfigurationSection(name) ?: return@forEach
            val group = SVGroup(
                name = name,
                signIds = sec.getIntegerList("signIds").toMutableList(),
                owner = UUID.fromString(sec.getString("owner")),
                maxVotesPerPlayer = sec.getInt("maxVotesPerPlayer", 1),
                showVotesGroup = sec.getBoolean("showVotesGroup", true),
                sortMode = sec.getString("sortMode", "id")!!,
                startTime = sec.getLong("startTime").takeIf { it >= 0 },
                endTime = sec.getLong("endTime").takeIf { it >= 0 }
            )
            groupByName[name] = group
        }

        // -------- playerVotes --------
        val pvSec = yaml.getConfigurationSection("playerVotes")
        pvSec?.getKeys(false)?.forEach { group ->
            val map = mutableMapOf<UUID, Int>()
            val sub = pvSec.getConfigurationSection(group) ?: return@forEach
            sub.getKeys(false).forEach { uuidStr ->
                map[UUID.fromString(uuidStr)] = sub.getInt(uuidStr)
            }
            playerVotes[group] = map
        }

        // -------- playerVotesPerSign --------
        val ppsSec = yaml.getConfigurationSection("playerVotesPerSign")
        ppsSec?.getKeys(false)?.forEach { idStr ->
            val id = idStr.toInt()
            val map = mutableMapOf<UUID, Int>()
            val sub = ppsSec.getConfigurationSection(idStr) ?: return@forEach
            sub.getKeys(false).forEach { uuidStr ->
                map[UUID.fromString(uuidStr)] = sub.getInt(uuidStr)
            }
            playerVotesPerSign[id] = map
        }
    }

    // ============================================
    // Save
    // ============================================

    fun save() {
        yaml.set("signs", null)
        yaml.set("groups", null)
        yaml.set("playerVotes", null)
        yaml.set("playerVotesPerSign", null)

        // signs
        signById.forEach { (id, s) ->
            val p = "signs.$id"
            yaml.set("$p.world", s.world)
            yaml.set("$p.x", s.x)
            yaml.set("$p.y", s.y)
            yaml.set("$p.z", s.z)
            yaml.set("$p.name", s.name)
            yaml.set("$p.creators", s.creators.map { it.toString() })
            yaml.set("$p.creatorDisplayName", s.creatorDisplayName)
            yaml.set("$p.votes", s.votes)
            yaml.set("$p.showVotes", s.showVotes)
            yaml.set("$p.group", s.group)
            yaml.set("$p.maxVotesPerSign", s.maxVotesPerSign)
            yaml.set("$p.createdAt", s.createdAt)
        }

        // groups
        groupByName.forEach { (name, g) ->
            val p = "groups.$name"
            yaml.set("$p.signIds", g.signIds)
            yaml.set("$p.owner", g.owner.toString())
            yaml.set("$p.maxVotesPerPlayer", g.maxVotesPerPlayer)
            yaml.set("$p.showVotesGroup", g.showVotesGroup)
            yaml.set("$p.sortMode", g.sortMode)
            yaml.set("$p.startTime", g.startTime ?: -1)
            yaml.set("$p.endTime", g.endTime ?: -1)
        }

        // playerVotes
        playerVotes.forEach { (group, map) ->
            val p = "playerVotes.$group"
            map.forEach { (uuid, count) ->
                yaml.set("$p.$uuid", count)
            }
        }

        // playerVotesPerSign
        playerVotesPerSign.forEach { (signId, map) ->
            val p = "playerVotesPerSign.$signId"
            map.forEach { (uuid, count) ->
                yaml.set("$p.$uuid", count)
            }
        }

        yaml.save(dataFile)
    }

    // ============================================
    // ID Allocation
    // ============================================

    @Synchronized
    fun nextId(): Int {
        if (signById.isEmpty()) return 1
        val used = signById.keys.sorted()
        var expect = 1
        for (u in used) {
            if (u != expect) return expect
            expect++
        }
        return expect
    }

    // ============================================
    // Sign Operations
    // ============================================

    fun registerSign(loc: Location, name: String, creators: UUID): SVSign {
        val id = nextId()
        val sign = SVSign(
            id = id,
            world = loc.world!!.name,
            x = loc.blockX,
            y = loc.blockY,
            z = loc.blockZ,
            name = name,
            creators = mutableSetOf(creators)
        )

        signById[id] = sign
        locationToId[Location(loc.world, loc.blockX.toDouble(), loc.blockY.toDouble(), loc.blockZ.toDouble())] = id

        val state = loc.block.state as? Sign
        if (state != null) {
            writeSignIdToBlock(state, id)
        }

        save()
        return sign
    }

    fun removeSignById(id: Int) {
        val sign = signById[id] ?: return
        // ===== ワールド上の看板ブロックを削除 =====
        val world = Bukkit.getWorld(sign.world)
        if (world != null) {
            val block = world.getBlockAt(sign.x, sign.y, sign.z)
            if (block.type != Material.AIR) {
                block.type = Material.AIR
            }
        }
        // ===== locationToId から削除 =====
        locationToId.keys.removeIf {
            it.world.name == sign.world &&
                    it.blockX == sign.x &&
                    it.blockY == sign.y &&
                    it.blockZ == sign.z
        }
        // ===== グループ紐付け解除 =====
        sign.group?.let { gName ->
            groupByName[gName]?.signIds?.remove(id)
        }
        // ===== 投票データ削除 =====
        playerVotesPerSign.remove(id)
        // ===== メインデータ削除 =====
        signById.remove(id)
        save()
    }

    fun updateSignLocation(id: Int, newLoc: Location) {
        val sign = signById[id] ?: return

        // 古い Location を除去
        locationToId.keys.removeIf {
            it.world.name == sign.world &&
                    it.blockX == sign.x &&
                    it.blockY == sign.y &&
                    it.blockZ == sign.z
        }

        // 新位置へ更新
        sign.world = newLoc.world!!.name
        sign.x = newLoc.blockX
        sign.y = newLoc.blockY
        sign.z = newLoc.blockZ

        locationToId[newLoc] = id

        save()
    }

    fun getSignAt(loc: Location): SVSign? {
        val id = locationToId[loc] ?: return null
        return signById[id]
    }

    fun writeSignIdToBlock(sign: Sign, id: Int) {
        sign.persistentDataContainer.set(
            SocialVotes.SV_SIGN_ID_KEY,
            PersistentDataType.INTEGER,
            id
        )
        sign.update(true)
    }

    fun readSignIdFromBlock(sign: Sign): Int? {
        return sign.persistentDataContainer.get(
            SocialVotes.SV_SIGN_ID_KEY,
            PersistentDataType.INTEGER
        )
    }

    fun notifyIfAutoDelete(groupName: String) {
        val dm = SocialVotes.dataManager
        val group = dm.groupByName[groupName] ?: return
        if (group.signIds.isNotEmpty()) return
        dm.groupByName.remove(groupName)
        playerVotes.remove(groupName)
        dm.save()
        val message = SVLOGO+"§eグループ§6${group.name}§eは所属SV看板がなくなったため自動削除されました。"
        val targets = mutableSetOf<Player>()
        Bukkit.getOnlinePlayers().filter { it.isOp }.forEach { targets.add(it) }
        Bukkit.getPlayer(group.owner)?.let { targets.add(it) }
        targets.forEach { it.sendMessage(message) }
    }

}
