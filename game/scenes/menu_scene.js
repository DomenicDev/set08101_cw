import {CONSTANTS} from "../constants";

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