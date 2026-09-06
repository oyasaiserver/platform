package com.github.sahyuya.oyasaiMusic.velocity

import java.util.Properties

/** Strict local parsing for the Geyser pack file and the Bedrock Transfer return target. */
internal data class BedrockPackSettings(
    val packFile: String,
    val returnHost: String,
    val returnPort: Int,
    val usedLegacyHost: Boolean,
    val usedLegacyPort: Boolean,
    val invalidPackFile: Boolean,
    val invalidReturnHost: Boolean,
    val invalidReturnPort: Boolean,
)

internal object BedrockPackSettingsParser {
  const val DEFAULT_PACK_FILE = "OyasaiMusic-26.2-extended.mcpack"
  const val DEFAULT_RETURN_HOST = "oyasai.io"
  const val DEFAULT_RETURN_PORT = 19132

  private val HOST = Regex("[A-Za-z0-9](?:[A-Za-z0-9.-]{0,251}[A-Za-z0-9])?")

  fun parse(properties: Properties): BedrockPackSettings {
    val rawPackFile =
        properties.getProperty("pack-file", DEFAULT_PACK_FILE).trim().ifBlank { DEFAULT_PACK_FILE }
    val packFileValid =
        rawPackFile.length <= 128 &&
            rawPackFile.endsWith(".mcpack", ignoreCase = true) &&
            rawPackFile != "." &&
            rawPackFile != ".." &&
            rawPackFile.none { it == '/' || it == '\\' || it.code < 0x20 || it.code == 0x7f }

    val maintainedHost = properties.getProperty("return-host")?.trim()?.takeIf(String::isNotBlank)
    val legacyHost = properties.getProperty("transfer-host")?.trim()?.takeIf(String::isNotBlank)
    val rawHost = maintainedHost ?: legacyHost ?: DEFAULT_RETURN_HOST
    val hostValid = rawHost.length <= 253 && HOST.matches(rawHost) && ".." !in rawHost

    val maintainedPort = properties.getProperty("return-port")?.trim()?.takeIf(String::isNotBlank)
    val legacyPort = properties.getProperty("transfer-port")?.trim()?.takeIf(String::isNotBlank)
    val rawPort = maintainedPort ?: legacyPort ?: DEFAULT_RETURN_PORT.toString()
    val parsedPort = rawPort.toIntOrNull()
    val portValid = parsedPort != null && parsedPort in 1..65535

    return BedrockPackSettings(
        packFile = if (packFileValid) rawPackFile else DEFAULT_PACK_FILE,
        returnHost = if (hostValid) rawHost else DEFAULT_RETURN_HOST,
        returnPort = if (portValid) requireNotNull(parsedPort) else DEFAULT_RETURN_PORT,
        usedLegacyHost = maintainedHost == null && legacyHost != null,
        usedLegacyPort = maintainedPort == null && legacyPort != null,
        invalidPackFile = !packFileValid,
        invalidReturnHost = !hostValid,
        invalidReturnPort = !portValid,
    )
  }
}
