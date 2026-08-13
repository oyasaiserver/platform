package io.oyasai.oyasaiAdminTools.bulletin.utils

import org.bukkit.scheduler.BukkitTask

/** Manages Bukkit tasks for bulletin components. */
class BulletinTaskRegistry {
  private val tasks = mutableListOf<BukkitTask>()

  /** Adds a task to the registry. */
  fun register(task: BukkitTask) {
    tasks.add(task)
  }

  /** Cancels all registered tasks and clears the registry. */
  fun cancelAll() {
    tasks.forEach { it.cancel() }
    tasks.clear()
  }
}
