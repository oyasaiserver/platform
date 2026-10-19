package icu.oyasai.games.dice

import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

class DiceDisplayFormatterTest {
  private val plain = PlainTextComponentSerializer.plainText()

  @Test
  fun testD6JavaFormat() {
    val comp1 = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.ONE_D6, 1)
    val text1 = plain.serialize(comp1)
    assertTrue(text1.contains("1"), "D6 1 must contain digit 1")
    assertTrue(text1.contains("🎲"), "D6 Java must contain dice emoji")

    val comp6 = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.ONE_D6, 6)
    val text6 = plain.serialize(comp6)
    assertTrue(text6.contains("6"), "D6 6 must contain digit 6")
  }

  @Test
  fun testD6BedrockFormat() {
    val comp1 = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.ONE_D6, 1)
    val text1 = plain.serialize(comp1)
    assertTrue(text1.contains("⚀"), "D6 Bedrock 1 must contain ⚀")
    assertTrue(text1.contains("1"))

    val comp6 = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.ONE_D6, 6)
    val text6 = plain.serialize(comp6)
    assertTrue(text6.contains("⚅"), "D6 Bedrock 6 must contain ⚅")
    assertTrue(text6.contains("6"))
  }

  @Test
  fun testD2JavaFormat() {
    val compHead = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.D2, 1)
    val textHead = plain.serialize(compHead)
    assertTrue(textHead.contains("表 (1)"), "D2 1 must be 表 (1)")
    assertTrue(textHead.contains("🪙"), "D2 Java must contain coin emoji")

    val compTail = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.D2, 2)
    val textTail = plain.serialize(compTail)
    assertTrue(textTail.contains("裏 (2)"), "D2 2 must be 裏 (2)")
  }

  @Test
  fun testD2BedrockFormat() {
    val compHead = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.D2, 1)
    val textHead = plain.serialize(compHead)
    assertTrue(textHead.contains("表 (1)"))
    assertTrue(textHead.contains("◆"), "D2 Bedrock must use ◆ instead of 🪙")

    val compTail = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.D2, 2)
    val textTail = plain.serialize(compTail)
    assertTrue(textTail.contains("裏 (2)"))
  }

  @Test
  fun testD20JavaFormatCriticalAndFumble() {
    val compCrit = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.D20, 20)
    val textCrit = plain.serialize(compCrit)
    assertTrue(textCrit.contains("Critical!"), "D20 20 must be Critical")
    assertTrue(textCrit.contains("⭐"))

    val compFumble = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.D20, 1)
    val textFumble = plain.serialize(compFumble)
    assertTrue(textFumble.contains("Fumble"), "D20 1 must be Fumble")
    assertTrue(textFumble.contains("💀"))

    val compNormal = DiceDisplayFormatter.formatSingleDiceJava(DiceMode.D20, 10)
    val textNormal = plain.serialize(compNormal)
    assertTrue(textNormal.contains("D20: 10"))
  }

  @Test
  fun testD20BedrockFormatCriticalAndFumble() {
    val compCrit = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.D20, 20)
    val textCrit = plain.serialize(compCrit)
    assertTrue(textCrit.contains("Critical!"))
    assertTrue(textCrit.contains("★"), "D20 Bedrock critical must use ★")

    val compFumble = DiceDisplayFormatter.formatSingleDiceBedrock(DiceMode.D20, 1)
    val textFumble = plain.serialize(compFumble)
    assertTrue(textFumble.contains("Fumble"))
    assertTrue(textFumble.contains("✖"), "D20 Bedrock fumble must use ✖")
  }

  @Test
  fun testPolyhedralFormat() {
    val mode100 = DiceMode.D100
    val compJava = DiceDisplayFormatter.formatSingleDiceJava(mode100, 42)
    val textJava = plain.serialize(compJava)
    assertTrue(textJava.contains("D100: 42"))

    val compBedrock = DiceDisplayFormatter.formatSingleDiceBedrock(mode100, 42)
    val textBedrock = plain.serialize(compBedrock)
    assertTrue(textBedrock.contains("D100: 42"))
  }

  @Test
  fun testTotalHologramFormat() {
    val sum = 15
    val formula = "5 + 6 + 4"

    val compJava = DiceDisplayFormatter.formatTotalTextJava(sum, formula)
    val textJava = plain.serialize(compJava)
    assertTrue(textJava.contains("合計: 15"))
    assertTrue(textJava.contains("( 5 + 6 + 4 )"))
    assertTrue(textJava.contains("🎲"))

    val compBedrock = DiceDisplayFormatter.formatTotalTextBedrock(sum, formula)
    val textBedrock = plain.serialize(compBedrock)
    assertTrue(textBedrock.contains("合計: 15"))
    assertTrue(textBedrock.contains("( 5 + 6 + 4 )"))
    assertTrue(textBedrock.contains("⚅"))
  }
}
