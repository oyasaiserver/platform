package com.github.oyasaiserver.vertex.database.collection

import org.bson.codecs.pojo.annotations.BsonId
import kotlin.uuid.Uuid

data class PlayerData(
    @param:BsonId val uuid: Uuid,
    val config: Config = Config(),
    val vault: Vault = Vault(),
)

data class Config(
    val vertex: Vertex = Vertex(),
    val discord: Discord = Discord(),
)

data class Vertex(
    val parrot: Parrot = Parrot(),
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
