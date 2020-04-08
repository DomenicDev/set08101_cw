import {CONSTANTS} from "../constants.js";
import {STORY} from "../adventure.js";

export class GameScene extends Phaser.Scene {

    // characters
    player;
    peter;
    cedric;
    david;
    characterMap;

    keyboard;
    storyPoint;
    showingDialog;

    constructor() {
        super({
            key: CONSTANTS.SCENES.GAME
        })
    }

    preload() {
        this.anims.create({
            key: "up",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(CONSTANTS.SPRITES.PLAYER_SPRITE, {
                start: 0,
                end: 8
            })
        });
        this.anims.create({
            key: "down",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(CONSTANTS.SPRITES.PLAYER_SPRITE, {
                start: 18,
                end: 26
            })
        });
        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(CONSTANTS.SPRITES.PLAYER_SPRITE, {
                start: 9,
                end: 17
            })
        });
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(CONSTANTS.SPRITES.PLAYER_SPRITE, {
                start: 27,
                end: 35
            })
        });

        // this plugin makes creating alert boxes a lot easier
        // we will use them to show dialogs with options to the user
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }

    create() {
        this.initPlayer();
        this.initCharacters();
        this.initInput();
        this.initGameWorld();
        this.initCamera();

        //    this.createDialog("Some title", "Do you really want to\n show me your house?", "Yeah, sure!", "No, please not!");

        // start game
        this.activateStoryPoint(1);
    }

    initPlayer() {
        // create main character
        this.player = this.physics.add.sprite(400, 400, CONSTANTS.SPRITES.PLAYER_SPRITE, 26);
        this.player.setSize(40, 50).setOffset(10, 10);
        this.player.setCollideWorldBounds(true);
        this.player.anims.playReverse("left");
    }

    initCharacters() {
        this.peter = this.physics.add.sprite(350, 350, CONSTANTS.SPRITES.PLAYER_SPRITE, 26);
        this.peter.setSize(40, 50).setOffset(10, 10);

        this.cedric = this.physics.add.sprite(370, 830, CONSTANTS.SPRITES.PLAYER_SPRITE, 32);
        this.cedric.setSize(40, 50).setOffset(10, 10);

        this.david = this.physics.add.sprite(1100, 600, CONSTANTS.SPRITES.PLAYER_SPRITE, 18);
        this.david.setSize(40, 50).setOffset(10, 10);

        this.characterMap = new Map();
        this.characterMap.set("Peter", this.peter);
        this.characterMap.set("Cedric", this.cedric);
        this.characterMap.set("David", this.david);
    }

    initInput() {
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
    }

    initGameWorld() {
        // create game world
        let world = this.add.tilemap(CONSTANTS.MAPS.MAIN_TILE_MAP);
        let terrain = world.addTilesetImage("terrain_1", CONSTANTS.IMAGES.TERRAIN_01);

        let bottomLayer = world.createStaticLayer("bottom", [terrain], 0, 0).setDepth(-1);
        let topLayer = world.createStaticLayer("top", [terrain], 0, 0);

        // set world bounds (so player cannot walk out of the game world)
        this.physics.world.setBounds(0, 0, world.widthInPixels, world.heightInPixels);
    }

    initCamera() {
        // make camera follow the player
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true;
    }

    /***************************/
    /*          UPDATE
    /**************************/

    update() {
        if (this.player.active) {
            this.handlePlayerMovement();
            this.handlePlayerAnimations();
        }

        this.updateTriggers()
    }

    handlePlayerMovement() {
        // move right
        if (this.keyboard.D.isDown) {
            this.setPlayerSpeedX(CONSTANTS.PLAYER_SPEED);
        }
        // move left
        if (this.keyboard.A.isDown) {
            this.setPlayerSpeedX(-CONSTANTS.PLAYER_SPEED);
        }
        // move up
        if (this.keyboard.W.isDown) {
            this.setPlayerSpeedY(-CONSTANTS.PLAYER_SPEED);
        }
        // move down
        if (this.keyboard.S.isDown) {
            this.setPlayerSpeedY(CONSTANTS.PLAYER_SPEED);
        }
        // reset x velocity
        if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
            this.setPlayerSpeedX(0);
        }
        // reset y velocity
        if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
            this.setPlayerSpeedY(0);
        }
    }

    handlePlayerAnimations() {
        const speedX = this.player.body.velocity.x;
        const speedY = this.player.body.velocity.y;
        if (speedX > 0) {
            this.player.play("right", true);
        } else if (speedX < 0) {
            this.player.anims.playReverse("left", true);
        } else if (speedY < 0) {
            this.player.play("up", true);
        } else if (speedY > 0) {
            this.player.play("down", true);
        }
    }

    setPlayerSpeedX(speedX) {
        this.player.setVelocityX(speedX);
    }

    setPlayerSpeedY(speedY) {
        this.player.setVelocityY(speedY);
    }


    updateTriggers() {
        if (this.storyPoint === undefined || this.showingDialog) {
            return;
        }
        // get trigger
        let actor = this.storyPoint.actor;
        let actorPosition = this.getTriggerPosition(actor);
        let distance = this.computeDistance(this.player, actorPosition);
        if (distance <= 60) {
            console.log("TRIGGER.....");
            const actor = this.storyPoint.actor;
            const title = "Dialog with " + actor;
            const text = this.storyPoint.text;
            const options = this.storyPoint.options;
            this.createDialog(title, text, options, this.getCharacterByName(actor));
        }
    }

    computeDistance(posA, posB) {
        const a = posA.x - posB.x;
        const b = posA.y - posB.y;
        return Math.sqrt( (a*a) + (b*b));
    }

    getCharacterByName(name) {
        return this.characterMap.get(name);
    }

    getTriggerPosition(triggerName) {
        console.log(triggerName);
        const actor = this.getCharacterByName(triggerName);
        let x = actor.x;
        let y = actor.y;
        return {x, y};
    }

    createDialog(title, text, options, actor) {
        // gui code inspired from: https://codepen.io/rexrainbow/pen/MPZWZG
        let dialog = this.rexUI.add.dialog({
            x: actor.x,
            y: actor.y -200,

            background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x3e2723),

            title: this.rexUI.add.label({
                background: this.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x1b0000),
                text: this.add.text(0, 0, title, {
                    fontSize: '24px'
                }),
                space: {
                    left: 15,
                    right: 15,
                    top: 10,
                    bottom: 10
                }
            }),

            content: this.add.text(0, 0, text, {
                fontSize: '12px'
            }),

            choices: createLabels(this, options),

            space: {
                title: 25,
                content: 25,
                choice: 15,

                left: 25,
                right: 25,
                top: 25,
                bottom: 25,
            },

            expand: {
                content: false,  // Content is a pure text object
            },

        }).layout().popUp(1000);
        const game = this;
        dialog
            .on('button.click', function (button, groupName, index) {
                game.onOptionChoose(index);
                dialog.destroy();
            }, this)
            .on('button.over', function (button, groupName, index) {
                button.getElement('background').setStrokeStyle(1, 0xffffff);
            })
            .on('button.out', function (button, groupName, index) {
                button.getElement('background').setStrokeStyle();
            });
        this.showingDialog = true;
    }

    onOptionChoose(index) {
        let next = this.storyPoint.options[index].next;
        if (next === -1) {
            console.log("end...")
        } else {
            this.activateStoryPoint(next);
        }
    }

    activateStoryPoint(id) {
        const storyPoint = getStoryPoint(id);
        if (storyPoint === null) {
            return;
        }
        //console.log(storyPoint);
        this.storyPoint = storyPoint;
        console.log("new story point (id: " + id + ")");
        this.showingDialog = false;
    }

}


/*******************************************/
/*          HELPER FUNCTIONS               */
/*******************************************/

const getStoryPoint = function (id) {
    return STORY.find( node => node.id === id );
};

const createLabels = function (scene, options) {
  let choices = [];
  console.log(options);
  options.forEach(opt => {
      console.log(opt);
      console.log(opt.text);
      choices.push(createLabel(scene, opt.text));
  });
  return choices;
};

const createLabel = function (scene, text) {
    return scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x6a4f4b),

        text: scene.add.text(0, 0, text, {
            fontSize: '16px'
        }),

        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    });
};





