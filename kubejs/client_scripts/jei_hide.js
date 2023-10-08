//Hides items from view in JEI
JEIEvents.hideItems(event => {
    event.hide([
        'magistuarmory:steel_ingot',
        'magistuarmory:steel_plate',
        'magistuarmory:steel_nugget',
        'alloyed:steel_helmet',
        'alloyed:steel_chestplate',
        'alloyed:steel_leggings',
        'alloyed:steel_boots',
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'magistuarmory:wood_flamebladedsword',
        'magistuarmory:stone_flamebladedsword',
        'magistuarmory:iron_flamebladedsword',
        'magistuarmory:gold_flamebladedsword',
        'magistuarmory:diamond_flamebladedsword',
        'magistuarmory:netherite_flamebladedsword',
        'magistuarmory:copper_flamebladedsword',
        'magistuarmory:steel_flamebladedsword',
        'magistuarmory:silver_flamebladedsword',
        'magistuarmory:tin_flamebladedsword',
        'magistuarmory:bronze_flamebladedsword',
        'meetyourfight:passages_toll',
        'meetyourfight:spectres_eye',
        'meetyourfight:spectres_grasp',
        'meetyourfight:aether_glazed_cupcake',
        'meetyourfight:slicers_dice',
        'meetyourfight:ace_of_iron',
        'meetyourfight:cocktail_cutlass',
        'meetyourfight:velvet_fortune',
        'meetyourfight:bone_raker',
        'meetyourfight:depth_star',
        'meetyourfight:caged_heart',
        'meetyourfight:marshy_delight',
        'meetyourfight:twilights_thorn',
        'meetyourfight:wilted_ideals',
        'meetyourfight:blossoming_mind',
        'meetyourfight:tomb_planter',
        'meetyourfight:petal_cream',
        'musketmod:musket_with_bayonet',
        'cataclysm:wither_assault_shoulder_weapon',
        'cataclysm:void_assault_shoulder_weapon',
        'cataclysm:emp',
        'cataclysm:mechanical_fusion_anvil',
        'cataclysm:witherite_ingot',
        'cataclysm:mech_eye'
    ])
})

//Removes DMCLoot guidebook
JEIEvents.hideItems(event => {
    event.hide([Item.of
        ('patchouli:guide_book', '{"patchouli:book":"dmcloot:book_o_affixes"}')
    ])
})