package com.github.sahyuya.socialvotes.commands

import java.util.*
import kotlin.collections.HashMap
import kotlin.collections.HashSet

object AddModeManager {
    private val watching = HashMap<UUID, String>()
    fun watchPlayerForAdd(uuid: UUID, group: String) { watching[uuid] = group }
    fun isWatching(uuid: UUID): Boolean = watching.containsKey(uuid)
    fun getGroup(uuid: UUID): String? = watching[uuid]
    fun cancel(uuid: UUID) { watching.remove(uuid) }
}

object RemoveModeManager {
    private val watching = HashSet<UUID>()
    fun watchPlayerForRemove(uuid: UUID) { watching.add(uuid) }
    fun isWatching(uuid: UUID): Boolean = watching.contains(uuid)
    fun cancel(uuid: UUID) { watching.remove(uuid) }
}

object UpdateModeManager {
    private val watching = HashSet<UUID>()
    fun watchPlayer(uuid: UUID) { watching.add(uuid) }
    fun isWatching(uuid: UUID) = watching.contains(uuid)
    fun cancel(uuid: UUID) { watching.remove(uuid) }
}

