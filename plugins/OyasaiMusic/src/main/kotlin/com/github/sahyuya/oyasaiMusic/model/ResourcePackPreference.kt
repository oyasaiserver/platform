package com.github.sahyuya.oyasaiMusic.model

/** Persisted opt-in only; a missing row intentionally behaves as [DENY]. */
enum class ResourcePackPreference {
  ALLOW,
  DENY,
}
