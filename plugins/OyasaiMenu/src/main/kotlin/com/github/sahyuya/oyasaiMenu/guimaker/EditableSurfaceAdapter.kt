package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu

data class EditCapabilities(
    val freeSlotEditing: Boolean = true,
    val reservedSlots: Set<Int> = emptySet(),
    val structuredSettings: Boolean = false,
    val templateLibrary: Boolean = false,
)

interface EditableSurfaceAdapter {
  val type: GuiEditableSurface
  val label: String
  val capabilities: EditCapabilities

  fun listIds(plugin: OyasaiMenu): List<String>

  fun newSession(plugin: OyasaiMenu, id: String): GuiEditorSession

  fun load(plugin: OyasaiMenu, id: String): GuiEditorSession?

  fun save(plugin: OyasaiMenu, session: GuiEditorSession): Result<String>

  fun hasDraft(plugin: OyasaiMenu, id: String): Boolean
}

object NormalMenuAdapter : EditableSurfaceAdapter {
  override val type = GuiEditableSurface.NORMAL
  override val label = "通常GUI"
  override val capabilities = EditCapabilities()

  override fun listIds(plugin: OyasaiMenu): List<String> = GuiMakerExporter.listMenuIds(plugin)

  override fun newSession(plugin: OyasaiMenu, id: String): GuiEditorSession = GuiEditorSession(id)

  override fun load(plugin: OyasaiMenu, id: String): GuiEditorSession? {
    val session = GuiEditorSession(id)
    return if (GuiMakerExporter.loadIntoSession(plugin, session)) session else null
  }

  override fun save(plugin: OyasaiMenu, session: GuiEditorSession): Result<String> =
      GuiMakerExporter.commit(plugin, session)

  override fun hasDraft(plugin: OyasaiMenu, id: String): Boolean =
      GuiMakerExporter.hasDraft(plugin, id)
}

object PopupMenuAdapter : EditableSurfaceAdapter {
  override val type = GuiEditableSurface.POPUP
  override val label = "Popupメニュー"
  override val capabilities =
      EditCapabilities(
          freeSlotEditing = true,
          reservedSlots = (45..53).toSet(),
          structuredSettings = true,
      )

  override fun listIds(plugin: OyasaiMenu): List<String> = GuiMakerExporter.listPopupIds(plugin)

  override fun newSession(plugin: OyasaiMenu, id: String): GuiEditorSession =
      GuiMakerExporter.newPopupSession(id)

  override fun load(plugin: OyasaiMenu, id: String): GuiEditorSession? {
    val session = GuiMakerExporter.newPopupSession(id)
    return if (GuiMakerExporter.loadPopupIntoSession(plugin, session)) session else null
  }

  override fun save(plugin: OyasaiMenu, session: GuiEditorSession): Result<String> =
      GuiMakerExporter.commit(plugin, session)

  override fun hasDraft(plugin: OyasaiMenu, id: String): Boolean =
      GuiMakerExporter.hasPopupDraft(plugin, id)
}
