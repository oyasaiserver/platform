package me.marzipan.OyasaiPets.services

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.PetDataManager
import me.marzipan.OyasaiPets.PetStatus
import me.marzipan.OyasaiPets.systems.EconomySystem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Sound
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player

/**
 * ペット情報のクエリ・表示を担当するサービス
 * - 死亡ペット一覧
 * - ペット履歴（ページネーション付き）
 * - ペット位置確認
 * - スポーンエッグ再取得
 */
class PetQueryService(
    private val economySystem: EconomySystem,
    private val storageService: PetStorageService
) {

    /**
     * 死亡したペット一覧を表示
     */
    fun handleDeadPetsList(player: Player) {
        val deadPets = PetDataManager.getDeadPets(player.uniqueId)

        if (deadPets.isEmpty()) {
            player.sendMessage(Component.text("死亡したペットはいません。", GRAY))
            return
        }

        player.sendMessage(Component.text("=== 死亡したペット一覧 ===", GOLD))
        player.sendMessage(Component.text("復活コスト: ${BigWolfConfig.reviveCost}pt", YELLOW))

        for (pet in deadPets.sortedBy { it.petNumber }) {
            val variantStr = pet.variant?.let { " ($it)" } ?: ""
            val plainName = pet.customName?.let {
                val component = LegacyComponentSerializer.legacyAmpersand().deserialize(it)
                PlainTextComponentSerializer.plainText().serialize(component)
            }
            val nameStr = plainName?.let { " 「$it」" } ?: ""
            val deathTime = pet.deathData?.deathTime?.take(10) ?: "不明"
            val typeName = runCatching {
                org.bukkit.entity.EntityType.valueOf(pet.type)
            }.getOrNull()?.let {
                me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(it)
            } ?: pet.type
            player.sendMessage(
                Component.text("#${pet.petNumber} ${typeName}$variantStr$nameStr - $deathTime 死亡", RED)
            )
        }

        player.sendMessage(Component.text("/bigwolf revive <番号> で復活", GRAY))
    }

    /**
     * ペット履歴をページネーション付きで表示
     */
    fun handlePetHistory(player: Player, args: Array<out String>) {
        // ページ番号を取得（デフォルト: 1）
        var page = 1
        var targetUuid = player.uniqueId

        // 引数の解析: /bigwolf history [ページ] または /bigwolf history [プレイヤー名] [ページ]
        if (args.size >= 2) {
            val arg1 = args[1]
            val pageNumber = arg1.toIntOrNull()

            if (pageNumber != null) {
                // 第1引数が数字 → ページ番号
                page = pageNumber
            } else if (player.isOp) {
                // 第1引数が数字でない かつ OPの場合 → プレイヤー名
                targetUuid = Bukkit.getPlayer(arg1)?.uniqueId ?: Bukkit.getOfflinePlayer(arg1).uniqueId

                if (args.size >= 3) {
                    page = args[2].toIntOrNull() ?: 1
                }
            } else {
                // 一般プレイヤーが数字でない引数を指定
                player.sendMessage(Component.text("使い方: /bigwolf history [ページ番号]", RED))
                return
            }
        }

        if (page < 1) page = 1

        val pets = PetDataManager.getAllPets(targetUuid).sortedBy { it.petNumber }

        if (pets.isEmpty()) {
            player.sendMessage(Component.text("ペットの履歴がありません。", GRAY))
            return
        }

        val targetName = Bukkit.getOfflinePlayer(targetUuid).name ?: "Unknown"

        // ページネーション設定
        val petsPerPage = 10
        val totalPages = (pets.size + petsPerPage - 1) / petsPerPage

        if (page > totalPages) {
            page = totalPages
        }

        val startIndex = (page - 1) * petsPerPage
        val endIndex = minOf(startIndex + petsPerPage, pets.size)
        val petsOnPage = pets.subList(startIndex, endIndex)

        // ヘッダー
        player.sendMessage(Component.text("=== ${targetName} のペット履歴 (ページ $page/$totalPages) ===", GOLD))

        // ペットリスト表示
        for (pet in petsOnPage) {
            val variantStr = pet.variant?.let { " ($it)" } ?: ""
            val nameStr = pet.customName?.let { " 「$it」" } ?: ""
            val statusColor = when (pet.status) {
                PetStatus.ALIVE -> GREEN
                PetStatus.DEAD -> RED
                PetStatus.STORED -> YELLOW
            }
            val statusStr = when (pet.status) {
                PetStatus.ALIVE -> "生存"
                PetStatus.DEAD -> "死亡"
                PetStatus.STORED -> "収納中"
            }
            val typeName = runCatching {
                org.bukkit.entity.EntityType.valueOf(pet.type)
            }.getOrNull()?.let {
                me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(it)
            } ?: pet.type
            player.sendMessage(
                Component.text("#${pet.petNumber} ${typeName}$variantStr$nameStr ", WHITE)
                    .append(Component.text("[$statusStr]", statusColor))
            )
        }

        // フッター（ページナビゲーション）
        if (totalPages > 1) {
            val navComponents = mutableListOf<Component>()

            if (page > 1) {
                val prevCommand = if (player.isOp && targetUuid != player.uniqueId) {
                    "/bigwolf history $targetName ${page - 1}"
                } else {
                    "/bigwolf history ${page - 1}"
                }
                navComponents.add(
                    Component.text("« 前", GREEN)
                        .hoverEvent(Component.text("ページ ${page - 1} へ"))
                        .clickEvent(ClickEvent.runCommand(prevCommand))
                )
                navComponents.add(Component.text(" | ", GRAY))
            }

            navComponents.add(Component.text("$page/$totalPages", YELLOW))

            if (page < totalPages) {
                navComponents.add(Component.text(" | ", GRAY))
                val nextCommand = if (player.isOp && targetUuid != player.uniqueId) {
                    "/bigwolf history $targetName ${page + 1}"
                } else {
                    "/bigwolf history ${page + 1}"
                }
                navComponents.add(
                    Component.text("次 »", GREEN)
                        .hoverEvent(Component.text("ページ ${page + 1} へ"))
                        .clickEvent(ClickEvent.runCommand(nextCommand))
                )
            }

            var navigation = Component.text("")
            for (comp in navComponents) {
                navigation = navigation.append(comp)
            }
            player.sendMessage(navigation)
        }
    }

    /**
     * ペットの最終位置を確認
     */
    fun handleLocatePet(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            player.sendMessage(Component.text("使い方: /bigwolf locate <ペット番号>", RED))
            return
        }

        val petNumber = args[1].toIntOrNull()
        if (petNumber == null) {
            player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
            return
        }

        val pets = PetDataManager.getAllPets(player.uniqueId)
        val pet = pets.find { it.petNumber == petNumber }

        if (pet == null) {
            player.sendMessage(Component.text("番号 $petNumber のペットは見つかりません。", RED))
            return
        }

        val loc = pet.lastLocation
        if (loc == null) {
            player.sendMessage(Component.text("ペット #${petNumber} の位置情報がありません。", RED))
            return
        }

        val variantStr = pet.variant?.let { " ($it)" } ?: ""
        val nameStr = pet.customName?.let { " 「$it」" } ?: ""
        val typeName = runCatching {
            org.bukkit.entity.EntityType.valueOf(pet.type)
        }.getOrNull()?.let {
            me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(it)
        } ?: pet.type
        player.sendMessage(
            Component.text("=== ペット #${petNumber} ${typeName}$variantStr$nameStr ===", GOLD)
        )
        player.sendMessage(
            Component.text(
                "最終位置: ${loc.world} (${loc.x.toInt()}, ${loc.y.toInt()}, ${loc.z.toInt()})", YELLOW
            )
        )
        player.sendMessage(Component.text("ステータス: ${pet.status}", GRAY))
    }

    /**
     * スポーンエッグ再取得コマンド
     */
    fun handleRecoverEgg(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            player.sendMessage(Component.text("使い方: /bigwolf recover <ペット番号>", RED))
            player.sendMessage(Component.text("収納中のペットのスポーンエッグを再取得します (${BigWolfConfig.recoverCost}pt)", GRAY))
            return
        }

        val petNumber = args[1].toIntOrNull()
        if (petNumber == null) {
            player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
            return
        }

        val petData = PetDataManager.getStoredPetForRecover(player.uniqueId, petNumber)
        if (petData == null) {
            player.sendMessage(Component.text("番号 $petNumber の収納中ペットは見つかりません。", RED))
            player.sendMessage(Component.text("/bigwolf history で収納中のペットを確認できます。", GRAY))
            return
        }

        // ポイント消費
        val cost = BigWolfConfig.recoverCost
        if (!economySystem.consumeTokens(player, cost)) {
            return
        }

        // スポーンエッグを生成して付与
        val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
        val item = storageService.createRecoveredStoredPetItem(petData, type, player.uniqueId.toString())

        val leftovers = player.inventory.addItem(item)
        if (leftovers.isNotEmpty()) {
            leftovers.values.forEach { player.world.dropItem(player.location, it) }
            player.sendMessage(Component.text("インベントリがいっぱいのため足元にドロップしました。", YELLOW))
        }

        player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
        player.sendMessage(Component.text("ペット #${petNumber} のスポーンエッグを再取得しました！ (-${cost}pt)", GREEN))
    }
}
