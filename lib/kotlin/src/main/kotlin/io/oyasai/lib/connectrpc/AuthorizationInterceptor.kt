package io.oyasai.lib.connectrpc

import com.connectrpc.Interceptor
import com.connectrpc.StreamFunction
import com.connectrpc.UnaryFunction
import com.connectrpc.http.UnaryHTTPRequest
import io.oyasai.lib.RuntimeSecrets

object AuthorizationInterceptor : Interceptor {
  override fun unaryFunction() =
    UnaryFunction(
      requestFunction = {
        UnaryHTTPRequest(
          url = it.url,
          contentType = it.contentType,
          timeout = it.timeout,
          headers =
            it.headers + mapOf("Authorization" to listOf("Bearer ${RuntimeSecrets.BEARER}")),
          methodSpec = it.methodSpec,
          message = it.message,
          httpMethod = it.httpMethod,
        )
      }
    )

  override fun streamFunction() = StreamFunction()
}
