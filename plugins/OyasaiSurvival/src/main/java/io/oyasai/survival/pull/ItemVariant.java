package io.oyasai.survival.pull;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HexFormat;
import java.util.List;
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.EnchantmentStorageMeta;

/** Captured on the main thread; the icon is only cloned when rendering on the main thread. */
record ItemVariant(Material material, String key, String base64, ItemStack icon,
                   String customName, List<String> enchantments) {
    public ItemStack icon() { return icon == null ? null : icon.clone(); }
    record Id(Material material, String key) { }
    Id id() { return new Id(material, key); }

    static ItemVariant plain(Material material) {
        return new ItemVariant(material, "", null, null, "", List.of());
    }

    private static boolean isPlain(ItemStack item) {
        return item.isSimilar(new ItemStack(item.getType()));
    }

    private static ItemStack unit(ItemStack item) {
        var copy = item.clone();
        copy.setAmount(1);
        return copy;
    }

    private static String hash(byte[] bytes) {
        try {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(bytes)).substring(0, 16);
        } catch (NoSuchAlgorithmException error) {
            throw new IllegalStateException(error);
        }
    }

    static String key(ItemStack item) {
        return isPlain(item) ? "" : hash(unit(item).serializeAsBytes());
    }

    static ItemVariant capture(ItemStack item) {
        if (isPlain(item)) return plain(item.getType());
        var icon = unit(item);
        byte[] bytes = icon.serializeAsBytes();
        var meta = icon.getItemMeta();
        String name = meta != null && meta.hasCustomName()
                ? PlainTextComponentSerializer.plainText().serialize(meta.customName()) : "";
        var enchantments = new ArrayList<String>();
        if (meta != null) {
            meta.getEnchants().keySet().forEach(e -> enchantments.add(e.translationKey()));
            if (meta instanceof EnchantmentStorageMeta book)
                book.getStoredEnchants().keySet().forEach(e -> enchantments.add(e.translationKey()));
        }
        return new ItemVariant(item.getType(), hash(bytes), Base64.getEncoder().encodeToString(bytes),
                icon, name, List.copyOf(enchantments));
    }
}
