package io.oyasai.vertex.services.http

import io.ktor.server.application.*
import io.ktor.server.cio.*
import io.ktor.server.engine.*
import io.ktor.server.resources.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.oyasai.vertex.services.Service
import io.oyasai.vertex.services.http.handlers.Health
import kotlinx.coroutines.*

object HttpService : Service {
  private var httpServer: EmbeddedServer<CIOApplicationEngine, CIOApplicationEngine.Configuration>? = null
  private var httpJob: Job? = null

  @OptIn(DelicateCoroutinesApi::class)
  override fun onEnable() {
    httpJob = GlobalScope.launch {
      httpServer = embeddedServer(factory = CIO, port = 80) {
        routing {
          install(Resources)
          routing {
            get<Health> {
              call.respondText("OK")
            }
          }
        }
      }.start(wait = false)
    }
  }

  override fun onDisable() {
    httpServer?.stop()
    runBlocking {
      httpJob?.cancelAndJoin()
    }
  }
}
