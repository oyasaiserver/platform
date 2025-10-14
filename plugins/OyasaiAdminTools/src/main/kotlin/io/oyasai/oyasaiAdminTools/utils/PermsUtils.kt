package io.oyasai.oyasaiAdminTools.utils

import io.oyasai.oyasaiAdminTools.rank.RankManager
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.model.data.DataType
import net.luckperms.api.model.group.Group
import net.luckperms.api.node.types.InheritanceNode
import java.util.UUID
import java.util.concurrent.CompletableFuture

object PermsUtils {
    fun aa(player: UUID, group: String): CompletableFuture<Boolean> {
        val api = LuckPermsProvider.get()

        return api.userManager.loadUser(player)
            .thenApplyAsync({ user ->
                val inheritedGroups: MutableCollection<Group> = user.getInheritedGroups(user.queryOptions)
                // userに対しての、過去のPermission操作タイムスタンプを取得

                return@thenApplyAsync inheritedGroups.stream().anyMatch { g: Group -> g.name == group }
            })
    }

    fun getCurrentRank(player: UUID): CompletableFuture<io.oyasai.oyasaiAdminTools.rank.Rank?> {
        val api = LuckPermsProvider.get()
        return api.userManager.loadUser(player).thenApplyAsync { user ->
            val inheritedGroups = user.getInheritedGroups(user.queryOptions)
            //inheritedGroupsの中で一番gradeが高いものを取得
            val currentGroup = inheritedGroups.mapNotNull { group ->
                RankManager.getRankByGroupName(group.name)
            }.maxByOrNull { it.grade }
            return@thenApplyAsync currentGroup
        }
    }

    fun getGroupNode(groupName: String): InheritanceNode {
        return InheritanceNode.builder(groupName).build()
    }
}