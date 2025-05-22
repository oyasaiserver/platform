package net.coreprotect.spigot;

import org.bukkit.command.CommandSender;

public interface SpigotInterface {

    void addHoverComponent(Object message, String[] data);

    void setHoverEvent(Object message, String text);

    void sendComponent(CommandSender sender, String string, String bypass);

}
