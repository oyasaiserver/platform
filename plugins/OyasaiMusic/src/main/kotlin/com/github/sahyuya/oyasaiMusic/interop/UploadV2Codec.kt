package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream

/** Paper-side bounded decoder for Unicode15 + OYMC; reconstructed bytes retain OYMI v1/v2/v3. */
object UploadV2Codec {
  const val MAX_BYTES = 1_048_576
  const val MAX_NOTES = 100_000

  fun unicode15Decode(text: String, byteCount: Int): ByteArray {
    require(
      byteCount in 0..MAX_BYTES &&
        text.length == (byteCount * 8 + 14) / 15 &&
        text.length * 3 <= 765 * 400
    )
    val out = ByteArrayOutputStream(byteCount)
    var bits = 0
    var count = 0
    text.forEach { char ->
      bits = (bits shl 15) or value(char)
      count += 15
      while (count >= 8 && out.size() < byteCount) {
        count -= 8
        out.write((bits ushr count) and 255)
      }
    }
    require(out.size() == byteCount && (count == 0 || (bits and ((1 shl count) - 1)) == 0)) {
      "invalid Unicode15 padding"
    }
    return out.toByteArray()
  }

  private fun value(char: Char): Int =
    when (char.code) {
      in 0x3400..0x4dbf -> char.code - 0x3400
      in 0x4e00..0x9fff -> char.code - 0x4e00 + 6592
      in 0xe000..0xf43f -> char.code - 0xe000 + 27584
      else -> throw IllegalArgumentException("invalid Unicode15 alphabet")
    }

  fun reconstructOymi(compact: ByteArray): ByteArray {
    require(compact.size in 1..MAX_BYTES) { "OYMC size is out of bounds" }
    val input = DataInputStream(ByteArrayInputStream(compact))
    require(input.readInt() == 0x4f594d43)
    val oymiVersion = input.readUnsignedByte()
    require(oymiVersion in 1..3)
    val metaLen = readVar(input)
    val notes = readVar(input)
    val duration = readVar(input)
    require(metaLen in 2..MAX_BYTES && notes in 1..MAX_NOTES && duration >= 0)
    require(9L + metaLen.toLong() + notes.toLong() * 3L <= compact.size.toLong()) {
      "OYMC record length is out of bounds"
    }
    val metadata = ByteArray(metaLen)
    input.readFully(metadata)
    val entries = ArrayList<IntArray>(notes)
    var time = 0
    repeat(notes) {
      time = Math.addExact(time, readVar(input))
      val b0 = input.readUnsignedByte()
      val b1 = input.readUnsignedByte()
      val pan = input.readUnsignedByte()
      val instrument = b0 ushr 4
      val pitch = ((b0 and 15) shl 1) or (b1 ushr 7)
      val volume = b1 and 127
      require(
        time <= duration &&
          instrument in 0..15 &&
          pitch in 0..24 &&
          volume in 0..100 &&
          pan <= 200
      )
      entries += intArrayOf(time, instrument, pitch, volume, pan - 100)
    }
    require(input.available() == 0)
    val resultSize = 20L + metaLen.toLong() + notes.toLong() * 8L
    require(resultSize <= MAX_BYTES) { "reconstructed OYMI is too large" }
    return ByteArrayOutputStream(resultSize.toInt()).use { bytes ->
      DataOutputStream(bytes).use { out ->
        out.writeInt(0x4f594d49)
        out.writeShort(oymiVersion)
        out.writeShort(0)
        out.writeInt(metaLen)
        out.writeInt(notes)
        out.writeInt(duration)
        out.write(metadata)
        entries.forEach {
          out.writeInt(it[0])
          out.writeByte(it[1])
          out.writeByte(it[2])
          out.writeByte(it[3])
          out.writeByte(it[4])
        }
      }
      bytes.toByteArray()
    }
  }

  private fun readVar(input: DataInputStream): Int {
    var v = 0
    repeat(5) { i ->
      val b = input.readUnsignedByte()
      if (i == 4 && b > 15) throw IllegalArgumentException("overlong varuint")
      v = v or ((b and 127) shl (i * 7))
      if (b and 128 == 0) {
        if (i > 0 && b == 0) throw IllegalArgumentException("nonminimal varuint")
        return v
      }
    }
    throw IllegalArgumentException("overlong varuint")
  }
}
