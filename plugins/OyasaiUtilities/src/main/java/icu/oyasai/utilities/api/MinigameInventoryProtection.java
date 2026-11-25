package icu.oyasai.utilities.api;

import java.util.UUID;
import org.bukkit.entity.Player;

/** Main-thread service. The caller owns a durable inventory snapshot and its recovery. */
public interface MinigameInventoryProtection {
    /** Persist a hold before changing inventory or mode. Repeated calls by the same owner are safe. */
    void acquire(UUID playerId, String owner);

    /** Validate ownership before publishing a new recovery snapshot. */
    void checkAvailable(UUID playerId, String owner);

    /** Call only after restoring inventory and mode. Persists both before releasing the hold. */
    void release(Player player, String owner);

    boolean isProtected(UUID playerId);
}
