package io.oyasai.oyasaitoken.api

import java.util.UUID
import java.util.concurrent.CompletableFuture

/**
 * Commit-confirmed token API for OyasaiServer plugins.
 *
 * Obtain it through Bukkit's ServicesManager:
 * ```
 * val token = server.servicesManager.getRegistration(OyasaiTokenService::class.java)?.provider
 * ```
 *
 * Every method completes only after the matching SQLite transaction has committed, so a
 * [TokenResult.Success] means the balance really changed on disk. The older [OyasaiTokenApi]
 * returns `Boolean`, which only reports that the write was accepted into the persistence queue.
 *
 * Notification policy: this API never notifies the player unless the caller asks for it with
 * [Delivery.Default]. Callers own the wording; OyasaiToken owns delivery and durability.
 */
interface OyasaiTokenService {

  /** Current balance. Initializes the account with the configured default when absent. */
  fun balanceOf(uuid: UUID): Long

  /**
   * Takes tokens away. Fails with [TokenResult.InsufficientFunds] instead of going negative.
   *
   * Charging is always an interactive action, so the player is online and the caller should send
   * its own message based on the result.
   */
  fun charge(request: TokenRequest): CompletableFuture<TokenResult>

  /** Gives tokens. */
  fun grant(request: TokenRequest): CompletableFuture<TokenResult>
}

/**
 * A single token movement.
 *
 * @param uuid target player
 * @param amount non-negative number of tokens to move
 * @param playerName known name of the target, used to keep the stored name fresh; may be null
 * @param delivery who tells the player about it. Defaults to [Delivery.Silent]
 */
data class TokenRequest(
    val uuid: UUID,
    val amount: Long,
    val playerName: String? = null,
    val delivery: Delivery = Delivery.Silent,
)

/** Who is responsible for telling the player that their balance moved. */
sealed interface Delivery {

  /**
   * The caller sends its own message. OyasaiToken stays quiet.
   *
   * This is the default, and the right choice for interactive actions such as a shop purchase,
   * where the caller already shows a result screen.
   */
  data object Silent : Delivery

  /**
   * OyasaiToken sends its standard message, queueing it for the next login when the player is
   * offline.
   *
   * Use this only for grants with no context of their own, where a generic "you received N tokens"
   * is the whole story.
   */
  data object Default : Delivery
}

/**
 * Outcome of a token movement.
 *
 * Exhaustive `when` over this type is what stops the "assume it worked and send a success message"
 * bug that the `Boolean` API allowed.
 */
sealed interface TokenResult {

  /** The balance changed and the change is committed to SQLite. */
  data class Success(val newBalance: Long, val delta: Long) : TokenResult

  /** The player did not have enough tokens. Nothing was written. */
  data class InsufficientFunds(val balance: Long, val required: Long) : TokenResult

  /** The write was rejected or did not commit. Nothing durable happened. */
  data class Failed(val reason: String) : TokenResult
}
