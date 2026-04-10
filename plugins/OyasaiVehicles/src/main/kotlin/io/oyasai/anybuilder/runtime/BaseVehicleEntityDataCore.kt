package io.oyasai.anybuilder.runtime

import io.oyasai.anybuilder.common.EntityLifecycleCommon
import io.oyasai.anybuilder.network.NmsMountBridge
import io.oyasai.toolbox.Tools
import java.util.LinkedHashSet
import java.util.UUID
import org.bukkit.NamespacedKey
import org.bukkit.boss.KeyedBossBar
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Display
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin
import org.bukkit.util.Vector

abstract class BaseVehicleEntityDataCore(
    final override val seatArmorStands: MutableMap<Pair<Int, ArmorStand>, Vector>,
    final override val bodyArmorStands: MutableList<ArmorStand>,
    final override val summoner: Player?,
    val plugin: Plugin,
    val bossBarKey: NamespacedKey,
    val bossBar: KeyedBossBar
) : VehicleEntityData {
  override val displayList: MutableSet<Display> = LinkedHashSet()
  protected val pLibPlayerList: MutableSet<Player> = LinkedHashSet()
  protected val arrayEID: MutableSet<Int> = LinkedHashSet()
  var arrayEntityID: List<Int> = emptyList()
    protected set

  protected abstract fun displayGroups(): Iterable<Iterable<Display>>

  fun refreshDisplayList() {
    EntityLifecycleCommon.refreshDisplayList(this.displayList, this.displayGroups())
  }

  fun refreshDisplayEntityID() {
    this.arrayEntityID =
        EntityLifecycleCommon.refreshDisplayEntityIds(this.arrayEID, this.displayGroups())
  }

  fun removeTrackedPlayer(uuid: UUID) {
    this.pLibPlayerList.removeAll { it.uniqueId == uuid }
  }

  fun joinBody() {
    val loc = this.bodyArmorStands[0].location
    val players = Tools.getNearbyPlayers(loc, 64.0, 64.0, 64.0)
    val entityId = this.bodyArmorStands[0].entityId

    EntityLifecycleCommon.syncMountTracking(
        this.pLibPlayerList,
        players,
        entityId,
        {
          this.refreshDisplayEntityID()
          this.arrayEntityID.toIntArray()
        },
        NmsMountBridge::sendMountPacket)
  }
}
