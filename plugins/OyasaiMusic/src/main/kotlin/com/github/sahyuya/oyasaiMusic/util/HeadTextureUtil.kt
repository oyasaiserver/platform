package com.github.sahyuya.oyasaiMusic.util

import com.google.gson.JsonParser
import com.destroystokyo.paper.profile.PlayerProfile
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.plugin.java.JavaPlugin
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentLinkedQueue
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.atomic.AtomicInteger

/**
 * プレイヤーヘッドのテクスチャを解決する。
 *
 * まずPaperのローカルプロフィールキャッシュを利用する。未キャッシュのJava版プレイヤーだけは
 * PlayerDBのUUID APIからスキンURLを取得し、MojangのプロフィールAPIは呼び出さない。
 * 統合版（設定済み接頭辞の名前）は外部照会せず、スティーブ頭を表示する。
 */
object HeadTextureUtil {

    private const val PLAYER_DB_ENDPOINT = "https://playerdb.co/api/player/minecraft/"
    private const val MAX_CONCURRENT_REQUESTS = 2
    private const val FAILED_CACHE_MILLIS = 10 * 60 * 1000L

    private data class SkinRequest(val plugin: JavaPlugin, val uuid: UUID, val name: String?)

    private val httpClient: HttpClient = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(5))
        .build()
    private val resolvedProfiles = ConcurrentHashMap<UUID, PlayerProfile>()
    private val failedUntil = ConcurrentHashMap<UUID, Long>()
    private val inFlight = ConcurrentHashMap<UUID, CopyOnWriteArrayList<(ItemStack) -> Unit>>()
    private val requestQueue = ConcurrentLinkedQueue<SkinRequest>()
    private val activeRequests = AtomicInteger()

    /** ローカルまたはこのセッション中のキャッシュを使い、利用できなければスティーブ頭を返す。 */
    fun placeholderHead(uuid: UUID, name: String?): ItemStack = headItem(cachedProfile(uuid) ?: Bukkit.createProfile(uuid, name))

    /**
     * すぐにキャッシュ済みヘッド（未取得時はスティーブ頭）を返し、Java版の未キャッシュ分だけを
     * PlayerDBから非同期で補完する。同一UUIDの同時要求は1回のHTTP通信に集約する。
     *
     * @param onReady メインスレッドで呼ばれる。未取得時はすぐ一度、外部取得に成功した時だけ再度呼ばれる。
     */
    fun resolveAsync(plugin: JavaPlugin, uuid: UUID, name: String?, onReady: (ItemStack) -> Unit) {
        val cached = cachedProfile(uuid)
        if (cached != null) {
            onReady(headItem(cached))
            return
        }

        onReady(headItem(Bukkit.createProfile(uuid, name)))
        val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
        if (prefix.isNotEmpty() && name?.startsWith(prefix) == true) return

        val now = System.currentTimeMillis()
        if ((failedUntil[uuid] ?: 0L) > now) return
        failedUntil.remove(uuid)

        val callbacks = CopyOnWriteArrayList<(ItemStack) -> Unit>()
        callbacks += onReady
        val existing = inFlight.putIfAbsent(uuid, callbacks)
        if (existing != null) {
            existing += onReady
            return
        }

        requestQueue += SkinRequest(plugin, uuid, name)
        startQueuedRequests()
    }

    private fun cachedProfile(uuid: UUID): PlayerProfile? {
        resolvedProfiles[uuid]?.let { return it }
        // OfflinePlayer#getPlayerProfile はサーバーに保存済みの値を返すだけで、update()のような外部照会はしない。
        val local: PlayerProfile = Bukkit.getOfflinePlayer(uuid).playerProfile
        if (local.textures.skin == null) return null
        return resolvedProfiles.putIfAbsent(uuid, local) ?: local
    }

    private fun startQueuedRequests() {
        while (reserveRequestSlot()) {
            val request = requestQueue.poll()
            if (request == null) {
                activeRequests.decrementAndGet()
                return
            }
            Bukkit.getScheduler().runTaskAsynchronously(request.plugin, Runnable {
                try {
                    val profile = fetchPlayerDbProfile(request)
                    if (profile == null) {
                        failedUntil[request.uuid] = System.currentTimeMillis() + FAILED_CACHE_MILLIS
                        inFlight.remove(request.uuid)
                    } else {
                        resolvedProfiles[request.uuid] = profile
                        val callbacks = inFlight.remove(request.uuid).orEmpty()
                        Bukkit.getScheduler().runTask(request.plugin, Runnable {
                            val item = headItem(profile)
                            callbacks.forEach { it(item.clone()) }
                        })
                    }
                } finally {
                    activeRequests.decrementAndGet()
                    startQueuedRequests()
                }
            })
        }
    }

    private fun reserveRequestSlot(): Boolean {
        while (true) {
            val current = activeRequests.get()
            if (current >= MAX_CONCURRENT_REQUESTS) return false
            if (activeRequests.compareAndSet(current, current + 1)) return true
        }
    }

    private fun fetchPlayerDbProfile(request: SkinRequest): PlayerProfile? = runCatching {
        val httpRequest = HttpRequest.newBuilder(URI.create("$PLAYER_DB_ENDPOINT${request.uuid}"))
            .timeout(Duration.ofSeconds(8))
            .header("User-Agent", "OyasaiMusic")
            .GET()
            .build()
        val response = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString())
        if (response.statusCode() != 200) return@runCatching null

        val player = JsonParser.parseString(response.body())
            .asJsonObject
            .getAsJsonObject("data")
            ?.getAsJsonObject("player")
            ?: return@runCatching null
        val skinUrl = player.get("skin_texture")?.asString ?: return@runCatching null
        val uri = URI.create(skinUrl)
        if (uri.scheme != "https" || uri.host != "textures.minecraft.net") return@runCatching null

        val profileName = player.get("username")?.asString ?: request.name
        Bukkit.createProfile(request.uuid, profileName).also { profile ->
            val textures = profile.textures
            textures.setSkin(uri.toURL())
            profile.setTextures(textures)
        }
    }.getOrNull()

    private fun headItem(profile: PlayerProfile): ItemStack = ItemStack(Material.PLAYER_HEAD).also { item ->
        item.editMeta { meta -> (meta as SkullMeta).playerProfile = profile }
    }
}
