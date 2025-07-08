package io.oyasai.lib

import com.connectrpc.ProtocolClientConfig
import com.connectrpc.extensions.GoogleJavaProtobufStrategy
import com.connectrpc.impl.ProtocolClient
import com.connectrpc.okhttp.ConnectOkHttpClient
import io.oyasai.lib.connectrpc.AuthorizationInterceptor

object Client {
    val protocol by lazy {
        ProtocolClient(
            httpClient = ConnectOkHttpClient(),
            config =
                ProtocolClientConfig(
                    host = RuntimeSecrets.API_ENDPOINT,
                    serializationStrategy = GoogleJavaProtobufStrategy(),
                    interceptors = listOf { AuthorizationInterceptor },
                ),
        )
    }
}
