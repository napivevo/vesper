//Hellish Gem
ServerEvents.recipes(event => {
    event.shapeless('kubejs:hellish_gem', [
        'cataclysm:ignitium_ingot',
        'cataclysm:monstrous_horn',
        'minecraft:nether_star',
        'minecolonies:scroll_tp',
    ])
})

//Hellish Gem tagger
ServerEvents.tags('item', event => {
    event.removeAll('twilightforest:portal/activator')
})

ServerEvents.tags('item', event => {
    event.add('twilightforest:portal/activator', 'kubejs:hellish_gem')
})
