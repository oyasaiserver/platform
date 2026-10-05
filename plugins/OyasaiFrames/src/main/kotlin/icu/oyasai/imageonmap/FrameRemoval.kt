package icu.oyasai.imageonmap

import java.util.UUID

internal fun removedFrames(
    suspected: Set<UUID>,
    unloaded: Set<UUID>,
    exists: (UUID) -> Boolean,
): Set<UUID> = suspected.filterTo(mutableSetOf()) { it !in unloaded && !exists(it) }
