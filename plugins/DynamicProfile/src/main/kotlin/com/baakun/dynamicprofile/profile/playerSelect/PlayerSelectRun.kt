package com.baakun.dynamicprofile.profile.playerSelect

import com.baakun.dynamicprofile.Tools.getStats
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.profile.OtherProfile
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

enum class RunType{
    OPEN_PROFILE,ADD_FRIEND
}

object PlayerSelectRun {
    fun run(viewer: Player, selected: Player, type: RunType){
        when(type){
            RunType.OPEN_PROFILE->{
                if(selected == viewer){
                    MyProfile.display(viewer)
                }else{
                    OtherProfile.display(viewer, selected.name)
                }
            }
            RunType.ADD_FRIEND->{
                val userstats = getStats(viewer.uniqueId)
                viewer.closeInventory()
                val inv = GuiInventory.createInventory(1, "${selected.name} をフレンドに追加しますか？")
                inv.setItem(2, ItemStack(Material.LIME_WOOL).guiRun{ userstats.friends.add(selected.uniqueId) })
            }
        }
    }
}