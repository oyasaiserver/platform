package com.baakun.dynamicprofile

data class TextFormat(
    val id: Int,
    val color: List<Int>,
    val decorate: List<String>,
    val text: String
)
object StyledText {
    fun parseText(input: String): List<TextFormat> {
        val regex = """<(\d+), \[([\d, ]+)\](?:, \[([\w, ]+)\])?>(.*?)</\1>""".toRegex()//<1, [255, 255, 255]>HiHi</1><2, [224, 234, 142], [bold, italic, under, obfus, strike]>Yoyo</2>
        val matches = regex.findAll(input)

        return matches.map { match ->
            val id = match.groupValues[1].toInt()
            val color = match.groupValues[2].split(", ").map { it.toInt() }
            val decorate = match.groupValues[3].takeIf { it.isNotEmpty() }?.split(", ") ?: emptyList()
            val text = match.groupValues[4]

            TextFormat(id, color, decorate, text)
        }.toList()
    }
}