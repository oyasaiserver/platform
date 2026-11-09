package io.oyasai.survival.pull;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.Strictness;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import java.io.StringReader;
import java.nio.ByteBuffer;
import java.nio.charset.CodingErrorAction;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.plugin.messaging.Messenger;
import org.bukkit.plugin.messaging.PluginMessageListener;

final class ClientCommunication implements PluginMessageListener, Listener {
    static final String CHANNEL = "survivalpull:main";
    private static final Gson GSON = new Gson();
    private final SurvivalPull plugin;
    private final Map<UUID, Integer> lastRequest = new HashMap<>();

    ClientCommunication(SurvivalPull plugin) { this.plugin = plugin; }

    boolean hasMod(Player player) { return player.getListeningPluginChannels().contains(CHANNEL); }

    void open(Player player) { send(player, Map.of("t", "open")); }

    record Request(String type, Material material, String key, int amount) { }

    static Request parse(byte[] data) {
        try {
            String text = StandardCharsets.UTF_8.newDecoder().onMalformedInput(CodingErrorAction.REPORT)
                    .onUnmappableCharacter(CodingErrorAction.REPORT).decode(ByteBuffer.wrap(data)).toString();
            var reader = new JsonReader(new StringReader(text));
            reader.setStrictness(Strictness.STRICT);
            reader.setNestingLimit(16);
            var value = JsonParser.parseReader(reader);
            if (reader.peek() != JsonToken.END_DOCUMENT || !value.isJsonObject()) throw new IllegalArgumentException();
            JsonObject json = value.getAsJsonObject();
            String type = string(json, "t");
            if (type.equals("list")) return new Request(type, null, "", 0);
            if (!type.equals("pull")) throw new IllegalArgumentException();
            var n = json.get("n");
            if (n == null || !n.isJsonPrimitive() || !n.getAsJsonPrimitive().isNumber()
                    || !n.getAsString().matches("-1|0|[1-9][0-9]{0,3}")) throw new IllegalArgumentException();
            int amount = n.getAsInt();
            if (amount != -1 && amount > SurvivalPull.MAX_AMOUNT) throw new IllegalArgumentException();
            Material material = Material.matchMaterial(string(json, "id"));
            if (material == null || material.isAir() || !material.isItem()) throw new IllegalArgumentException();
            String key = json.has("k") ? string(json, "k") : "";
            if (!key.isEmpty() && !key.matches("[0-9a-f]{16}")) throw new IllegalArgumentException();
            return new Request(type, material, key, amount == -1 ? Integer.MAX_VALUE
                    : amount == 0 ? material.getMaxStackSize() : amount);
        } catch (Exception error) {
            throw new IllegalArgumentException("要求が不正です。id・k と個数（0・1〜2304・-1）を確認してください。", error);
        }
    }

    private static String string(JsonObject json, String key) {
        var value = json.get(key);
        if (value == null || !value.isJsonPrimitive() || !value.getAsJsonPrimitive().isString()) throw new IllegalArgumentException();
        return value.getAsString();
    }

    @Override
    public void onPluginMessageReceived(String channel, Player player, byte[] message) {
        if (!CHANNEL.equals(channel)) return;
        int tick = plugin.getServer().getCurrentTick();
        Integer previous = lastRequest.put(player.getUniqueId(), tick);
        if (previous != null && previous == tick) return;
        Request request;
        try {
            request = parse(message);
        } catch (IllegalArgumentException error) {
            send(player, Map.of("t", "error", "msg", error.getMessage()));
            return;
        }
        if (request.type().equals("pull")) {
            var result = plugin.pull(player, request.material(), request.key(), request.amount());
            send(player, Map.of("t", "pulled", "id", request.material().getKey().toString(),
                    "k", request.key(), "n", result.amount()));
        }
        sendList(player);
    }

    void sendList(Player player) {
        plugin.requestList(player, null, "", result -> listBytes(result.scope(), result.stock()),
                bytes -> player.sendPluginMessage(plugin.owner(), CHANNEL, bytes));
    }

    static byte[] listBytes(String scope, java.util.List<SurvivalPull.Stock> stockList) {
        var items = new JsonArray();
        for (var stock : stockList) {
            WorkPipeline.checkCancelled();
            var item = new JsonObject();
            item.addProperty("id", stock.material().getKey().toString());
            item.addProperty("k", stock.key());
            if (!stock.key().isEmpty()) item.addProperty("item", stock.variant().base64());
            item.addProperty("n", stock.amount());
            var sources = new JsonArray();
            stock.sources().stream().limit(3).forEach(source -> {
                var row = new JsonArray();
                row.add(source.position().x()); row.add(source.position().y()); row.add(source.position().z()); row.add(source.amount());
                sources.add(row);
            });
            item.add("src", sources);
            items.add(item);
        }
        var message = new JsonObject();
        message.addProperty("t", "list");
        message.addProperty("scope", scope);
        message.add("items", items);
        return encode(message);
    }

    private void send(Player player, Object message) {
        player.sendPluginMessage(plugin.owner(), CHANNEL, encode(message));
    }

    private static byte[] encode(Object message) {
        WorkPipeline.checkCancelled();
        byte[] bytes = GSON.toJson(message).getBytes(StandardCharsets.UTF_8);
        if (bytes.length > Messenger.MAX_MESSAGE_SIZE) {
            bytes = GSON.toJson(Map.of("t", "error", "msg", "一覧が通信上限を超えました。/pull gui を使用してください。"))
                    .getBytes(StandardCharsets.UTF_8);
        }
        return bytes;
    }

    @EventHandler
    public void onQuit(PlayerQuitEvent event) {
        lastRequest.remove(event.getPlayer().getUniqueId());
        plugin.work().forget(event.getPlayer().getUniqueId());
    }
}
