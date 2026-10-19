package io.oyasai.oyasaiAdminTools.assistant;

import java.util.function.Predicate;
import org.bukkit.command.TabCompleter;

/** Test helper: the tab completer Paper's VanillaCommandWrapper builds for a player requirement. */
public final class PaperPlayerRequirement {
  private PaperPlayerRequirement() {}

  @SuppressWarnings({"unchecked", "rawtypes"})
  public static TabCompleter completer() {
    // Paper: (TabCompleter) (Predicate) (sender, command) -> false.
    @SuppressWarnings("unchecked")
    Predicate<Object> predicate = (Object ignored) -> false;
    return (TabCompleter) predicate;
  }
}
