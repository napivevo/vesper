//Replaces netherite ingot loot with netherite scrap loot
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .replaceLoot('minecraft:netherite_ingot', 'minecraft:netherite_scrap')
})