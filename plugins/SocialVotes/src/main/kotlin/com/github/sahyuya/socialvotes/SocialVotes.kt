package com.github.sahyuya.socialvotes

import com.github.sahyuya.socialvotes.commands.*
import com.github.sahyuya.socialvotes.data.DataManager
import com.github.sahyuya.socialvotes.listeners.*
import org.bukkit.NamespacedKey
import org.bukkit.command.*
import org.bukkit.plugin.java.JavaPlugin

class SocialVotes : JavaPlugin() {

    companion object {
        lateinit var instance: SocialVotes
            private set
        lateinit var dataManager: DataManager
            private set
        lateinit var SV_SIGN_ID_KEY: NamespacedKey
    }

    override fun onEnable() {

        instance = this

        SV_SIGN_ID_KEY = NamespacedKey(this, "sv_sign_id")

        dataManager = DataManager(this)
        dataManager.load()

        // --- Commands ---
        registerPaperCommand(
            name = "socialvotes",
            aliases = listOf("sv"),
            executor = SvCommand(),
            tabCompleter = SvTabCompleter()
        )

        registerPaperCommand(
            name = "svupdate",
            executor = SvUpdateCommand()
        )

        registerPaperCommand(
            name = "svtp",
            executor = TpCommand()
        )

        // --- Listeners ---
        server.pluginManager.registerEvents(SignCreateListener(), this)
        server.pluginManager.registerEvents(SignClickListener(), this)
        server.pluginManager.registerEvents(ProtectEditListener(), this)
        server.pluginManager.registerEvents(ProtectListener(), this)
        server.pluginManager.registerEvents(ChatInput, this)


        logger.info("SocialVotes enabled.")
    }

    override fun onDisable() {
        dataManager.save()
        logger.info("SocialVotes disabled.")
    }

    private fun registerPaperCommand(
        name: String,
        aliases: List<String> = emptyList(),
        executor: CommandExecutor,
        tabCompleter: TabCompleter? = null
    ) {

        val command = object : Command(name) {

            override fun execute(
                sender: CommandSender,
                label: String,
                args: Array<out String>
            ): Boolean {
                return executor.onCommand(sender, this, label, args)
            }

            override fun tabComplete(
                sender: CommandSender,
                alias: String,
                args: Array<out String>
            ): MutableList<String> {
                return tabCompleter
                    ?.onTabComplete(sender, this, alias, args)
                    ?.toMutableList()
                    ?: mutableListOf()
            }
        }

        command.aliases = aliases

        val server = server
        val field = server.javaClass.getDeclaredField("commandMap")
        field.isAccessible = true
        val commandMap = field.get(server) as CommandMap

        commandMap.register(name, command)
    }

}
