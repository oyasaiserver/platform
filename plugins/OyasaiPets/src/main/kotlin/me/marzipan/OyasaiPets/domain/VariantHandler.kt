package me.marzipan.OyasaiPets.domain

import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import org.bukkit.DyeColor
import org.bukkit.Keyed
import org.bukkit.entity.*
import java.util.Locale

/**
 * ペットのバリアント（見た目のバリエーション）を管理
 * 各MOBタイプごとに適切なバリアント設定を提供
 */
object VariantHandler {

    /**
     * 指定タイプで利用可能なバリアント名一覧を取得
     */
    fun getVariantNames(type: EntityType): List<String> {
        return when (type) {
            EntityType.WOLF -> getRegistryNames(RegistryKey.WOLF_VARIANT)
            EntityType.CAT -> getRegistryNames(RegistryKey.CAT_VARIANT)
            EntityType.FROG -> getRegistryNames(RegistryKey.FROG_VARIANT)
            EntityType.VILLAGER -> getRegistryNames(RegistryKey.VILLAGER_TYPE)

            EntityType.AXOLOTL -> Axolotl.Variant.entries.map { it.name }
            EntityType.PARROT -> Parrot.Variant.entries.map { it.name }
            EntityType.RABBIT -> Rabbit.Type.entries.map { it.name }
            EntityType.LLAMA, EntityType.TRADER_LLAMA -> Llama.Color.entries.map { it.name }
            EntityType.HORSE -> Horse.Color.entries.map { it.name }
            EntityType.MOOSHROOM -> MushroomCow.Variant.entries.map { it.name }
            EntityType.PANDA -> Panda.Gene.entries.map { it.name }
            EntityType.FOX -> Fox.Type.entries.map { it.name }
            EntityType.SHEEP -> DyeColor.entries.map { it.name }

            else -> emptyList()
        }
    }

    /**
     * エンティティにバリアントを適用
     */
    fun applyVariant(entity: LivingEntity, variantName: String) {
        val name = variantName.uppercase(Locale.ROOT)
        runCatching {
            when (entity) {
                is Wolf -> applyRegistryVariant(entity, RegistryKey.WOLF_VARIANT, variantName) { e, v ->
                    e.variant = v
                }
                is Cat -> applyRegistryVariant(entity, RegistryKey.CAT_VARIANT, variantName) { e, v ->
                    e.catType = v
                }
                is Frog -> applyRegistryVariant(entity, RegistryKey.FROG_VARIANT, variantName) { e, v ->
                    e.variant = v
                }
                is Villager -> applyRegistryVariant(entity, RegistryKey.VILLAGER_TYPE, variantName) { e, v ->
                    e.villagerType = v
                }

                is Axolotl -> entity.variant = Axolotl.Variant.valueOf(name)
                is Parrot -> entity.variant = Parrot.Variant.valueOf(name)
                is Rabbit -> entity.rabbitType = Rabbit.Type.valueOf(name)
                is Llama -> entity.color = Llama.Color.valueOf(name)
                is Horse -> entity.color = Horse.Color.valueOf(name)
                is MushroomCow -> entity.variant = MushroomCow.Variant.valueOf(name)
                is Panda -> entity.mainGene = Panda.Gene.valueOf(name)
                is Fox -> entity.foxType = Fox.Type.valueOf(name)
                is Sheep -> entity.color = DyeColor.valueOf(name)
                else -> {}
            }
        }
    }

    /**
     * エンティティから現在のバリアント名を取得
     */
    fun getVariantNameFromEntity(entity: LivingEntity): String? {
        return when (entity) {
            is Wolf -> entity.variant.key().value()
            is Cat -> entity.catType.key().value()
            is Frog -> entity.variant.key().value()
            is Villager -> entity.villagerType.key().value()
            is Axolotl -> entity.variant.name
            is Parrot -> entity.variant.name
            is Rabbit -> entity.rabbitType.name
            is Llama -> entity.color.name
            is Horse -> entity.color.name
            is MushroomCow -> entity.variant.name
            is Panda -> entity.mainGene.name
            is Fox -> entity.foxType.name
            is Sheep -> entity.color?.name
            else -> null
        }
    }

    /**
     * Paper RegistryからKeyed名一覧を取得
     */
    private fun <T : Keyed> getRegistryNames(key: RegistryKey<T>): List<String> {
        return RegistryAccess.registryAccess().getRegistry(key).map { it.key().value() }
    }

    /**
     * Registryベースのバリアントを適用（Wolf, Cat, Frog, Villager用）
     */
    private fun <T : Keyed, E : LivingEntity> applyRegistryVariant(
        entity: E,
        key: RegistryKey<T>,
        name: String,
        applier: (E, T) -> Unit
    ) {
        val registry = RegistryAccess.registryAccess().getRegistry(key)
        val variant = registry.firstOrNull {
            it.key().value().equals(name, true) || it.key().toString().equals(name, true)
        }
        if (variant != null) {
            applier(entity, variant)
        }
    }
}

