//Imports GameStages, DimStages, & StageHelper API

import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageAdded;
import mods.gamestages.events.GameStageRemoved;
import mods.gamestages.events.GameStageCleared;
import mods.dimstages.DimensionStages;
import crafttweaker.api.text.Component;
import mods.gamestages.StageHelper;


//Blocks Nether access
DimensionStages.stageDimensionWithMessage("minecraft:the_nether", "§4§lPowerful spirits block your access to the nether.", "nether");


//Gives Nether access when Rosalyne is defeated
StageHelper.grantStageOnAdvancement("meetyourfight:main/rosalyne_kill", "nether");

CTEventManager.register<GameStageAdded>((event) => {

    if (event.stage == "nether") {

        event.player.sendMessage("§4§lYou feel that your connection to the Nether has grown stronger...");
    }
});


//Adds new mobs when nether accessed
StageHelper.grantStageOnAdvancement("minecraft:story/enter_the_nether", "nether_entered");

CTEventManager.register<GameStageAdded>((event) => {

    if (event.stage == "nether_entered") {

        event.player.sendMessage("§1§lThe world around you responds to your growth, becoming ever more powerful in turn.");
    }
});


//Adds new mobs when nether accessed
StageHelper.grantStageOnAdvancement("twilightforest:root", "twilight_entered");

CTEventManager.register<GameStageAdded>((event) => {

    if (event.stage == "twilight_entered") {

        event.player.sendMessage("§1§lThe world around you responds to your growth, becoming ever more powerful in turn.");
    }
});