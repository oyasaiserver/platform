package com.github.oyasaiserver.vertex.database.codec

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ColumnType
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.vendors.currentDialect
import java.sql.ResultSet
import java.util.UUID
import kotlin.uuid.Uuid
import kotlin.uuid.toJavaUuid
import kotlin.uuid.toKotlinUuid

class UuidColumnType : ColumnType<Uuid>() {
    override fun sqlType(): String = currentDialect.dataTypeProvider.uuidType()

    override fun valueFromDB(value: Any): Uuid =
        when (value) {
            is Uuid -> value
            is UUID -> value.toKotlinUuid()
            is ByteArray -> Uuid.fromByteArray(value)
            is String -> Uuid.parse(value)

            else -> error("Unexpected value of type Uuid: $value of ${value::class.qualifiedName}")
        }

    override fun notNullValueToDB(value: Uuid): Any = currentDialect.dataTypeProvider.uuidToDB(value.toJavaUuid())

    override fun nonNullValueToString(value: Uuid): String = "'$value'"

    override fun readObject(
        rs: ResultSet,
        index: Int,
    ): Any? = super.readObject(rs, index)
}

fun Table.kotlinUuid(name: String): Column<Uuid> = registerColumn(name, UuidColumnType())
