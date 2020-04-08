import {CONSTANTS} from "../constants.js";

export class MenuScene extends Phaser.Scene {

    constructor() {
        super({
            key: CONSTANTS.SCENES.MENU
        });
    }

    create() {

        // add background
        this.add.image(0, 0, CONSTANTS.IMAGES.BACKGROUND_IMAGE_MAIN_MENU).setOrigin(0);

        // play button
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, CONSTANTS.IMAGES.PLAY_BUTTON);
        playButton.setInteractive();

        playButton.on("pointerdown", () => {
            console.log("starting game");
            this.scene.start(CONSTANTS.SCENES.GAME);
        });

        // play background music
        this.sound.play(CONSTANTS.SOUNDS.MAIN_MENU_MUSIC, {
            loop: true,
            volume: 0.02 // lower volume
        });

        this.sound.pauseOnBlur = false;

    }

}