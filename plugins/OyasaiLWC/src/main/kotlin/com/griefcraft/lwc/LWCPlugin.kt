package com.griefcraft.lwc

import org.bukkit.plugin.java.JavaPlugin

// SignShop の canBuild が plugin をこの型にキャストするための最小互換 API。
abstract class LWCPlugin : JavaPlugin() {
  abstract fun getLWC(): LWC
}
