package io.oyasai.directstate.update

// AI生成
/** オプトインしたプレイヤーの操作が触れた座標に限定した短時間のガード。 */
internal class UpdateGuard<K, V>(private val lifetime: Long = 4) {
  /** valueは復元用状態、untilはガードが有効な最後のtick。 */
  private data class Entry<V>(val value: V, val until: Long)

  private val neighbors = mutableMapOf<K, Entry<V>>()
  private val sources = mutableMapOf<K, Long>()

  /** 編集元と周辺座標を、nowからlifetime tickだけガード対象として登録する。 */
  fun mark(roots: Set<K>, nearby: Map<K, V>, now: Long) {
    expire(now)
    for (root in roots) {
      neighbors.remove(root)
      sources[root] = now + lifetime
    }
    nearby.forEach { (key, value) ->
      if (key !in sources) neighbors[key] = Entry(neighbors[key]?.value ?: value, now + lifetime)
    }
  }

  /** 座標を編集元・周辺の両方から取り除く。 */
  fun forget(key: K) {
    neighbors.remove(key)
    sources.remove(key)
  }

  /** 現在値を復元候補として残し、周辺ガードの期限を延長する。 */
  fun retain(key: K, value: V, now: Long) {
    sources.remove(key)
    neighbors[key] = Entry(value, now + lifetime)
  }

  /** 編集元または周辺として、現在もガード中かを調べる。 */
  fun active(key: K, now: Long) = (sources[key]?.let { it > now } == true) || neighbor(key, now)

  /** 周辺座標として現在もガード中かを調べる。 */
  fun neighbor(key: K, now: Long) = neighbors[key]?.let { it.until > now } == true

  /** 期限内の周辺座標と、その復元用状態だけを返す。 */
  fun snapshots(now: Long): Map<K, V> =
      neighbors.filterValues { it.until > now }.mapValues { it.value.value }

  /** 期限切れの編集元・周辺座標を削除する。 */
  fun expire(now: Long) {
    neighbors.entries.removeIf { it.value.until <= now }
    sources.entries.removeIf { it.value <= now }
  }

  /** すべてのガード状態を破棄する。 */
  fun clear() {
    neighbors.clear()
    sources.clear()
  }
}
