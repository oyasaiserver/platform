# OyasaiToken local verification test plan

This plan is for local Paper/Purpur verification only. Build, deploy, and server
startup commands depend on the local server workflow in use.

## Preconditions

- Deploy the locally built `OyasaiToken` jar as plugin name `TokenManager`.
- Deploy the locally built `OyasaiPets` jar for the integration checks.
- Use a disposable server data directory or back up `plugins/TokenManager/tokens.db`
  and `plugins/TokenManager/data.yml` first.
- For DB inspection, use `sqlite3 plugins/TokenManager/tokens.db`.

## 1. Memory-first balance updates and async SQLite persistence

1. Start the server with `persistence.queue-size: 4096`.
2. Join as a test player.
3. Run `/tm set <player> 100`, then immediately run `/token balance <player>`.
4. Expected: the command reports `100 tokens` immediately, without waiting for a
   server restart.
5. Inspect SQLite:
   `SELECT balance FROM token_balances WHERE name = '<player>';`
6. Expected: the balance eventually becomes `100`.
7. Run `/tm add <player> 25` and `/tm remove <player> 10`, checking
   `/token balance <player>` immediately after each command.
8. Expected: memory reads show `125` then `115`; SQLite catches up shortly after.

## 2. Bounded queue fail-fast behavior

1. Set `persistence.queue-size: 1` and restart.
2. Use a small temporary test plugin or console command loop that calls
   `OyasaiTokenApi.addTokens(uuid, 1)` many times from multiple async tasks.
3. Expected: once the single DB writer queue is saturated, normal API calls return
   `false` and the server log contains `Token persistence queue is full`.
4. Confirm that failed calls did not increase `/token balance <player>`.
5. Run `/tm add <player> 1` while the queue is under pressure.
6. Expected: the admin operation fails quickly with
   `Token persistence queue is full.` No caller-thread persistence warning should
   appear, and the in-memory balance should not change for the failed command.

## 2a. Queue ordering under saturation

1. Set `persistence.queue-size: 1` and restart.
2. Use a temporary test plugin or debugger hook to slow the SQLite writer after
   enqueueing several balance updates for the same UUID.
3. While older jobs are still queued, run `/tm set <player> 999`.
4. Expected: the command either enqueues behind the older jobs or fails fast; it
   must not write directly on the caller thread.
5. Let the queue drain, restart, and inspect `/token balance <player>`.
6. Expected: SQLite reflects the last successfully accepted operation. An older
   queued job must not overwrite a newer accepted balance.

## 2b. Atomic `/token send` observation contract

`/token send` is a single ledger operation. Once either
`TMTokenBalanceChangeEvent` for a successful send is observed, reading both balances
must show the completed transfer; listeners must never observe only the sender debit.

1. Set sender to `100` and recipient to `20`, then install a
   `TMTokenBalanceChangeEvent` listener that reads both balances whenever it receives
   either event for the send.
2. Run `/token send <recipient> 10`.
3. Expected: each listener invocation observes sender `90` and recipient `30`.
   The event snapshots still describe the individual debit or credit, but the live
   ledger state is already the completed, atomic transfer.
4. Set sender to `5`, leave recipient at `20`, then run
   `/token send <recipient> 10`.
5. Expected: the command fails and both balances remain `5` and `20`; neither a
   debit nor a credit transaction row is added.
6. Set `persistence.queue-size: 1`, deliberately keep the writer busy as in
   section 2a, and issue sends until one is rejected.
7. Expected: for a rejected send, both balances remain exactly at their
   pre-command values. Queue rejection must never leave the sender debited alone.

## 3. TMAPI.removeTokens Boolean and OyasaiPets interruption

1. Set the player's token balance to `0`.
2. In OyasaiPets, attempt a token-consuming action such as skill unlock, feeding,
   revive, or breeding.
3. Expected: `TMAPI.removeTokens(player.uniqueId, amount)` returns `false` and
   `consumeTokens` returns `false`; the pet-side action does not continue.
4. Set the player's balance to the exact required amount.
5. Retry the same action.
6. Expected: the action succeeds and the balance decreases by the cost.
7. Repeat while using `persistence.queue-size: 1` and queue pressure.
8. Expected: if token removal returns `false` because persistence enqueue failed,
   OyasaiPets also stops the action.

## 4. Idempotent restart and duplicate prevention

