
window.onload = function () {

    const config = {
        width: 1280,
        height: 720,
        parent: "game-container",
        dom: {
            createContainer: true
        },
        // ...
    };

    const game = new Phaser.Game(config);

};