package com.baakun.dynamicprofile.promotion.utils

import com.baakun.dynamicprofile.promotion.rank.RankManager
import java.util.UUID
import java.util.concurrent.CompletableFuture
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.node.types.InheritanceNode

object PermsUtils {
  fun getCurrentRank(
      player: UUID
  ): CompletableFuture<com.baakun.dynamicprofile.promotion.rank.Rank?> {
    val api = LuckPermsProvider.get()
    return api.userManager.loadUser(player).thenApplyAsync { user ->
      val inheritedGroups = user.getInheritedGroups(user.queryOptions)
      // inheritedGroupsの中で一番gradeが高いものを取得
      val currentGroup =
          inheritedGroups
              .mapNotNull { group -> RankManager.getRankByGroupName(group.name) }
              .maxByOrNull { it.grade }
      return@thenApplyAsync currentGroup
    }
  }

  fun getGroupNode(groupName: String): InheritanceNode {
    return InheritanceNode.builder(groupName).build()
  }
}
