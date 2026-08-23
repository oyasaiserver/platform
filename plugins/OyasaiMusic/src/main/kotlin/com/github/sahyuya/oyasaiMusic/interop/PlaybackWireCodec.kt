package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.util.UUID

/** Shared v1 envelope shape; no Bukkit dependency, so wire vectors can be unit tested. */
object PlaybackWireCodec {
  const val VERSION=1; const val MAX=24*1024
  fun encode(type:Int,id:UUID,body:DataOutputStream.()->Unit={}):ByteArray=ByteArrayOutputStream().use{b->DataOutputStream(b).use{o->o.writeByte(VERSION);o.writeByte(type);o.writeLong(id.mostSignificantBits);o.writeLong(id.leastSignificantBits);o.body()};require(b.size()<=MAX);b.toByteArray()}
}

