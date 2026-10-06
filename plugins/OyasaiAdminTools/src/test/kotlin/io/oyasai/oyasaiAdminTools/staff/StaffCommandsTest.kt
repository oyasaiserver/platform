package io.oyasai.oyasaiAdminTools.staff

import io.oyasai.oyasaiAdminTools.socialspy.SocialSpyRules
import java.io.File
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class StaffCommandsTest {
  @Test
  fun commandMetadataHasOnlyRequestedAliasesAndEssentialsPermissions() {
    val yaml = YamlConfiguration().apply { load(File("src/main/resources/plugin.yml")) }
    assertEquals(
        setOf("invsee", "vanish", "socialspy", "whois", "sudo", "seen", "tpoffline"),
        StaffRules.aliases.keys,
    )
    StaffRules.aliases.forEach { (command, aliases) ->
      assertEquals(aliases, yaml.getStringList("commands.$command.aliases"))
      assertEquals("essentials.$command", yaml.getString("commands.$command.permission"))
      assertEquals("op", yaml.getString("permissions.essentials.$command.default"))
    }
    for (node in listOf("invsee.preventmodify", "sudo.exempt")) {
      assertFalse(yaml.getBoolean("permissions.essentials.$node.default", true))
    }
    assertEquals("op", yaml.getString("permissions.essentials.invsee.modify.default"))
    assertEquals("op", yaml.getString("permissions.essentials.socialspy.others.default"))
    assertFalse(yaml.getStringList("commands.tpoffline.aliases").contains("otp"))
  }

  @Test
  fun spyMatchesWholeLabelsIncludingChatAliasesAndNamespaces() {
    SocialSpyRules.commands.forEach { command ->
      assertTrue(SocialSpyRules.matches("/$command target hello", SocialSpyRules.commands), command)
    }
    for (command in
        listOf("/PM x hi", "/oyasaichat:message x hi", "/essentials:msg x hi", "/r")) assertTrue(
        SocialSpyRules.matches(command, SocialSpyRules.commands)
    )
    for (command in
        listOf("/msgfoo x hi", "/sudo x msg y hi", "msg x hi", "/socialspy", "/")) assertFalse(
        SocialSpyRules.matches(command, SocialSpyRules.commands)
    )
    assertTrue(SocialSpyRules.matches("/custom anything", listOf("*")))
    assertFalse(SocialSpyRules.matches("/pm x hi", listOf("msg")))
    val config = YamlConfiguration().apply { load(File("src/main/resources/config.yml")) }
    assertEquals(SocialSpyRules.commands, config.getStringList("staff.socialspy-commands"))
  }

  @Test
  fun essentialsToggleArgumentsRetainThreeStates() {
    listOf("on", "ON", "1", "enable", "enabled").forEach {
      assertEquals(true, StaffRules.toggle(it))
    }
    listOf("off", "OFF", "0", "disable", "disabled").forEach {
      assertEquals(false, StaffRules.toggle(it))
    }
    listOf(null, "player", "ENABLE", "DISABLE").forEach { assertNull(StaffRules.toggle(it)) }
  }
}
