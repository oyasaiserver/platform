package com.github.oyasaiserver.vertex.database.codec

import org.bson.BsonReader
import org.bson.BsonWriter
import org.bson.codecs.Codec
import org.bson.codecs.DecoderContext
import org.bson.codecs.EncoderContext
import kotlin.uuid.ExperimentalUuidApi
import kotlin.uuid.Uuid

@OptIn(ExperimentalUuidApi::class)
class MongoKotlinUuidCodec : Codec<Uuid> {
    override fun encode(
        writer: BsonWriter,
        value: Uuid,
        encoderContext: EncoderContext,
    ) = writer.writeString(value.toString())

    override fun decode(
        reader: BsonReader,
        decoderContext: DecoderContext,
    ): Uuid = Uuid.parse(reader.readString())

    override fun getEncoderClass(): Class<Uuid> = Uuid::class.java
}
