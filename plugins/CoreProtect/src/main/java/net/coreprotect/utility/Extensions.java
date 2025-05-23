package net.coreprotect.utility;

import net.coreprotect.language.Phrase;
import org.bukkit.command.CommandSender;

import java.lang.reflect.Method;

public class Extensions {

    public static void runDatabaseMigration(String command, CommandSender user, String[] argumentArray) {
        try {
            Class<?> patchClass = Class.forName("net.coreprotect.utility.extensions.DatabaseMigration");
            Method patchMethod = patchClass.getDeclaredMethod("runCommand", CommandSender.class, String[].class);
            patchMethod.invoke(null, user, argumentArray);
        } catch (Exception e) {
            // plugin not compiled with extension
            Chat.sendMessage(user, Color.DARK_AQUA + "CoreProtect " + Color.WHITE + "- " + Phrase.build(Phrase.COMMAND_NOT_FOUND, Color.WHITE, "/co " + command));
        }
    }

}
