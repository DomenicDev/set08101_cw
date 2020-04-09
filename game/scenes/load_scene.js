import { CONSTANTS } from "../constants.js";

export class LoadScene extends Phaser.Scene {

    constructor() {
        super({
            key: CONSTANTS.SCENES.LOAD
        });

    }

    preload() {
        // load images
        this.load.setPath("./game/assets/");

        this.load.image(CONSTANTS.IMAGES.PLAY_BUTTON, 'play_button.png');
        this.load.image(CONSTANTS.IMAGES.BACKGROUND_IMAGE_MAIN_MENU, 'landing_image.png');
        this.load.image(CONSTANTS.IMAGES.LOGO, "logo.png");

        // load sounds and music
        this.load.audio(CONSTANTS.SOUNDS.MAIN_MENU_MUSIC, 'TownTheme.mp3'); // credits go to https://opengameart.org/content/town-theme-rpg

        // load sprites
        this.load.spritesheet(CONSTANTS.SPRITES.PLAYER_SPRITE, 'main_character.png', { frameWidth: 64, frameHeight: 64 });

        this.load.image(CONSTANTS.IMAGES.TERRAIN_01, "hyptosis_tile-art-batch-1.png");

        this.load.tilemapTiledJSON(CONSTANTS.MAPS.MAIN_TILE_MAP, "map.json");

    }

    create() {
        // when all loading is done, we want to show up the main menu
        this.scene.start(CONSTANTS.SCENES.MENU);
    }


}