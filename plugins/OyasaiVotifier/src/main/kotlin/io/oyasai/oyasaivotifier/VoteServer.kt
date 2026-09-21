package io.oyasai.oyasaivotifier

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import com.vexsoftware.votifier.model.Vote
import java.io.BufferedInputStream
import java.io.DataInputStream
import java.io.OutputStream
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.ServerSocket
import java.net.Socket
import java.nio.charset.StandardCharsets
import java.security.KeyFactory
import java.security.KeyPair
import java.security.KeyPairGenerator
import java.security.MessageDigest
import java.security.SecureRandom
import java.security.spec.PKCS8EncodedKeySpec
import java.security.spec.X509EncodedKeySpec
import java.util.Base64
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.ExecutorService
import java.util.concurrent.RejectedExecutionException
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit
import java.util.logging.Logger
import javax.crypto.Cipher
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

internal enum class VoteProtocol {
  V1,
  V2,
}

internal class VoteServer(
    private val logger: Logger,
    private val config: VotifierConfig,
    private val keys: KeyPair,
    private val accepted: (Vote, VoteProtocol) -> Unit,
) : AutoCloseable {
  private val workers: ExecutorService =
      ThreadPoolExecutor(
          4,
          4,
          0,
          TimeUnit.MILLISECONDS,
          ArrayBlockingQueue(64),
          { runnable -> Thread(runnable, "OyasaiVotifier-client").apply { isDaemon = true } },
      )
  private val random = SecureRandom()
  @Volatile private var socket: ServerSocket? = null
  @Volatile private var running = false

  val port: Int
    get() = socket?.localPort ?: error("Vote server is not running")

  fun start() {
    check(!running)
    socket =
        ServerSocket().apply {
          reuseAddress = true
          bind(InetSocketAddress(config.host, config.port))
        }
    running = true
    Thread(::acceptLoop, "OyasaiVotifier-listener").apply { isDaemon = true }.start()
  }

  private fun acceptLoop() {
    while (running) {
      try {
        val client = socket?.accept() ?: return
        try {
          workers.execute { client.use(::receive) }
        } catch (_: RejectedExecutionException) {
          client.close()
          logger.warning("Vote listener is busy; rejected ${client.remoteSocketAddress}")
        }
      } catch (error: Exception) {
        if (running) logger.warning("Vote listener accept failed: ${error.message}")
      }
    }
  }

  private fun receive(client: Socket) {
    try {
      client.soTimeout = config.timeoutSeconds * 1_000
      val input = DataInputStream(BufferedInputStream(client.getInputStream()))
      val challenge = challenge()
      client.getOutputStream().write("VOTIFIER 2 $challenge\n".toByteArray(StandardCharsets.UTF_8))
      client.getOutputStream().flush()
      val first = input.readUnsignedShort()
      if (first == V2_MAGIC) receiveV2(input, client.getOutputStream(), challenge)
      else if (config.v1Enabled) receiveV1(first, input)
      else throw IllegalArgumentException("This server only accepts Votifier v2 packets")
    } catch (error: VoteAuthenticationException) {
      logger.warning(
          "Rejected unauthenticated vote from ${client.remoteSocketAddress}: ${error.message}"
      )
    } catch (error: Exception) {
      logger.fine("Rejected vote from ${client.remoteSocketAddress}: ${error.message}")
    }
  }

  private fun receiveV1(first: Int, input: DataInputStream) {
    val encrypted = ByteArray(256)
    encrypted[0] = (first ushr 8).toByte()
    encrypted[1] = first.toByte()
    input.readFully(encrypted, 2, 254)
    val fields =
        try {
          String(decryptV1(encrypted), StandardCharsets.US_ASCII).split('\n')
        } catch (_: Exception) {
          throw VoteAuthenticationException("Votifier v1 decryption failed")
        }
    require(fields.size >= 5 && fields[0] == "VOTE") { "Invalid Votifier v1 vote" }
    require(fields[2].matches(MINECRAFT_USERNAME)) { "Invalid Minecraft username" }
    accepted(Vote(fields[1], fields[2], fields[3], fields[4]), VoteProtocol.V1)
  }

  private fun receiveV2(input: DataInputStream, output: OutputStream, challenge: String) {
    val length = input.readUnsignedShort()
    require(length in 2..MAX_V2_PACKET) { "Invalid Votifier v2 packet length" }
    val bytes = input.readNBytes(length)
    require(bytes.size == length) { "Incomplete Votifier v2 packet" }
    val outer = JsonParser.parseString(String(bytes, StandardCharsets.UTF_8)).asJsonObject
    val payload = outer.requiredString("payload")
    val voteJson = JsonParser.parseString(payload).asJsonObject
    authenticate(voteJson.requiredString("challenge") == challenge, "Challenge is not valid")
    val token =
        config.tokens[voteJson.requiredString("serviceName")]
            ?: config.tokens["default"]
            ?: throw VoteAuthenticationException("Unknown service")
    authenticate(
        validHmac(token, payload, outer.requiredString("signature")),
        "Signature is not valid",
    )
    val username = voteJson.requiredString("username")
    require(username.matches(MINECRAFT_USERNAME)) { "Invalid Minecraft username" }
    requireIp(voteJson.requiredString("address"))
    accepted(Vote(voteJson), VoteProtocol.V2)
    output.write("{\"status\":\"ok\"}\r\n".toByteArray(StandardCharsets.UTF_8))
    output.flush()
  }

  private fun decryptV1(encrypted: ByteArray): ByteArray =
      Cipher.getInstance("RSA/ECB/PKCS1Padding").run {
        init(Cipher.DECRYPT_MODE, keys.private)
        doFinal(encrypted)
      }

  private fun challenge(): String =
      ByteArray(32).also(random::nextBytes).let {
        Base64.getUrlEncoder().withoutPadding().encodeToString(it)
      }

  override fun close() {
    running = false
    runCatching { socket?.close() }
    workers.shutdownNow()
    workers.awaitTermination(5, TimeUnit.SECONDS)
  }

  private companion object {
    const val V2_MAGIC = 0x733A
    const val MAX_V2_PACKET = 65_535

    fun JsonObject.requiredString(name: String): String =
        get(name)?.asString ?: throw IllegalArgumentException("Missing $name")

    fun requireIp(address: String) {
      require(address.matches(Regex("[0-9A-Fa-f:.]+"))) { "Address is not an IP literal" }
      InetAddress.getByName(address)
    }

    fun authenticate(condition: Boolean, message: String) {
      if (!condition) throw VoteAuthenticationException(message)
    }
  }
}

