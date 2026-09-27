package com.github.sahyuya.oyasaiMenu

import com.github.sahyuya.oyasaiMenu.command.*
import com.github.sahyuya.oyasaiMenu.engine.*
import com.github.sahyuya.oyasaiMenu.loader.*
import com.github.sahyuya.oyasaiMenu.manager.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.java.JavaPlugin

class OyasaiMenu : JavaPlugin(), Listener {

  lateinit var menuLoader: MenuLoader
  lateinit var shopLoader: ShopLoader
  lateinit var pointShopLoader: PointShopLoader
  lateinit var popupMenuLoader: PopupMenuLoader

  lateinit var announcementManager: AnnouncementManager
  lateinit var sellWhitelistManager: SellWhitelistManager

  lateinit var menuEngine: MenuEngine
  lateinit var actionEngine: ActionEngine
  lateinit var popupMenuEngine: PopupMenuEngine
  lateinit var shopEngine: ShopEngine
  lateinit var sellEngine: SellEngine
  lateinit var pointShopEngine: PointShopEngine
  lateinit var adminEngine: AdminEngine

  override fun onEnable() {
    saveDefaultConfig()

    menuLoader = MenuLoader(this)
    shopLoader = ShopLoader(this)
    pointShopLoader = PointShopLoader(this)
    popupMenuLoader = PopupMenuLoader(this)

    announcementManager = AnnouncementManager(this)
    sellWhitelistManager = SellWhitelistManager(this)

    menuEngine = MenuEngine(this)
    actionEngine = ActionEngine(this)
    popupMenuEngine = PopupMenuEngine(this)
    shopEngine = ShopEngine(this)
    sellEngine = SellEngine(this)
    pointShopEngine = PointShopEngine(this)
    adminEngine = AdminEngine(this)

    menuLoader.loadAll()
    shopLoader.loadAll()
    pointShopLoader.loadAll()
    popupMenuLoader.loadAll()
    announcementManager.loadAll()
    sellWhitelistManager.loadAll()
    EconomyManager.init(this)
    TokenCurrencyManager.init(this)
    CooldownManager.init(this)

    // 公開コマンド
    getCommand("menu")?.setExecutor(MenuCommand(this))
    getCommand("menu")?.tabCompleter = MenuCommand(this)
    getCommand("shop")?.setExecutor(ShopCommand(this))
    getCommand("shop")?.tabCompleter = ShopCommand(this)
    getCommand("pointshop")?.setExecutor(PointShopCommand(this))
    getCommand("pointshop")?.tabCompleter = PointShopCommand(this)
    getCommand("sell")?.setExecutor(SellCommand(this))
    getCommand("sell")?.tabCompleter = SellCommand(this)
    // OP用コマンド
    getCommand("adminmenu")?.setExecutor(AdminMenuCommand(this))
    getCommand("adminmenu")?.tabCompleter = AdminMenuCommand(this)
    getCommand("menuedit")?.setExecutor(MenuEditCommand(this))
    getCommand("menuedit")?.tabCompleter = MenuEditCommand(this)
    getCommand("oyasaimenu")?.setExecutor(OyasaiMenuCommand(this))
    getCommand("oyasaimenu")?.tabCompleter = OyasaiMenuCommand(this)

    listOf(
            menuEngine,
            popupMenuEngine,
            shopEngine,
            sellEngine,
            pointShopEngine,
            adminEngine,
            this,
        )
        .forEach { server.pluginManager.registerEvents(it, this) }

    logger.info(
        "OyasaiMenu 起動完了 | メニュー:${menuLoader.getMenuCount()} " +
            "ショップ:${shopLoader.getAllCategories().size} " +
            "Pショップ:${pointShopLoader.getAllCategories().size} " +
            "Popup:loaded"
    )
  }

  override fun onDisable() {
    logger.info("OyasaiMenu を無効化しました。")
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    CooldownManager.remove(event.player.uniqueId)
  }

  fun reload() {
    reloadConfig()
    menuEngine.clearCache()
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
