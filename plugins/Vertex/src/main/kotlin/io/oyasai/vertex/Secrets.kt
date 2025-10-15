package io.oyasai.vertex

object Secrets {
  val ENVIRONMENT = getenv("ENVIRONMENT")

  val DISCORD_WEBHOOK_URL = getenv("DISCORD_WEBHOOK_URL")

  private fun getenv(name: String): String {
    return System.getenv(name)
      ?: throw IllegalStateException("Environment variable $name is not set")
  }
}
