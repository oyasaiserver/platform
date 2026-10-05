package icu.oyasai.games.bedwars

import java.util.UUID

internal data class BedWarsPartyView(val leader: UUID, val members: List<UUID>)

/** Main-thread party state only. Arena joins and inventory recovery stay with the module. */
internal class BedWarsParty(
    private val enabled: Boolean = true,
    private val expirationSeconds: Int = 60,
    private val leaderAutojoinAutoleave: Boolean = true,
    private val clockMillis: () -> Long = System::currentTimeMillis,
) {
  private data class Invite(val leader: UUID, val expiresAt: Long)

  private val parties = linkedMapOf<UUID, LinkedHashSet<UUID>>()
  private val membership = mutableMapOf<UUID, UUID>()
  private val invitations = mutableMapOf<UUID, Invite>()

  init {
    require(expirationSeconds > 0)
  }

  fun view(player: UUID): BedWarsPartyView? {
    val leader = membership[player] ?: return null
    return BedWarsPartyView(leader, parties.getValue(leader).toList())
  }

  fun invite(leader: UUID, target: UUID) {
    check(enabled) { "パーティーは無効です" }
    check(leader != target) { "自分は招待できません" }
    check(membership[leader] == null || membership[leader] == leader) { "リーダーのみ招待できます" }
    check(target !in membership) { "相手は既にパーティーに所属しています" }
    val expiresAt = Math.addExact(clockMillis(), expirationSeconds.toLong() * 1000)
    if (leader !in membership) {
      parties[leader] = linkedSetOf(leader)
      membership[leader] = leader
    }
    expire()
    invitations[target] = Invite(leader, expiresAt)
  }

  fun accept(target: UUID, leader: UUID): BedWarsPartyView {
    check(enabled) { "パーティーは無効です" }
    expire()
    val invite = invitations[target]
    check(invite?.leader == leader) { "有効な招待がありません" }
    check(target !in membership) { "既にパーティーに所属しています" }
    val members = parties[leader] ?: error("パーティーは解散しました")
    members.add(target)
    membership[target] = leader
    invitations.remove(target)
    return view(target)!!
  }

  /** A leader leaving dissolves the party; no silent leader election. */
  fun leave(player: UUID): List<UUID> {
    val leader = membership[player] ?: return emptyList()
    if (player == leader) return disband(leader)
    parties.getValue(leader).remove(player)
    membership.remove(player)
    invitations.remove(player)
    return listOf(player)
  }

  fun kick(leader: UUID, target: UUID) {
    check(enabled) { "パーティーは無効です" }
    check(membership[leader] == leader) { "リーダーのみ操作できます" }
    check(target != leader) { "リーダーは解散してください" }
    check(membership[target] == leader) { "同じパーティーのメンバーではありません" }
    leave(target)
  }

  fun disband(leader: UUID): List<UUID> {
    check(enabled) { "パーティーは無効です" }
    check(membership[leader] == leader) { "リーダーのみ解散できます" }
    val members = parties.remove(leader)!!.toList()
    members.forEach { membership.remove(it) }
    invitations.entries.removeIf { it.value.leader == leader }
    return members
  }

  fun expire(): Int {
    val now = clockMillis()
    val before = invitations.size
    invitations.entries.removeIf { it.value.expiresAt <= now || it.value.leader !in parties }
    return before - invitations.size
  }

  /** Preflight every member before joining; parent handles rollback if a later join fails. */
  fun autoMembers(player: UUID): List<UUID> {
    if (!enabled || !leaderAutojoinAutoleave || membership[player] != player) return emptyList()
    return parties.getValue(player).filter { it != player }
  }

  fun clear() {
    parties.clear()
    membership.clear()
    invitations.clear()
  }
}
