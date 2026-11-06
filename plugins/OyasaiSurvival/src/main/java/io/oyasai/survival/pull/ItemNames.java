package io.oyasai.survival.pull;

import com.google.gson.JsonParser;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.text.Normalizer;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import org.bukkit.Material;

final class ItemNames {
    private final Map<String, String> translations;

    ItemNames(Map<String, String> translations) {
        this.translations = Map.copyOf(translations);
    }

    static ItemNames load(InputStream input) {
        if (input == null) throw new IllegalStateException("ja_jp_names.json is missing");
        try (var reader = new InputStreamReader(input, StandardCharsets.UTF_8)) {
            var translations = new HashMap<String, String>();
            JsonParser.parseReader(reader).getAsJsonObject().entrySet()
                    .forEach(entry -> translations.put(entry.getKey(), entry.getValue().getAsString()));
            return new ItemNames(translations);
        } catch (IOException exception) {
            throw new UncheckedIOException(exception);
        }
    }

    String name(Material material) {
        String key = material.getItemTranslationKey();
        String name = key == null ? null : translations.get(key);
        if (name == null && material.isBlock()) {
            key = material.getBlockTranslationKey();
            if (key != null) name = translations.get(key);
        }
        return name == null ? material.name().toLowerCase(Locale.ROOT).replace('_', ' ') : name;
    }

    static String normalize(String text) {
        String value = Normalizer.normalize(text, Normalizer.Form.NFKC).toLowerCase(Locale.ROOT)
                .replace('_', ' ').strip();
        var normalized = new StringBuilder(value.length());
        for (int i = 0; i < value.length(); i++) {
            char c = value.charAt(i);
            normalized.append(c >= '\u30a1' && c <= '\u30f6' ? (char) (c - 0x60) : c);
        }
        return normalized.toString();
    }

    boolean matches(Material material, String query) {
        String normalized = normalize(query);
        return normalize(name(material)).contains(normalized)
                || normalize(material.name()).contains(normalized);
    }

    List<SurvivalPull.Stock> filter(List<SurvivalPull.Stock> stock, String query) {
        String normalized = normalize(query);
        return stock.stream().filter(entry -> {
            WorkPipeline.checkCancelled();
            return matches(entry.material(), query)
                    || normalize(entry.variant().customName()).contains(normalized)
                    || entry.variant().enchantments().stream()
                            .anyMatch(key -> normalize(translations.getOrDefault(key, key)).contains(normalized));
        }).toList();
    }
}
