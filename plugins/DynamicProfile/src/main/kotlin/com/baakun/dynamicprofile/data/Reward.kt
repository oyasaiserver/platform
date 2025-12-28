package com.baakun.dynamicprofile.data

import org.bukkit.inventory.ItemStack

data class Reward(
    val lv: Int,
    var item: ItemStack,
    var lores: MutableList<String>,
    var runnables: MutableList<Runnable>,
) {}
