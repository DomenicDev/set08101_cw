import {LoadScene} from "./scenes/load_scene.js";
import {MenuScene} from "./scenes/menu_scene.js";
import {GameScene} from "./scenes/game_scene.js";

window.onload = function () {

    const config = {
        width: 1280,
        height: 720,
        parent: "game-container",
        dom: {
            createContainer: true
        },
        scene: [LoadScene, MenuScene, GameScene],
        pixelArt: true,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        physics: {
            default: "arcade",
            arcade: {
                debug: false
            }
        }
    };

    const game = new Phaser.Game(config);

    console.log("game created")

};


