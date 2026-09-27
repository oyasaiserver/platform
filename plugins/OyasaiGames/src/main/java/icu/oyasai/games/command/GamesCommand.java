package icu.oyasai.games.command;

import icu.oyasai.games.OyasaiGamesPlugin;
import icu.oyasai.games.gui.GamesHubGui;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextDecoration;
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
 * /games (/og, /oyasaigames) コマンドを処理するクラスです。
 */
public class GamesCommand implements CommandExecutor, TabCompleter {
    private final OyasaiGamesPlugin plugin;

    public GamesCommand(OyasaiGamesPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
        if (args.length > 0) {
            String sub = args[0].toLowerCase();
            if (sub.equals("reload")) {
                if (!sender.hasPermission("oyasaigames.admin")) {
                    sender.sendMessage(Component.text("このコマンドを実行する権限がありません。", NamedTextColor.RED));
                    return true;
                }
                plugin.reloadAll();
                sender.sendMessage(Component.text("[おやさいゲームズ] 全ての設定を再読み込みしました。", NamedTextColor.GREEN));
                return true;
            }

            if (sub.equals("help")) {
                sender.sendMessage(Component.text("------- [ おやさいゲームズ コマンド一覧 ] -------", NamedTextColor.GOLD));
                sender.sendMessage(Component.text("/games (または /og) - ゲームメニューを開く", NamedTextColor.YELLOW));
                sender.sendMessage(Component.text("/roulette - 建築用アイテムルーレットを開く", NamedTextColor.YELLOW));
                if (sender.hasPermission("oyasaigames.admin")) {
                    sender.sendMessage(Component.text("/games reload - プラグイン全体の設定を再読み込み", NamedTextColor.AQUA));
                }
                return true;
            }
        }

        if (!(sender instanceof Player player)) {
            sender.sendMessage(Component.text("[おやさいゲームズ] このコマンドはゲーム内プレイヤーのみ実行可能です。（/games help で一覧表示）", NamedTextColor.RED));
            return true;
        }

        if (!player.hasPermission("oyasaigames.use")) {
            player.sendMessage(Component.text("おやさいゲームズを使用する権限がありません。", NamedTextColor.RED));
            return true;
        }

        GamesHubGui.open(player);
        return true;
    }

    @Override
    public @Nullable List<String> onTabComplete(@NotNull CommandSender sender, @NotNull Command command, @NotNull String alias, @NotNull String[] args) {
        if (args.length == 1) {
            List<String> list = new ArrayList<>();
            if ("help".startsWith(args[0].toLowerCase())) {
                list.add("help");
            }
            if (sender.hasPermission("oyasaigames.admin") && "reload".startsWith(args[0].toLowerCase())) {
                list.add("reload");
            }
            return list;
        }
        return Collections.emptyList();
    }
}