private class VoteAuthenticationException(message: String) : IllegalArgumentException(message)

internal fun validHmac(token: String, payload: String, signature: String): Boolean =
    MessageDigest.isEqual(
        Mac.getInstance("HmacSHA256").run {
          init(SecretKeySpec(token.toByteArray(StandardCharsets.UTF_8), "HmacSHA256"))
          doFinal(payload.toByteArray(StandardCharsets.UTF_8))
        },
        Base64.getDecoder().decode(signature),
    )

internal object VoteKeys {
  fun loadOrCreate(
      directory: java.io.File,
      environment: (String) -> String? = System::getenv,
      onSource: (String) -> Unit = {},
  ): KeyPair {
    directory.mkdirs()
    val public = directory.resolve("public.key")
    val private = directory.resolve("private.key")
    val environmentPublic = environment("VOTIFIER_RSA_PUBLIC_KEY")
    val environmentPrivate = environment("VOTIFIER_RSA_PRIVATE_KEY")
    if (environmentPublic != null || environmentPrivate != null) {
      require(environmentPublic != null && environmentPrivate != null) {
        "Both VOTIFIER_RSA_PUBLIC_KEY and VOTIFIER_RSA_PRIVATE_KEY are required"
      }
      onSource("environment variables")
      return load(environmentPublic, environmentPrivate)
    }
    if (public.exists() || private.exists()) {
      require(public.exists() && private.exists()) {
        "Both rsa/public.key and rsa/private.key are required"
      }
      onSource("rsa key files")
      return load(public.readText().trim(), private.readText().trim())
    }
    onSource("generated and saved to rsa key files")
    return KeyPairGenerator.getInstance("RSA")
        .apply { initialize(2048) }
        .generateKeyPair()
        .also { pair ->
          public.writeText(Base64.getEncoder().encodeToString(pair.public.encoded))
          private.writeText(Base64.getEncoder().encodeToString(pair.private.encoded))
        }
  }

  private fun load(public: String, private: String): KeyPair {
    val factory = KeyFactory.getInstance("RSA")
    return KeyPair(
        factory.generatePublic(X509EncodedKeySpec(Base64.getDecoder().decode(public))),
        factory.generatePrivate(PKCS8EncodedKeySpec(Base64.getDecoder().decode(private))),
    )
  }
}
