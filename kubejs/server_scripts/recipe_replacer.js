// Removes Epic Knights Mod steel ingredient tags
ServerEvents.tags('item', event => {
    event.remove('forge:ingots/steel', 'magistuarmory:steel_ingot'),
    event.remove('forge:plates/steel', 'magistuarmory:steel_plate'),
    event.remove('forge:nuggets/steel', 'magistuarmory:steel_nugget')
})

//Removes entire mod recipes
ServerEvents.recipes(event => {
    event.remove({ mod: 'meetyourfight' }),
    event.remove({ mod: 'born_in_chaos_v1' }),
    event.remove({ mod: 'musketmod' }),
    event.remove({ mod: 'mutantmore' })
})

//Handles recipe removals
ServerEvents.recipes(event => {
    [
        'alloyed:steel_sword',
        'alloyed:steel_helmet',
        'alloyed:steel_chestplate',
        'alloyed:steel_leggings',
        'alloyed:steel_boots',
        'magistuarmory:steel_ingot',
        'magistuarmory:steel_plate',
        'magistuarmory:steel_nugget',
        'minecraft:netherite_ingot',
        'minecraft:netherite_sword',
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'minecraft:netherite_shovel',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_hoe',
        'magistuarmory:netherite_stylet',
        'magistuarmory:netherite_shortsword',
        'magistuarmory:netherite_katzbalger',
        'magistuarmory:netherite_pike',
        'magistuarmory:netherite_ranseur',
        'magistuarmory:netherite_ahlspiess',
        'magistuarmory:netherite_chivalrylance',
        'magistuarmory:netherite_bastardsword',
        'magistuarmory:netherite_estoc',
        'magistuarmory:netherite_claymore',
        'magistuarmory:netherite_zweihander',
        'magistuarmory:netherite_lochaberaxe',
        'magistuarmory:netherite_concavehalberd',
        'magistuarmory:netherite_heavymace',
        'magistuarmory:netherite_heavywarhammer',
        'magistuarmory:netherite_lucernhammer',
        'magistuarmory:netherite_morgenstern',
        'magistuarmory:netherite_chainmorgenstern',
        'magistuarmory:netherite_guisarme',
        'magistuarmory:netherite_heatershield',
        'magistuarmory:netherite_target',
        'magistuarmory:netherite_buckler',
        'magistuarmory:netherite_rondache',
        'magistuarmory:netherite_tartsche',
        'magistuarmory:netherite_ellipticalshield',
        'magistuarmory:netherite_roundshield',
        'magistuarmory:netherite_pavese',
        'farmersdelight:netherite_knife',
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
        'minecraft:ender_eye',
        'quark:backpack',
        'twilightforest:uncrafting_table',
        'twilightforest:giant_sword',
        'twilightforest:giant_pickaxe',
        'magistuarmory:wood_heatershield',
        'magistuarmory:wood_ellipticalshield',
        'magistuarmory:wood_roundshield',
        'magistuarmory:wood_kiteshield',
        'cataclysm:the_incinerator',
        'create:steam_engine',
        'minecolonies:blockhutsmeltery',
        'minecolonies:blockhutblacksmith',
        'minecolonies:blockhutcrusher',
        'minecolonies:blockhutbarracks',
        'cataclysm:monstrous_eye',
        'cataclysm:flame_eye',
        'cataclysm:mechanical_fusion_anvil',
        'cataclysm:mech_eye'

    ].forEach((itemID) => event.remove ({output: itemID}));
})


// BOSS & DIMENSION ITEMS


//Boss summon items
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('meetyourfight:haunted_bell', 1), // arg 1: output
        [ 
          ' A ', 
          'ABA', // arg 2: the shape (array of strings)
          'ACA'  
        ],
        {
          A: 'minecraft:gold_ingot', 
          B: 'create:powdered_obsidian',  //arg 3: the mapping object
          C: 'minecraft:bone'   
        }
      ),
      event.shaped(
        Item.of('meetyourfight:devils_ante', 1), // arg 1: output
        [ 
          ' D ', 
          'ABA', // arg 2: the shape (array of strings)
          ' C '  
        ],
        {
          A: 'minecraft:redstone', 
          B: 'quark:redstone_randomizer',  //arg 3: the mapping object
          C: 'meetyourfight:phantoplasm',
          D: 'minecraft:emerald'   
        }
      ),
      event.shaped(
        Item.of('meetyourfight:dusk_key', 1), // arg 1: output
        [ 
          ' A ', 
          'ABC', // arg 2: the shape (array of strings)
          ' A '  
        ],
        {
          A: 'create:powdered_obsidian', 
          B: 'meetyourfight:fortunes_favor',  //arg 3: the mapping object
          C: 'minecraft:diamond'   
        }
      ),
      event.shaped(
        Item.of('cataclysm:monstrous_eye', 1), 
        [ 
          'ABA', 
          'CDC',
          'ABA'  
        ],
        {
          A: 'minecraft:lava_bucket', 
          B: 'minecraft:netherite_scrap',
          C: 'minecraft:blackstone',
          D: 'minecraft:ender_pearl'   
        }
      ),
      event.shaped(
        Item.of('cataclysm:flame_eye', 1), 
        [ 
          'AAA', 
          'BCB',
          'DDD'  
        ],
        {
          A: 'minecraft:blaze_powder', 
          B: 'minecraft:netherite_scrap',
          C: 'minecraft:ender_pearl',
          D: 'minecraft:soul_sand'   
        }
      )
})

