package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.db.SongSort
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/** 題名・作者名による検索と、オンライン作者・フォロー中作者の一覧を提供する検索画面。 4つの入口を中央行へ配置し、検索結果は共通の一覧画面へ遷移する。 */
class SearchMenuScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("検索")) {

  private val titleSearchSlot = 21
  private val authorSearchSlot = 22
  private val onlineAuthorsSlot = 23
  private val followingAuthorsSlot = 24

  init {
    render()
  }

  override fun refresh() = render()

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        NavTab.SEARCH,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = null,
    )

    inventory.setItem(
        titleSearchSlot,
        GuiItemBuilder(Material.OAK_SIGN)
            .name(Component.text("題名検索", NamedTextColor.YELLOW))
            .build(),
    )
    inventory.setItem(
        authorSearchSlot,
        GuiItemBuilder(Material.LECTERN)
            .name(Component.text("作者検索", NamedTextColor.YELLOW))
            .build(),
    )
    inventory.setItem(
        onlineAuthorsSlot,
        GuiItemBuilder(Material.PLAYER_HEAD)
            .name(Component.text("オンライン作者一覧", NamedTextColor.YELLOW))
            .build(),
    )
    inventory.setItem(
        followingAuthorsSlot,
        GuiItemBuilder(Material.TOTEM_OF_UNDYING)
            .name(Component.text("フォロー中作者一覧", NamedTextColor.YELLOW))
            .build(),
    )

    ContentGrid.fillBorderIfEmpty(inventory, Material.RED_STAINED_GLASS_PANE)
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    if (NavTabRouter.handle(slot, NavTab.SEARCH, null, plugin, menuManager, viewer)) return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return
    when (slot) {
      titleSearchSlot -> openTitleSearch()
      authorSearchSlot -> openAuthorSearch()
      onlineAuthorsSlot -> openOnlineAuthors()
      followingAuthorsSlot -> openFollowingAuthors()
    }
  }

  private fun openTitleSearch() {
    AnvilTextInputSession.open(plugin = plugin, player = viewer, title = Component.text("題名で検索")) {
        text ->
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                menuManager.open(
                    viewer,
                    SongListMenu(
                        plugin,
                        menuManager,
                        viewer,
                        title = "題名検索: $text",
                        availableSorts = listOf(SongSort.CREATED_AT_DESC, SongSort.TITLE_ASC),
                        initialSort = SongSort.CREATED_AT_DESC,
                    ) { sort, limit, offset ->
                      MainMenuScreens.mergeOwnDrafts(
                          plugin,
                          viewer,
                          offset,
                          limit,
                          titleFilter = text,
                      ) { o, l ->
                        plugin.songRepository.searchPublished(
                            titleLike = text,
                            sort = sort,
                            limit = l,
                            offset = o,
                        )
                      }
                    },
                    false,
                )
              },
          )
    }
  }

  private fun openAuthorSearch() {
    AnvilTextInputSession.open(
        plugin = plugin,
        player = viewer,
        title = Component.text("作者名で検索"),
    ) { text ->
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                val matches =
                    Bukkit.getOfflinePlayers()
                        .filter { it.name?.startsWith(text, ignoreCase = true) == true }
                        .take(32)
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          if (matches.size == 1) {
                            val author = matches[0]
                            menuManager.open(
                                viewer,
                                MainMenuScreens.authorWorks(
                                    plugin,
                                    menuManager,
                                    viewer,
                                    author.uniqueId,
                                    author.name ?: "不明",
                                ),
                                false,
                            )
                          } else if (matches.isEmpty()) {
                            viewer.sendMessage("§7該当する作者が見つかりませんでした。")
                          } else {
                            menuManager.open(
                                viewer,
                                PlayerHeadListMenu(
                                    plugin,
                                    menuManager,
                                    viewer,
                                    title = "作者検索結果",
                                    uuids = matches.map { it.uniqueId },
                                ) { authorUuid, authorName ->
                                  MainMenuScreens.authorWorks(
                                      plugin,
                                      menuManager,
                                      viewer,
                                      authorUuid,
                                      authorName,
                                  )
                                },
                                false,
                            )
                          }
                        },
                    )
              },
          )
    }
  }

  private fun openOnlineAuthors() {
    val uuids = Bukkit.getOnlinePlayers().map { it.uniqueId }
    menuManager.open(
        viewer,
        PlayerHeadListMenu(plugin, menuManager, viewer, title = "オンライン作者一覧", uuids = uuids) {
            authorUuid,
            authorName ->
          MainMenuScreens.authorWorks(plugin, menuManager, viewer, authorUuid, authorName)
        },
    )
  }

  private fun openFollowingAuthors() {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val uuids = plugin.socialRepository.listFollowingUuids(viewer.uniqueId)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        menuManager.open(
                            viewer,
                            PlayerHeadListMenu(
                                plugin,
                                menuManager,
                                viewer,
                                title = "フォロー中作者一覧",
                                uuids = uuids,
                            ) { authorUuid, authorName ->
                              MainMenuScreens.authorWorks(
                                  plugin,
                                  menuManager,
                                  viewer,
                                  authorUuid,
                                  authorName,
                              )
                            },
                        )
                      },
                  )
            },
        )
  }
}
