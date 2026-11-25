package io.oyasai.particles.model

import java.util.UUID

object AreaIdValidator {
  private val ALLOWED_PATTERN = Regex("^[a-zA-Z0-9_-]{1,32}$")

  fun isValid(raw: String?): Boolean {
    if (raw == null) return false
    if (raw.contains("..") || raw.contains('/') || raw.contains('\\') || raw.contains('.')) {
      return false
    }
    return ALLOWED_PATTERN.matches(raw)
  }

  fun sanitizeOrNull(raw: String?): String? {
    val trimmed = raw?.trim() ?: return null
    return if (isValid(trimmed)) trimmed else null
  }
}

data class ParticleArea(
    val id: String,
    val name: String,
    val worldName: String,
    val ownerUuid: UUID,
    val ownerName: String,
    val shape: AreaShape,
    val effect: ParticleEffectConfig,
    val createdFromItem: Boolean = false,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = createdAt,
) {
  init {
    require(AreaIdValidator.isValid(id)) { "Invalid area id: $id" }
  }
}
