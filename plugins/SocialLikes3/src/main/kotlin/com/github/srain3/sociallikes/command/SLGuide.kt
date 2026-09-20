package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.gui.GuidebookBookUI
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

internal sealed interface GuidebookAction {
  data object Catalog : GuidebookAction

  data class Info(val guidebookId: Int) : GuidebookAction

  data class Get(val guidebookId: Int) : GuidebookAction

  data class Create(val type: GuidebookType) : GuidebookAction

  data object Editable : GuidebookAction

  data class Edit(val guidebookId: Int) : GuidebookAction

  data class Key(val guidebookId: Int) : GuidebookAction

  data class Move(val guidebookId: Int, val buildId: Int, val offset: Int) : GuidebookAction

  data class Remove(val guidebookId: Int, val buildId: Int) : GuidebookAction

  data class Add(val guidebookId: Int) : GuidebookAction

  data class Toggle(val guidebookId: Int) : GuidebookAction

  data class DeleteRequest(val guidebookId: Int) : GuidebookAction

  data class DeleteConfirm(val guidebookId: Int) : GuidebookAction
}

internal object GuidebookCommandRules {
  fun parse(args: List<String>): GuidebookAction? {
    if (args.isEmpty() || args == listOf("catalog")) return GuidebookAction.Catalog
    return when (args.first()) {
      "info" -> args.singleId()?.let(GuidebookAction::Info)
      "get" -> args.singleId()?.let(GuidebookAction::Get)
      "create" ->
          args
              .takeIf { it.size == 2 }
              ?.get(1)
              ?.let {
                when (it) {
                  "personal" -> GuidebookType.PERSONAL
                  "official" -> GuidebookType.OFFICIAL
                  else -> null
                }
              }
              ?.let(GuidebookAction::Create)
      "editable" -> GuidebookAction.Editable.takeIf { args.size == 1 }
      "edit" -> args.singleId()?.let(GuidebookAction::Edit)
      "key" -> args.singleId()?.let(GuidebookAction::Key)
      "move" ->
          args
              .takeIf { it.size == 4 }
              ?.let { values ->
                val guidebookId = values[1].toIntOrNull() ?: return@let null
                val buildId = values[2].toIntOrNull() ?: return@let null
                val offset =
                    values[3].toIntOrNull()?.takeIf { it == -1 || it == 1 } ?: return@let null
                GuidebookAction.Move(guidebookId, buildId, offset)
              }
      "remove" ->
          args.twoIds()?.let { (guidebookId, buildId) ->
            GuidebookAction.Remove(guidebookId, buildId)
          }
      "add" -> args.singleId()?.let(GuidebookAction::Add)
      "toggle" -> args.singleId()?.let(GuidebookAction::Toggle)
      "delete-request" -> args.singleId()?.let(GuidebookAction::DeleteRequest)
      "delete-confirm" -> args.singleId()?.let(GuidebookAction::DeleteConfirm)
      else -> null
    }
  }

  private fun List<String>.singleId(): Int? = takeIf { size == 2 }?.get(1)?.toIntOrNull()

  private fun List<String>.twoIds(): Pair<Int, Int>? =
      takeIf { size == 3 }
          ?.let { values ->
            Pair(
                values[1].toIntOrNull() ?: return@let null,
                values[2].toIntOrNull() ?: return@let null,
            )
          }
}

object SLGuide : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slguide" || sender !is Player) return false
    if (!Data.loading) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }
    when (val action = GuidebookCommandRules.parse(args.toList())) {
      GuidebookAction.Catalog -> GuidebookBookUI.openCatalog(sender)
      is GuidebookAction.Info -> GuidebookBookUI.openInfo(sender, action.guidebookId)
      is GuidebookAction.Get -> GuidebookBookUI.giveTourist(sender, action.guidebookId)
      is GuidebookAction.Create -> GuidebookBookUI.openTitleInput(sender, action.type)
      GuidebookAction.Editable -> GuidebookBookUI.openEditable(sender)
      is GuidebookAction.Edit -> GuidebookBookUI.openEditor(sender, action.guidebookId)
      is GuidebookAction.Key -> GuidebookBookUI.giveEditor(sender, action.guidebookId)
      is GuidebookAction.Move ->
          GuidebookBookUI.moveBuild(sender, action.guidebookId, action.buildId, action.offset)
      is GuidebookAction.Remove ->
          GuidebookBookUI.removeBuild(sender, action.guidebookId, action.buildId)
      is GuidebookAction.Add -> GuidebookBookUI.startAddMode(sender, action.guidebookId)
      is GuidebookAction.Toggle -> GuidebookBookUI.togglePublished(sender, action.guidebookId)
      is GuidebookAction.DeleteRequest -> GuidebookBookUI.requestDelete(sender, action.guidebookId)
      is GuidebookAction.DeleteConfirm -> GuidebookBookUI.confirmDelete(sender, action.guidebookId)
      null -> sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /slguide".color())
    }
    return true
  }
}