1. Start with a clean `tokens.db`.
2. Run `/tm set <player> 100`, `/tm add <player> 10`, `/tm remove <player> 5`.
3. Inspect:
   `SELECT value FROM schema_meta WHERE key = 'last_applied_tx_id';`
   and `SELECT MAX(id) FROM token_transactions;`.
4. Expected: both values match after the queue drains.
5. Stop the server normally, then start it again.
6. Expected: `/token balance <player>` is still `105`; no duplicate add/remove is
   applied on startup.
7. For a stronger duplicate check, manually copy an existing transaction id into
   a debug-only injected persistence job or temporary test hook.
8. Expected: the log reports `Skipping duplicate token transaction id` and the
   balance is not applied twice.

## 5. Crash or forced termination recovery

1. Run a burst of token updates.
2. Immediately kill the server process with a hard termination rather than
   `/stop`.
3. Restart the server.
4. Expected: balances load from `token_balances` without double-applying already
   committed transactions.
5. Known acceptable result: updates accepted only in memory but not yet committed
   to SQLite before the hard kill can be lost; this should be visible as a missing
   tail of transactions, not as duplicated balances.

## 6. Normal shutdown drain

1. Set `persistence.queue-size: 4096`.
2. Generate a burst of token updates.
3. Stop with `/stop`.
4. Expected: no timeout warning appears unless the DB is unusually slow.
5. Inspect SQLite after shutdown:
   `SELECT COUNT(*), MAX(id) FROM token_transactions;`
6. Expected: queued transactions are present, and `last_applied_tx_id` equals
   `MAX(id)`.
7. Repeat with an artificially slow SQLite writer and a very small
   `persistence.shutdown-await-seconds`.
8. Expected: if shutdown wait times out, OyasaiToken logs the timeout and does
   not close the SQLite connection while the writer is still active. A later
   cleanup log may appear after the worker terminates.

## 7. shop/worth compatibility after removal

1. Start the server with OyasaiToken plus the known dependent plugins:
   OyasaiPets, SocialLikes3, DynamicProfile, OyasaiMenu, and OyasaiAdminTools.
2. Expected: all plugins enable without `NoSuchMethodError` or class loading
   errors related to `getShop`, `getWorth`, or `Slot.purchase`.
3. Exercise token balance display, token add/remove, and OyasaiPets token
   consumption.
4. Expected: normal token-related behavior works without shop/worth APIs.

## 8. Balance change event dispatch

1. Install a small temporary listener for
   `me.realized.tokenmanager.api.event.TMTokenBalanceChangeEvent`.
2. In the listener, log `Bukkit.isPrimaryThread()`, uuid, old balance, new
   balance, delta, and reason.
3. Run `/tm set`, `/tm add`, and `/tm remove`.
4. Expected: one event is received for each successful balance update.
5. Call `OyasaiTokenApi.addTokens(uuid, 1)` from an async task.
6. Expected: the API returns without waiting for the listener, and the listener
   log shows `Bukkit.isPrimaryThread() == true`.
7. Make the listener throw a runtime exception.
8. Expected: OyasaiToken logs the listener failure, but the API caller still
   receives the normal success/failure result.

## 9. Manual data.yml transfer does not freeze token operations

1. Prepare a large `plugins/TokenManager/data.yml` with many `Players` entries.
2. Run `/tm transfer confirm` from console.
3. Expected: the command immediately reports that import started and the server
   main thread remains responsive.
4. During the import, try `/tm add <player> 1` or an OyasaiPets action that
   consumes tokens.
5. Expected: token writes fail fast until the import completes; they must not
   wait for the full migration DB loop.
6. After the completion message, inspect SQLite and `/token balance`.
7. Expected: imported balances are present, the in-memory balance view matches
   SQLite, and normal token writes work again.

## 9a. Migration gate rejects racing writes before enqueue

1. Prepare `data.yml` with a known balance for a test player, then start
   `/tm transfer confirm`.
2. As soon as the start message appears, use a temporary async test plugin to call
   `OyasaiTokenApi.addTokens(uuid, 1)` repeatedly while the migration is running.
3. Expected: every call made after the migration gate is entered returns `false`
   before it can enqueue a persistence job; it must not mutate the in-memory
   balance.
4. Wait for the import completion message, then inspect `token_balances` and
   `token_transactions`.
5. Expected: the imported balance is not overwritten by a late `add` job, and
   there is no `add` transaction from the rejected calls. Normal writes resume
   only after the completed import has replaced the in-memory ledger.
