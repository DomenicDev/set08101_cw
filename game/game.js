import {LoadScene} from "./scenes/load_scene.js";
import {MenuScene} from "./scenes/menu_scene.js";



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
