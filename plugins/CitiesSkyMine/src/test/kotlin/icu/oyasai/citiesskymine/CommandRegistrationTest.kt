package icu.oyasai.citiesskymine

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class CommandRegistrationTest {
  @Test
  fun declaredCommandsMatchRegisteredNames() {
    val expectedNames =
        setOf(
            "csm",
            ".help",
            "rc",
            ".rc",
            "ri",
            ".ri",
            "hb",
            ".hb",
            ".pl",
            ".win",
            ".ss",
            ".col",
            ".ns",
            ".crowd",
            ".sel",
            ".settings",
            ".config",
            ".cloud",
            ".bez",
            ".ds",
            ".brp",
            ".sc",
            ".hud",
            ".sui",
        )
    // commands 直下のキーだけを読む。別名や権限ノードは登録名に含めない。
    val descriptor = checkNotNull(javaClass.getResource("/plugin.yml")).readText()
    val commands = descriptor.substringAfter("commands:\n").substringBefore("\npermissions:")
    val declaredNames =
        Regex("(?m)^  (\\\"[^\\\"]+\\\"|[^ :]+):$")
            .findAll(commands)
            .map { it.groupValues[1].trim('"') }
            .toSet()

    // サーバー起動に依存せず、抽出前の getCommand と抽出後の bind の両形式を検証する。
    val source = File("src/main/kotlin/icu/oyasai/citiesskymine/Main.kt").readText()
    val onEnable =
        source
            .substringAfter("override fun onEnable() {")
            .substringBefore("override fun onDisable() {")
    val directNames =
        Regex("getCommand\\(\"([^\"]+)\"\\)").findAll(onEnable).map { it.groupValues[1] }
    val boundNames =
        Regex("bind\\(\\w+,\\s*((?:\"[^\"]+\"\\s*,?\\s*)+)\\)").findAll(onEnable).flatMap { call ->
          Regex("\"([^\"]+)\"").findAll(call.groupValues[1]).map { it.groupValues[1] }
        }
    val registeredNames = (directNames + boundNames).toSet()

    assertEquals(expectedNames, declaredNames, "plugin.yml の commands のキー集合")
    assertEquals(declaredNames, registeredNames, "宣言した全コマンドを onEnable で登録する")
  }
}
