//Hellish Gem
ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:hellish_gem'], (item, advanced, text) => {
        text.add(1, [
            Text.of('Hidden deep within its crimson recesses is the slightest shimmer of green.').green()
        ])
    })
})

//Hellish Gem
ItemEvents.tooltip(event => {
    event.addAdvanced(['meetyourfight:violet_bloom'], (item, advanced, text) => {
        text.add(1, [
            Text.of('This fragile flower clears the path to the Nether for all who come in contact with it.').red()
        ])
    })
})