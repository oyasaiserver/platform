package com.github.sahyuya.oyasaiMusic.util

import java.nio.ByteBuffer
import java.util.UUID

/**
 * UUID を SQLite の BLOB(16) カラムに保存するためのユーティリティ。
 *
 * 設計書（1-1章）の指示通り、UUIDは文字列(36バイト)ではなく
 * 16バイトのバイナリとして保存し、インデックスを軽量化する。
 */
object UuidUtil {

    /** UUID を 16バイトの ByteArray に変換する。 */
    fun toBytes(uuid: UUID): ByteArray {
        val buffer = ByteBuffer.allocate(16)
        buffer.putLong(uuid.mostSignificantBits)
        buffer.putLong(uuid.leastSignificantBits)
        return buffer.array()
    }

    /** 16バイトの ByteArray を UUID に変換する。 */
    fun fromBytes(bytes: ByteArray): UUID {
        require(bytes.size == 16) { "UUIDバイト列は16バイトである必要があります(実際: ${bytes.size})" }
        val buffer = ByteBuffer.wrap(bytes)
        val most = buffer.long
        val least = buffer.long
        return UUID(most, least)
    }
}