//Dimension items
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:ender_eye', 3),
        [ 
          'twilightforest:fiery_blood',
          '3x minecraft:ender_pearl'
        ]
      )
})


// GEAR AND MATERIALS


//Netherite replacer
ServerEvents.recipes(event => {
  const crushing = event.recipes.createMixing('minecraft:netherite_ingot', [
    'alloyed:steel_ingot',
    'minecraft:netherite_scrap',
    'twilightforest:steeleaf_ingot'
  ]).superheated()
});

//Armor and weapons
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alloyed:steel_sword', 1),
    [ 
      ' A ', 
      ' A ',
      ' B '  
    ],
    {
      A: 'alloyed:steel_ingot', 
      B: 'magistuarmory:hilt'
    }
  ),
  event.shaped(
    Item.of('musketmod:musket', 1),
    [ 
      'A  ', 
      ' AB',
      ' CD'  
    ],
    {
      A: 'alloyed:steel_ingot', 
      B: 'minecraft:flint_and_steel',
      C: 'alloyed:steel_nugget',
      D: '#minecraft:planks'
    }
  ),
  event.shaped(
    Item.of('musketmod:pistol', 1),
    [ 
      'AB ', 
      'CD ',
      '   '  
    ],
    {
      A: 'alloyed:steel_ingot', 
      B: 'minecraft:flint_and_steel',
      C: 'alloyed:steel_nugget',
      D: 'minecraft:stick'
    }
  ),
  event.shaped(
    Item.of('musketmod:cartridge', 3),
    [ 
      'AAA', 
      'BC ',
      '   '  
    ],
    {
      A: 'alloyed:steel_nugget', 
      B: 'minecraft:fire_charge',
      C: 'minecraft:paper'
    }
  ),
  event.shaped(
        Item.of('magistuarmory:wood_heatershield', 1),
        [ 
          'ABA', 
          'AAA',
          ' A '  
        ],
        {
          A: '#minecraft:planks', 
          B: 'minecraft:iron_ingot'
        }
      ),
      event.shaped(
        Item.of('magistuarmory:wood_ellipticalshield', 1),
        [ 
          'AAB', 
          'AAA',
          ' AA'  
        ],
        {
          A: '#minecraft:planks', 
          B: 'minecraft:iron_ingot'
        }
      ),
      event.shaped(
        Item.of('magistuarmory:wood_roundshield', 1),
        [ 
          ' AB', 
          'AAA',
          ' A '  
        ],
        {
          A: '#minecraft:planks', 
          B: 'minecraft:iron_ingot'
        }
      ),
      event.shaped(
        Item.of('magistuarmory:wood_kiteshield', 1),
        [ 
          'AAA', 
          'ABA',
          ' A '  
        ],
        {
          A: '#minecraft:planks', 
          B: 'minecraft:iron_ingot'
        }
      ),
      event.shaped(
        Item.of('cataclysm:the_incinerator', 1),
        [ 
          ' AB', 
          'ADA',
          'CA '  
        ],
        {
          A: 'minecraft:blaze_rod', 
          B: 'cataclysm:ignitium_ingot',
          C: 'magistuarmory:netherite_zweihander',
          D: 'mutantmore:mutant_blaze_core'
        }
      )
})

