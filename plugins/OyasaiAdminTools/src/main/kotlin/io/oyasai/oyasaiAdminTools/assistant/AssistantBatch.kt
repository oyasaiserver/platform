package io.oyasai.oyasaiAdminTools.assistant

internal object AssistantBatch {
  fun parse(text: String): List<String> {
    val commands = text.replace("\r\n", "\n").split('\n')
    require(commands.size in 1..20 && commands.none { it.isBlank() }) {
      "拒否: コマンドは空行なしで1～20個にしてください。"
    }
    return commands
  }

  fun fawe(command: String) = command.startsWith("fastasyncworldedit:")

  fun maskChange(command: String) =
      fawe(command) &&
          command.substringBefore(' ').substringAfter(':').removePrefix("/") in
              setOf("gmask", "mask")

  /** setblock/fill with integer corners only (no ~ or ^), every corner inside [area]. */
  fun vanillaInside(command: String, area: AssistantSelectionLock.Area): Boolean {
    val words = command.split(' ')
    val count =
        when (words[0]) {
          "minecraft:setblock" -> 3
          "minecraft:fill" -> 6
          else -> return false
        }
    val numbers = words.drop(1).take(count).map { it.toIntOrNull() ?: return false }
    return numbers.size == count && numbers.chunked(3).all { (x, y, z) -> area.contains(x, y, z) }
  }

  // Only audited block-edit paths use the automatic mask allowance. Other FAWE tools need consent.
  fun maskedEdit(command: String): Boolean {
    if (!fawe(command)) return false
    val words = command.split(' ')
    val root = words[0].substringAfter(':').removePrefix("/")
    if (words.drop(1).any { it.startsWith("-") && ('e' in it || 'b' in it || 'x' in it) })
        return false
    if (root in setOf("brush", "br"))
        return words.getOrNull(1) in
            setOf(
                "sphere",
                "s",
                "cylinder",
                "cyl",
                "c",
                "smooth",
                "blendball",
                "erode",
                "line",
                "l",
                "set",
                "raise",
                "lower",
            )
    return root in
        setOf(
            "set",
            "replace",
            "overlay",
            "walls",
            "faces",
            "outline",
            "center",
            "naturalize",
            "line",
            "curve",
            "sphere",
            "hsphere",
            "cyl",
            "hcyl",
            "pyramid",
            "hpyramid",
            "fill",
            "fillr",
            "drain",
            "fixwater",
            "fixlava",
            "removeabove",
            "removebelow",
            "removenear",
            "replacenear",
            "snow",
            "thaw",
            "green",
            "flora",
            "forest",
            "forestgen",
            "hollow",
            "smooth",
            "deform",
            "generate",
            "gen",
            "g",
            "move",
            "stack",
            "paste",
            "cut",
            // Selection only: the fixed mask does not follow it.
            "pos1",
            "pos2",
        )
  }
}
