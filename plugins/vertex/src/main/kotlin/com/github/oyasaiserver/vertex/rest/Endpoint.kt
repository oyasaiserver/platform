package com.github.oyasaiserver.vertex.rest

import arrow.core.Either
import com.github.oyasaiserver.vertex.Vertex.Companion.httpClient
import io.ktor.client.request.get
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.URLBuilder
import io.ktor.http.Url
import kotlinx.serialization.json.Json

enum class Endpoint(val url: Url) {
    GOOGLE_TRANSLITERATE(Url("https://www.google.com/transliterate"));

    suspend inline fun <reified T> get(params: Map<String, String>): Either<Throwable, T> =
        Either.catch {
            val response: HttpResponse =
                httpClient.get(
                    URLBuilder(url)
                        .apply { params.forEach { (key, value) -> parameters.append(key, value) } }
                        .build()
                )
            val text = response.bodyAsText()
            Json.decodeFromString<T>(text)
        }
}
