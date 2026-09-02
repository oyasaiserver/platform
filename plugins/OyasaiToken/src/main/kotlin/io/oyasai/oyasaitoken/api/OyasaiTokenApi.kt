package io.oyasai.oyasaitoken.api

import java.util.UUID

interface OyasaiTokenApi {
  fun getBalance(uuid: UUID): Long

  fun setTokens(uuid: UUID, amount: Long)

  fun addTokens(uuid: UUID, amount: Long): Boolean

  fun removeTokens(uuid: UUID, amount: Long): Boolean
}
