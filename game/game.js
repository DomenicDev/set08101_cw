import {LoadScene} from "./scenes/load_scene";
import {MenuScene} from "./scenes/menu_scene";

window.onload = function () {

    const config = {
        width: 1280,
        height: 720,
        parent: "game-container",
        dom: {
            createContainer: true
        },
        scenes: [LoadScene, MenuScene]


        // ...
    };

    const game = new Phaser.Game(config);

};