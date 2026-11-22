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

internal interface AsyncTradeFunds {
  fun withdraw(account: String, yen: Long, onResult: (MoneyResult) -> Unit)

  fun deposit(account: String, yen: Long, onResult: (MoneyResult) -> Unit)
}

/**
 * Non-blocking equivalent of [Trade] that awaits asynchronous economy completions via callbacks.
 */
internal class AsyncTrade(
    private val journal: TradeJournal,
    private val funds: AsyncTradeFunds,
    private val stock: () -> StockResult,
) {
  fun execute(
      kind: String,
      buyer: String,
      owner: String,
      yen: Long,
      onComplete: (TradeResult) -> Unit,
  ) {
    val legs =
        when (kind) {
          "Buy",
          "Device" -> listOf(Leg(buyer, false), Leg(owner, true))
          "Sell" -> listOf(Leg(owner, false), Leg(buyer, true))
          "iBuy" -> listOf(Leg(buyer, false))
          "iSell" -> listOf(Leg(buyer, true))
          else -> error("不明な店の種類")
        }
    val id = journal.begin()
    val completed = mutableListOf<Leg>()

    fun stop(reason: String, compensationFailed: Boolean = false) {
      journal.halt(id, reason)
      if (compensationFailed) {
        runCatching { journal.finish(id, "compensation_failed", reason, reason) }
      }
      onComplete(TradeResult.HALTED)
    }

    fun compensate(detail: String, haltAfter: Boolean = false) {
      val toReverse = completed.asReversed()
      fun reverseAt(index: Int) {
        if (index >= toReverse.size) {
          val outcome =
              try {
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
              } catch (_: Exception) {
                journal.halt(id, "終状態の保存失敗")
                TradeResult.HALTED
              }
          onComplete(outcome)
          return
        }
        val leg = toReverse[index].copy(deposit = !toReverse[index].deposit)
        callFund(leg, yen) { res ->
          if (res != MoneyResult.OK) {
            stop("取り消し失敗: $detail", true)
          } else {
            reverseAt(index + 1)
          }
        }
      }
      reverseAt(0)
    }

    fun runStock() {
      try {
        when (stock()) {
          StockResult.OK -> {
            try {
              journal.finish(id, "success", "取引完了")
              onComplete(TradeResult.SUCCESS)
            } catch (_: Exception) {
              stop("終状態の保存失敗")
            }
          }
          StockResult.RESTORED -> compensate("品物移動失敗・スロット復元済み")
          StockResult.RESTORED_HALT -> compensate("レバーの外部作用を要確認", true)
          StockResult.UNKNOWN -> stop("品物の復元結果不明")
        }
      } catch (e: Exception) {
        stop("取引例外: ${e.javaClass.simpleName}")
      }
    }

    fun runLeg(index: Int) {
      if (yen <= 0 || index >= legs.size) {
        runStock()
        return
      }
      val leg = legs[index]
      callFund(leg, yen) { res ->
        when (res) {
          MoneyResult.OK -> {
            completed.add(leg)
            runLeg(index + 1)
          }
          MoneyResult.FAILED -> compensate("入出金失敗")
          MoneyResult.UNKNOWN -> stop("入出金結果不明")
        }
      }
    }

    try {
      runLeg(0)
    } catch (e: Exception) {
      stop("取引例外: ${e.javaClass.simpleName}")
    }
  }

  private fun callFund(leg: Leg, yen: Long, onResult: (MoneyResult) -> Unit) {
    try {
      if (leg.deposit) funds.deposit(leg.account, yen, onResult)
      else funds.withdraw(leg.account, yen, onResult)
    } catch (_: Exception) {
      onResult(MoneyResult.UNKNOWN)
    }
  }

  private data class Leg(val account: String, val deposit: Boolean)
}
