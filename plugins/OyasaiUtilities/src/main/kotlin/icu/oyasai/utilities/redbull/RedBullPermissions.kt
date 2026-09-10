package icu.oyasai.utilities.redbull

import icu.oyasai.utilities.OyasaiUtilities.plugin
import java.time.Instant
import java.util.UUID
import java.util.logging.Level
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.node.types.PermissionNode

/** LuckPerms が有効なときだけアクセスする任意依存の API 連携。 */
internal object RedBullPermissions {
  fun isAvailable(uuid: UUID): Boolean = LuckPermsProvider.get().userManager.getUser(uuid) != null

  fun grant(uuid: UUID, permission: String, expiry: Instant) {
    val manager = LuckPermsProvider.get().userManager
    val user = checkNotNull(manager.getUser(uuid))
    // 保存済みの絶対期限を使い、再使用・再ログインによって24時間を延長しない。
    // 他から付与された無期限権限や期限付き権限は削除しない。
    user.data().add(PermissionNode.builder(permission).expiry(expiry).build())
    // 保存に失敗した場合も PDC に期限が残り、次回ログイン・使用時に再保存する。
    manager.saveUser(user).exceptionally { error ->
      plugin.logger.log(Level.SEVERE, "[RedBull] Failed to save fly permission for $uuid", error)
      null
    }
  }
}
