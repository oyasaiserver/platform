package io.oyasai.oyasaiAdminTools.assistant;

import java.util.Collections;
import java.util.Set;
import java.util.UUID;
import net.kyori.adventure.text.Component;
import net.md_5.bungee.api.ChatColor;
import net.md_5.bungee.api.chat.BaseComponent;
import org.bukkit.Server;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.PermissionAttachment;
import org.bukkit.permissions.PermissionAttachmentInfo;
import org.bukkit.plugin.Plugin;

/**
 * The identity and message delivery of the assistant's AI sender.
 *
 * <p>Paper's {@code CommandSender} requires both {@code getName()} and Adventure's {@code name},
 * which share the {@code getName()} JVM signature; Kotlin cannot declare both on one class, Java
 * can. The sender itself is Kotlin and extends this class for those members. Permissions,
 * collection and dispatch are in {@code AssistantCommandSender}.
 *
 * <p>Nothing here makes the sender the console or an operator. The sender is not a {@code
 * ConsoleCommandSender}, and permissions are answered by the Kotlin class (overridden below).
 */
public abstract class AssistantSenderBridge implements CommandSender {
  private final String displayName;
  private final CommandSender.Spigot spigot;

  protected AssistantSenderBridge(String displayName) {
    this.displayName = displayName;
    this.spigot =
        new CommandSender.Spigot() {
          @Override
          public void sendMessage(BaseComponent message) {
            accept(legacy(message));
          }

          @Override
          public void sendMessage(BaseComponent[] messages) {
            for (BaseComponent message : messages) {
              accept(legacy(message));
            }
          }

          @Override
          public void sendMessage(UUID sender, BaseComponent message) {
            accept(legacy(message));
          }

          @Override
          public void sendMessage(UUID sender, BaseComponent[] messages) {
            for (BaseComponent message : messages) {
              accept(legacy(message));
            }
          }
        };
  }

  /**
   * Bungee text as plain text: colour codes are removed with the legacy ones and no leading
   * colour is added, so the AI reads words rather than "\u00a7f..." prefixes.
   */
  @SuppressWarnings("deprecation")
  private static String legacy(BaseComponent message) {
    return ChatColor.stripColor(message.toLegacyText());
  }

  /** Records one line of text for the AI and reports whether the operator is still available. */
  protected abstract boolean accept(String text);

  @Override
  public final String getName() {
    return displayName;
  }

  @Override
  public final Component name() {
    return Component.text(displayName);
  }

  @Override
  public final CommandSender.Spigot spigot() {
    return spigot;
  }

  @Override
  public final void sendMessage(String message) {
    accept(message);
  }

  @Override
  public final void sendMessage(String[] messages) {
    for (String message : messages) {
      accept(message);
    }
  }

  @Override
  public final void sendMessage(UUID sender, String message) {
    accept(message);
  }

  @Override
  public final void sendMessage(UUID sender, String[] messages) {
    for (String message : messages) {
      accept(message);
    }
  }

  @Override
  public Server getServer() {
    throw new UnsupportedOperationException("Provided by AssistantCommandSender");
  }

  @Override
  public boolean isPermissionSet(String name) {
    throw new UnsupportedOperationException("Provided by AssistantCommandSender");
  }

  @Override
  public boolean isPermissionSet(org.bukkit.permissions.Permission permission) {
    throw new UnsupportedOperationException("Provided by AssistantCommandSender");
  }

  @Override
  public boolean hasPermission(String name) {
    throw new UnsupportedOperationException("Provided by AssistantCommandSender");
  }

  @Override
  public boolean hasPermission(org.bukkit.permissions.Permission permission) {
    throw new UnsupportedOperationException("Provided by AssistantCommandSender");
  }

  @Override
  public PermissionAttachment addAttachment(Plugin plugin) {
    throw new UnsupportedOperationException("Assistant sender does not hold attachments");
  }

  @Override
  public PermissionAttachment addAttachment(Plugin plugin, String name, boolean value) {
    throw new UnsupportedOperationException("Assistant sender does not hold attachments");
  }

  @Override
  public PermissionAttachment addAttachment(Plugin plugin, String name, boolean value, int ticks) {
    throw new UnsupportedOperationException("Assistant sender does not hold attachments");
  }

  @Override
  public PermissionAttachment addAttachment(Plugin plugin, int ticks) {
    throw new UnsupportedOperationException("Assistant sender does not hold attachments");
  }

  @Override
  public void removeAttachment(PermissionAttachment attachment) {
    throw new UnsupportedOperationException("Assistant sender does not hold attachments");
  }

  @Override
  public void recalculatePermissions() {
    // Borrowed permissions are read from the online operator every time they are asked for.
  }

  @Override
  public Set<PermissionAttachmentInfo> getEffectivePermissions() {
    return Collections.emptySet();
  }

  @Override
  public boolean isOp() {
    return false;
  }

  @Override
  public void setOp(boolean value) {
    // The AI sender is never an operator, even if a command tries to change this.
  }
}
