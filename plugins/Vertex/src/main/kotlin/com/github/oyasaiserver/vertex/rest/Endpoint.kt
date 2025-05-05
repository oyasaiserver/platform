package com.github.oyasaiserver.vertex.rest

import arrow.core.Either
import arrow.core.Either.Companion.catch
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.URLBuilder
import io.ktor.http.Url
import kotlinx.serialization.json.Json

enum class Endpoint(
    val url: Url,
) {
    GOOGLE_TRANSLITERATE(Url("https://www.google.com/transliterate")),
    ;

    suspend inline fun <reified T> get(params: Map<String, String>): Either<Throwable, T> =
        catch {
            httpClient
                .get(
                    URLBuilder(url)
                        .apply { params.forEach { (key, value) -> parameters.append(key, value) } }
                        .build(),
                ).bodyAsText()
                .let { Json.decodeFromString<T>(it) }
        }

    companion object {
        val httpClient = HttpClient(CIO)
    }
}
