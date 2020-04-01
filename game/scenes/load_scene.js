import { CONSTANTS } from "../constants";

export class LoadScene extends Phaser.Scene {

    constructor() {
        super({
            key: CONSTANTS.SCENES.LOAD
        });

    }

    init() {

    }

    preload() {

    }

    create() {
        // when all loading is done, we want to show up the main menu
        this.scene.start(CONSTANTS.SCENES.MENU);
    }


}