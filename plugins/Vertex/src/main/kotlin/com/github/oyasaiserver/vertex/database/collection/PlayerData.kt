package com.github.oyasaiserver.vertex.database.collection

import org.bson.codecs.pojo.annotations.BsonId
import kotlin.uuid.ExperimentalUuidApi
import kotlin.uuid.Uuid

@OptIn(ExperimentalUuidApi::class)
data class PlayerData(
    @param:BsonId
    val uuid: Uuid,
    val config: Config,
    val vault: Vault,
)

data class Config(
    val vertex: Vertex,
    val discord: Discord,
)

data class Vertex(
    val parrot: Parrot,
)

data class Parrot(
    val enabled: Boolean = true,
)

data class Discord(
    val id: String? = null,
)

data class Vault(
    val money: Int = 0,
    val token: Int = 0,
)
