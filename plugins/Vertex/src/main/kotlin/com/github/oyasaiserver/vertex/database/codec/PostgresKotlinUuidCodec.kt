package com.github.oyasaiserver.vertex.database.codec

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ColumnType
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.vendors.MariaDBDialect
import org.jetbrains.exposed.sql.vendors.currentDialect
import java.sql.ResultSet
import java.util.UUID
import kotlin.uuid.ExperimentalUuidApi
import kotlin.uuid.Uuid
import kotlin.uuid.toJavaUuid
import kotlin.uuid.toKotlinUuid

@OptIn(ExperimentalUuidApi::class)
class UuidColumnType : ColumnType<Uuid>() {
    override fun sqlType(): String = currentDialect.dataTypeProvider.uuidType()

    override fun valueFromDB(value: Any): Uuid =
        when (value) {
            is Uuid -> value
            is UUID -> value.toKotlinUuid()
            is ByteArray -> Uuid.fromByteArray(value)
            is String -> {
                if (value.matches(uuidRegexp)) {
                    Uuid.parse(value)
                } else {
                    Uuid.fromByteArray(value.toByteArray())
                }
            }

            else -> error("Unexpected value of type Uuid: $value of ${value::class.qualifiedName}")
        }

    override fun notNullValueToDB(value: Uuid): Any = currentDialect.dataTypeProvider.uuidToDB(value.toJavaUuid())

    override fun nonNullValueToString(value: Uuid): String = "'$value'"

    override fun readObject(
        rs: ResultSet,
        index: Int,
    ): Any? =
        when (currentDialect) {
            is MariaDBDialect -> rs.getBytes(index)
            else -> super.readObject(rs, index)
        }

    companion object {
        private val uuidRegexp =
            Regex("[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}", RegexOption.IGNORE_CASE)
    }
}

@OptIn(ExperimentalUuidApi::class)
fun Table.kotlinUuid(name: String): Column<Uuid> = registerColumn(name, UuidColumnType())
