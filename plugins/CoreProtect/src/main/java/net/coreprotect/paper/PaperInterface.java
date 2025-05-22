package net.coreprotect.paper;

import org.bukkit.Location;
import org.bukkit.Server;
import org.bukkit.block.Sign;
import org.bukkit.block.Skull;
import org.bukkit.entity.Entity;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.InventoryHolder;

public interface PaperInterface {

    InventoryHolder getHolder(Inventory holder, boolean useSnapshot);

    boolean isStopping(Server server);

    String getLine(Sign sign, int line);

    void teleportAsync(Entity entity, Location location);

    String getSkullOwner(Skull skull);

    String getSkullSkin(Skull skull);

    void setSkullOwner(Skull skull, String owner);

    void setSkullSkin(Skull skull, String skin);

}
