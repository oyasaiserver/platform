package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.GuidebookListener
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.gui.GuidebookBookUI
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

internal sealed interface GuidebookAction {
  data object Catalog : GuidebookAction

  data class Read(val guidebookId: Int) : GuidebookAction

  data class Create(val type: GuidebookType) : GuidebookAction

  data object EditCatalog : GuidebookAction

  data class Edit(val guidebookId: Int) : GuidebookAction

  data class Editor(val guidebookId: Int) : GuidebookAction

  data class Move(val guidebookId: Int, val buildId: Int, val offset: Int) : GuidebookAction

  data class Remove(val guidebookId: Int, val buildId: Int) : GuidebookAction

  data class Add(val guidebookId: Int) : GuidebookAction

  data class Toggle(val guidebookId: Int) : GuidebookAction

  data class Describe(val guidebookId: Int) : GuidebookAction

  data class Title(val guidebookId: Int) : GuidebookAction

  data class Comment(val guidebookId: Int, val buildId: Int) : GuidebookAction

  data class Go(val guidebookId: Int, val buildId: Int) : GuidebookAction

  data class DeleteRequest(val guidebookId: Int) : GuidebookAction

  data class DeleteConfirm(val guidebookId: Int) : GuidebookAction

  data object SlotRequest : GuidebookAction

  data object SlotConfirm : GuidebookAction
}

internal object GuidebookCommandRules {
  fun parse(args: List<String>): GuidebookAction? {
    if (args.isEmpty()) return GuidebookAction.Catalog
    if (args.size == 1)
        args[0].toIntOrNull()?.let {
          return GuidebookAction.Read(it)
        }
    return when (args.first()) {
      "create" ->
          when (args) {
            listOf("create") -> GuidebookAction.Create(GuidebookType.PERSONAL)
            listOf("create", "official") -> GuidebookAction.Create(GuidebookType.OFFICIAL)
            else -> null
          }
      "edit" ->
          if (args.size == 1) GuidebookAction.EditCatalog
          else args.singleId()?.let(GuidebookAction::Edit)
      "editor" -> args.singleId()?.let(GuidebookAction::Editor)
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
      "describe" -> args.singleId()?.let(GuidebookAction::Describe)
      "title" -> args.singleId()?.let(GuidebookAction::Title)
      "comment" ->
          args.twoIds()?.let { (guidebookId, buildId) ->
            GuidebookAction.Comment(guidebookId, buildId)
          }
      "go" ->
          args.twoIds()?.let { (guidebookId, buildId) -> GuidebookAction.Go(guidebookId, buildId) }
      "delete-request" -> args.singleId()?.let(GuidebookAction::DeleteRequest)
      "delete-confirm" -> args.singleId()?.let(GuidebookAction::DeleteConfirm)
      "slot-request" -> if (args.size == 1) GuidebookAction.SlotRequest else null
      "slot-confirm" -> if (args.size == 1) GuidebookAction.SlotConfirm else null
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

object SLGuide : CommandExecutor, TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> =
      when (args.size) {
        1 -> completions(args[0], listOf("create", "edit"), "<ID>")
        2 ->
            when (args[0]) {
              "create" ->
                  if (sender.isOp) completions(args[1], listOf("official")) else mutableListOf()
              "edit" -> completions(args[1], emptyList(), "<ID>")
              else -> mutableListOf()
            }
        else -> mutableListOf()
      }

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
      is GuidebookAction.Read -> GuidebookBookUI.giveTourist(sender, action.guidebookId)
      is GuidebookAction.Create -> GuidebookBookUI.openTitleInput(sender, action.type)
      GuidebookAction.EditCatalog -> GuidebookBookUI.openEditable(sender)
      is GuidebookAction.Edit -> GuidebookBookUI.giveEditor(sender, action.guidebookId)
      is GuidebookAction.Editor -> GuidebookBookUI.openEditor(sender, action.guidebookId)
      is GuidebookAction.Move ->
          GuidebookBookUI.moveBuild(sender, action.guidebookId, action.buildId, action.offset)
      is GuidebookAction.Remove ->
          GuidebookBookUI.removeBuild(sender, action.guidebookId, action.buildId)
      is GuidebookAction.Add -> GuidebookBookUI.startAddMode(sender, action.guidebookId)
      is GuidebookAction.Toggle -> GuidebookBookUI.togglePublished(sender, action.guidebookId)
      is GuidebookAction.Describe ->
          GuidebookBookUI.startDescriptionEdit(sender, action.guidebookId)
      is GuidebookAction.Title -> GuidebookBookUI.openRenameInput(sender, action.guidebookId)
      is GuidebookAction.Comment ->
          GuidebookBookUI.editComment(sender, action.guidebookId, action.buildId)
      is GuidebookAction.Go ->
          GuidebookListener.teleport(sender, action.guidebookId, action.buildId)
      is GuidebookAction.DeleteRequest -> GuidebookBookUI.requestDelete(sender, action.guidebookId)
      is GuidebookAction.DeleteConfirm -> GuidebookBookUI.confirmDelete(sender, action.guidebookId)
      GuidebookAction.SlotRequest -> GuidebookBookUI.requestSlot(sender)
      GuidebookAction.SlotConfirm -> GuidebookBookUI.confirmSlot(sender)
      null -> sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /slguide".color())
    }
    return true
  }
}
