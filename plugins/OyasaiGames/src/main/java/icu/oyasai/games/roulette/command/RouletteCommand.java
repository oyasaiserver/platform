package icu.oyasai.games.roulette.command;

import icu.oyasai.games.roulette.config.ConfigManager;
import icu.oyasai.games.roulette.gui.RouletteGui;
import icu.oyasai.games.roulette.model.RouletteSession;
import icu.oyasai.games.roulette.service.BlockClassifier;
import icu.oyasai.games.roulette.service.RouletteManager;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * /roulette コマンドの実行および入力補完（タブ補完）を処理するクラスです。
 */
public class RouletteCommand implements CommandExecutor, TabCompleter {
    private final ConfigManager configManager;
    private final BlockClassifier classifier;
    private final RouletteManager manager;

    public RouletteCommand(ConfigManager configManager, BlockClassifier classifier, RouletteManager manager) {
        this.configManager = configManager;
        this.classifier = classifier;
        this.manager = manager;
    }

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
        // 管理者用サブコマンド: /roulette reload
        if (args.length > 0 && args[0].equalsIgnoreCase("reload")) {
            if (!sender.hasPermission("oyasaigames.roulette.admin") && !sender.hasPermission("oyasaigames.admin")) {
                sender.sendMessage(Component.text("このコマンドを実行する権限がありません。", NamedTextColor.RED));
                return true;
            }
            configManager.reload();
            classifier.initialize();
            sender.sendMessage(Component.text("[おやさいルーレット] 設定を再読み込みし、アイテムリストを再構築しました。", NamedTextColor.GREEN));
            return true;
        }

        // 通常実行: プレイヤー専用
        if (!(sender instanceof Player player)) {
            sender.sendMessage(Component.text("このコマンドはプレイヤーのみ実行可能です。", NamedTextColor.RED));
            return true;
        }

        // 実行権限チェック
        if (!player.hasPermission("oyasaigames.roulette.use") && !player.hasPermission("oyasaigames.use")) {
            player.sendMessage(Component.text("ルーレットを使用する権限がありません。", NamedTextColor.RED));
            return true;
        }

        // 二重実行チェック
        if (manager.isRunning(player.getUniqueId())) {
            player.sendMessage(Component.text("現在、あなたの抽選タスクが実行中です。完了をお待ちください。", NamedTextColor.RED));
            return true;
        }

        // クールダウンチェック
        long remaining = manager.getRemainingCooldownSeconds(player.getUniqueId());
        if (remaining > 0) {
            player.sendMessage(Component.text("クールダウン中です。あと " + remaining + " 秒お待ちください。", NamedTextColor.RED));
            return true;
        }

        // GUI画面を開く
        RouletteSession session = manager.getOrCreateSession(player.getUniqueId());
        RouletteGui.open(player, session);
        return true;
    }

    @Override
    public @Nullable List<String> onTabComplete(@NotNull CommandSender sender, @NotNull Command command, @NotNull String alias, @NotNull String[] args) {
        if (args.length == 1 && (sender.hasPermission("oyasaigames.roulette.admin") || sender.hasPermission("oyasaigames.admin"))) {
            List<String> completions = new ArrayList<>();
            if ("reload".startsWith(args[0].toLowerCase())) {
                completions.add("reload");
            }
            return completions;
        }
        return Collections.emptyList();
    }
}
