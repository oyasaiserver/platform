package io.oyasai.oyasaiAdminTools.utils

import io.oyasai.oyasaiAdminTools.rank.RankManager
import java.util.UUID
import java.util.concurrent.CompletableFuture
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.model.group.Group
import net.luckperms.api.node.types.InheritanceNode

object PermsUtils {
  fun hasGroup(player: UUID, group: String): CompletableFuture<Boolean> {
    val api = LuckPermsProvider.get()

    return api.userManager
        .loadUser(player)
        .thenApplyAsync({ user ->
          val inheritedGroups: MutableCollection<Group> = user.getInheritedGroups(user.queryOptions)
          // userに対しての、過去のPermission操作タイムスタンプを取得

          return@thenApplyAsync inheritedGroups.stream().anyMatch { g: Group -> g.name == group }
        })
  }

  fun hasAnyGroup(player: UUID, groups: List<String>): CompletableFuture<Boolean> {
    if (groups.isEmpty()) return CompletableFuture.completedFuture(true)
    val api = LuckPermsProvider.get()

    return api.userManager
        .loadUser(player)
        .thenApplyAsync({ user ->
          val inheritedGroups = user.getInheritedGroups(user.queryOptions)
          return@thenApplyAsync inheritedGroups.stream().anyMatch { g: Group ->
            groups.contains(g.name)
          }
        })
  }

  fun hasAnyGroupSync(player: UUID, groups: List<String>): Boolean {
    if (groups.isEmpty()) return true
    val api = LuckPermsProvider.get()
    val user = api.userManager.getUser(player) ?: return false
    val inheritedGroups = user.getInheritedGroups(user.queryOptions)
    return inheritedGroups.any { groups.contains(it.name) }
  }

  fun getCurrentRank(player: UUID): CompletableFuture<io.oyasai.oyasaiAdminTools.rank.Rank?> {
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