//Netherite replacements
ServerEvents.recipes(event => {
    event.smithing(
        'minecraft:netherite_shovel',  // arg 1: output
        'alloyed:steel_shovel', // arg 2: the item to be upgraded
        'minecraft:netherite_ingot'   // arg 3: the upgrade item
      ),
      event.smithing(
        'minecraft:netherite_pickaxe',
        'alloyed:steel_pickaxe',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'minecraft:netherite_axe',
        'alloyed:steel_axe',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'minecraft:netherite_hoe',
        'alloyed:steel_hoe',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'minecraft:netherite_sword',
        'alloyed:steel_sword',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_stylet',
        'magistuarmory:steel_stylet',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_shortsword',
        'magistuarmory:steel_shortsword',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_katzbalger',
        'magistuarmory:steel_katzbalger',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_pike',
        'magistuarmory:steel_pike',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_ranseur',
        'magistuarmory:steel_ranseur',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_ahlspiess',
        'magistuarmory:steel_ahlspiess',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_chivalrylance',
        'magistuarmory:steel_chivalrylance',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_bastardsword',
        'magistuarmory:steel_bastardsword',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_estoc',
        'magistuarmory:steel_estoc',
        'minecraft:netherite_ingot'
      )
      event.smithing(
        'magistuarmory:netherite_claymore',
        'magistuarmory:steel_claymore',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_zweihander',
        'magistuarmory:steel_zweihander',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_lochaberaxe',
        'magistuarmory:steel_lochaberaxe',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_concavehalberd',
        'magistuarmory:steel_concavehalberd',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_heavymace',
        'magistuarmory:steel_heavymace',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_heavywarhammer',
        'magistuarmory:steel_heavywarhammer',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_lucernhammer',
        'magistuarmory:steel_lucernhammer',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_morgenstern',
        'magistuarmory:steel_morgenstern',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_chainmorgenstern',
        'magistuarmory:steel_chainmorgenstern',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_guisarme',
        'magistuarmory:steel_guisarme',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_heatershield',
        'magistuarmory:steel_heatershield',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_target',
        'magistuarmory:steel_target',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_rondache',
        'magistuarmory:steel_rondache',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_buckler',
        'magistuarmory:steel_buckler',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_tartsche',
        'magistuarmory:steel_tartsche',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_ellipticalshield',
        'magistuarmory:steel_ellipticalshield',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_roundshield',
        'magistuarmory:steel_roundshield',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'magistuarmory:netherite_pavese',
        'magistuarmory:steel_pavese',
        'minecraft:netherite_ingot'
      ),
      event.smithing(
        'farmersdelight:netherite_knife',
        'alloyed:steel_knife',
        'minecraft:netherite_ingot'
      )
})


// CREATE & MINECOLONIES


//Create
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:crushing_wheel', 1),
        [ 
          'AAA', 
          'ABA',
          'AAA'  
        ],
        {
          A: 'create:andesite_alloy', 
          B: 'create:large_cogwheel'
        }
      ),
      event.shaped(
        Item.of('create:steam_engine', 1),
        [ 
          'A',
          'B',
          'C'  
        ],
        {
          A: '#forge:plates/gold', 
          B: 'alloyed:steel_ingot',
          C: 'minecraft:copper_block'
        }
      )
})


//Minecolonies
ServerEvents.recipes(event => {
    event.shaped(
      Item.of('minecolonies:blockhutsmeltery', 1),
      [ 
        'ACA',
        'ABA',
        'AAA'  
      ],
      {
        A: '#minecraft:planks', 
        B: 'alloyed:steel_ingot',
        C: 'structurize:sceptergold'
      }
    ),
    event.shaped(
        Item.of('minecolonies:blockhutblacksmith', 1),
        [ 
          'ACA',
          'BBB',
          'AAA'  
        ],
        {
          A: '#minecraft:planks', 
          B: 'alloyed:steel_ingot',
          C: 'structurize:sceptergold'
        }
      ),
      event.shaped(
        Item.of('minecolonies:blockhutcrusher', 1),
        [ 
          'ACA',
          'DBD',
          'AAA'  
        ],
        {
          A: '#minecraft:planks', 
          B: 'alloyed:steel_ingot',
          C: 'structurize:sceptergold',
          D: 'minecraft:cobblestone'
        }
      ),
      event.shaped(
        Item.of('minecolonies:blockhutbarracks', 1),
        [ 
          'ACA',
          'ABA',
          'AAA'  
        ],
        {
          A: '#minecraft:planks', 
          B: 'alloyed:steel_block',
          C: 'structurize:sceptergold'
        }
      )
})


// MISCELLANIOUS


//Saddle
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:saddle', 1),
        [ 
          'AAA', 
          'B B',
          'C C'  
        ],
        {
          A: 'minecraft:leather', 
          B: 'minecraft:string',
          C: 'minecraft:iron_ingot'   
        }
      ),
      event.shaped(
        Item.of('quark:backpack', 1), // arg 1: output
        [ 
          'AAA', 
          'ABA', // arg 2: the shape (array of strings)
          'ACA'  
        ],
        {
          A: 'minecraft:leather', 
          B: '#forge:chests/wooden',  //arg 3: the mapping object
          C: 'alloyed:steel_ingot'   
        }
      ),
      event.shapeless(
        Item.of('minecolonies:scroll_buff', 1),
        [ 
          'born_in_chaos_v1:pieceofdarkmetal',
          'born_in_chaos_v1:ethereal_spirit', 
          'born_in_chaos_v1:shattered_skull'
        ]
      ),
      event.shapeless(
        Item.of('born_in_chaos_v1:potion_of_rampage', 1),
        [ 
          'born_in_chaos_v1:seedof_chaos',
          'born_in_chaos_v1:orbofthe_summoner', 
          'born_in_chaos_v1:fire_dust',
          'minecraft:glass_bottle'
        ]
      )
})