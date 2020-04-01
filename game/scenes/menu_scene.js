import {CONSTANTS} from "../constants.js";

export class MenuScene extends Phaser.Scene {

    constructor() {
        super({
            key: CONSTANTS.SCENES.MENU
        });
    }

    create() {
        console.log("Hello there!")
    }

}