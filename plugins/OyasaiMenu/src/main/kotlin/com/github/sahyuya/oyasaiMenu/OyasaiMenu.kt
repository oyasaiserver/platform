package com.github.sahyuya.oyasaiMenu

import com.github.sahyuya.oyasaiMenu.command.*
import com.github.sahyuya.oyasaiMenu.engine.*
import com.github.sahyuya.oyasaiMenu.loader.*
import com.github.sahyuya.oyasaiMenu.manager.*
import io.papermc.paper.plugin.lifecycle.event.types.LifecycleEvents
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerLoginEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.java.JavaPlugin

@Suppress("UnstableApiUsage")
class OyasaiMenu : JavaPlugin(), Listener {

    lateinit var menuLoader:       MenuLoader
    lateinit var shopLoader:       ShopLoader
    lateinit var pointShopLoader:  PointShopLoader
    lateinit var popupMenuLoader:  PopupMenuLoader

    lateinit var macroManager:          MacroManager
    lateinit var announcementManager:   AnnouncementManager
    lateinit var sellWhitelistManager:  SellWhitelistManager
    lateinit var sharedMacroManager:    SharedMacroManager

    lateinit var menuEngine:       MenuEngine
    lateinit var actionEngine:     ActionEngine
    lateinit var popupMenuEngine:  PopupMenuEngine
    lateinit var shopEngine:       ShopEngine
    lateinit var sellEngine:       SellEngine
    lateinit var pointShopEngine:  PointShopEngine
    lateinit var macroEngine:      MacroEngine
    lateinit var adminEngine:      AdminEngine

    override fun onEnable() {
        saveDefaultConfig()

        menuLoader       = MenuLoader(this)
        shopLoader       = ShopLoader(this)
        pointShopLoader  = PointShopLoader(this)
        popupMenuLoader  = PopupMenuLoader(this)

        macroManager         = MacroManager(this)
        announcementManager  = AnnouncementManager(this)
        sellWhitelistManager = SellWhitelistManager(this)
        sharedMacroManager   = SharedMacroManager(this)

        menuEngine       = MenuEngine(this)
        actionEngine     = ActionEngine(this)
        popupMenuEngine  = PopupMenuEngine(this)
        shopEngine       = ShopEngine(this)
        sellEngine       = SellEngine(this)
        pointShopEngine  = PointShopEngine(this)
        macroEngine      = MacroEngine(this)
        adminEngine      = AdminEngine(this)

        menuLoader.loadAll()
        shopLoader.loadAll()
        pointShopLoader.loadAll()
        popupMenuLoader.loadAll()
        announcementManager.loadAll()
        sellWhitelistManager.loadAll()
        EconomyManager.init(this)
        TokenCurrencyManager.init(this)
        CooldownManager.init(this)

        lifecycleManager.registerEventHandler(LifecycleEvents.COMMANDS) { event ->
            val reg = event.registrar()
            reg.register("menu",       "メニューを開く",                listOf("mn"),       MenuCommand(this))
            reg.register("menuedit",   "メニューを管理する",             emptyList(),       MenuAdminCommand(this))
            reg.register("shop",       "ショップを開く",                 listOf("sh"),      ShopCommand(this))
            reg.register("sell",       "アイテムを売却する",             emptyList(),       SellCommand(this))
            reg.register("pointshop",      "ポイントショップを開く",          listOf("ps"),      PointShopCommand(this))
            reg.register("macro",      "コマンドマクロを管理・実行する",  listOf("mc"),       MacroCommand(this))
            reg.register("adminmenu",  "管理者メニューを開く",            listOf("admenu"),  AdminMenuCommand(this))
            reg.register("oyasaimenu", "OyasaiMenu 管理コマンド",         emptyList(),      OyasaiMenuCommand(this))
        }

        listOf(
            menuEngine, popupMenuEngine,
            shopEngine, sellEngine, pointShopEngine,
            macroEngine, adminEngine,
            announcementManager,
            this
        ).forEach { server.pluginManager.registerEvents(it as org.bukkit.event.Listener, this) }

        logger.info(
            "OyasaiMenu 起動完了 | メニュー:${menuLoader.getMenuCount()} " +
            "ショップ:${shopLoader.getAllCategories().size} " +
            "Pショップ:${pointShopLoader.getAllCategories().size} " +
            "Popup:loaded"
        )
    }

    override fun onDisable() {
        macroManager.saveAll()
        logger.info("OyasaiMenu を無効化しました。")
    }

    @EventHandler
    fun onPlayerLogin(event: PlayerLoginEvent) {
        val player = event.player
        macroManager.loadPlayer(player.uniqueId)
        // OPプレイヤーにはテンプレートマクロを配布する
        if (player.isOp) {
            server.scheduler.runTaskLater(this, Runnable {
                macroManager.distributeOpTemplates(player)
            }, 1L)
        }
    }

    @EventHandler
    fun onPlayerQuit(event: PlayerQuitEvent) {
        macroManager.unloadPlayer(event.player.uniqueId)
        CooldownManager.remove(event.player.uniqueId)
    }

    fun reload() {
        reloadConfig()
        menuEngine.clearCache()
        server.onlinePlayers.forEach { p ->
            macroManager.savePlayer(p.uniqueId)
            macroManager.loadPlayer(p.uniqueId)
        }
        menuLoader.loadAll()
        shopLoader.reload()
        pointShopLoader.reload()
        popupMenuLoader.reload()
        announcementManager.reload()
        sellWhitelistManager.reload()
        EconomyManager.init(this)
        TokenCurrencyManager.init(this)
        CooldownManager.reload(this)
        logger.info("OyasaiMenu をリロードしました。")
    }
}