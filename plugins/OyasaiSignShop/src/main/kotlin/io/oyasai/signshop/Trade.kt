package io.oyasai.signshop

internal enum class MoneyResult {
  OK,
  FAILED,
  UNKNOWN,
}

internal enum class StockResult {
  OK,
  RESTORED,
  RESTORED_HALT,
  UNKNOWN,
}

internal enum class TradeResult {
  SUCCESS,
  FAILED,
  HALTED,
}

internal interface TradeJournal {
  fun begin(): Long

  fun finish(id: Long, status: String, detail: String, halt: String? = null)

  fun halt(id: Long, reason: String)
}

internal interface TradeFunds {
  fun withdraw(account: String, yen: Long): MoneyResult

  fun deposit(account: String, yen: Long): MoneyResult
}

/** All money legs complete before stock changes. Each successful leg is reversed in LIFO order. */
internal class Trade(
    private val journal: TradeJournal,
    private val funds: TradeFunds,
    private val stock: () -> StockResult,
) {
  fun execute(kind: String, buyer: String, owner: String, yen: Long): TradeResult {
    val id = journal.begin()
    val legs =
        when (kind) {
          "Buy",
          "Device" -> listOf(Leg(buyer, false), Leg(owner, true))
          "Sell" -> listOf(Leg(owner, false), Leg(buyer, true))
          "iBuy" -> listOf(Leg(buyer, false))
          "iSell" -> listOf(Leg(buyer, true))
          else -> error("不明な店の種類")
        }
    val completed = mutableListOf<Leg>()
    try {
      if (yen > 0)
          for (leg in legs) {
            when (funds.call(leg, yen)) {
              MoneyResult.OK -> completed.add(leg)
              MoneyResult.FAILED -> return compensate(id, completed, yen, "入出金失敗")
              MoneyResult.UNKNOWN -> return stop(id, "入出金結果不明")
            }
          }
      when (stock()) {
        StockResult.OK -> {
          try {
            journal.finish(id, "success", "取引完了")
          } catch (_: Exception) {
            return stop(id, "終状態の保存失敗")
          }
          return TradeResult.SUCCESS
        }
        StockResult.RESTORED -> return compensate(id, completed, yen, "品物移動失敗・スロット復元済み")
        StockResult.RESTORED_HALT -> return compensate(id, completed, yen, "レバーの外部作用を要確認", true)
        StockResult.UNKNOWN -> return stop(id, "品物の復元結果不明")
      }
    } catch (e: Exception) {
      return stop(id, "取引例外: ${e.javaClass.simpleName}")
    }
  }

  private fun compensate(
      id: Long,
      completed: List<Leg>,
      yen: Long,
      detail: String,
      haltAfter: Boolean = false,
  ): TradeResult {
    for (leg in completed.asReversed()) {
      if (funds.call(leg.copy(deposit = !leg.deposit), yen) != MoneyResult.OK)
          return stop(id, "取り消し失敗: $detail", true)
    }
    return try {
      journal.finish(
          id,
          if (completed.isEmpty()) "failed" else "compensated",
          detail,
          if (haltAfter) detail else null,
      )
      if (haltAfter) {
        journal.halt(id, detail)
        TradeResult.HALTED
      } else TradeResult.FAILED
    } catch (e: Exception) {
      stop(id, "終状態の保存失敗")
    }
  }

  private fun stop(id: Long, reason: String, compensationFailed: Boolean = false): TradeResult {
    journal.halt(id, reason)
    if (compensationFailed)
        runCatching { journal.finish(id, "compensation_failed", reason, reason) }
    return TradeResult.HALTED
  }

  private data class Leg(val account: String, val deposit: Boolean)

  private fun TradeFunds.call(leg: Leg, yen: Long) =
      try {
        if (leg.deposit) deposit(leg.account, yen) else withdraw(leg.account, yen)
      } catch (_: Exception) {
        MoneyResult.UNKNOWN
      }
}
