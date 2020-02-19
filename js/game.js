// wait until document is ready, then call setup function
$(document).ready(setupGame);

function setupGame() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);

    drawGameWorld(map, map[0].length, map.length, ctx);
}

const tileWidth = 30;
const tileHeight = 30;

const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];


function drawGameWorld(map, width, height, context) {

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const type = map[y][x];

            let color = null;
            switch (type) {
                case 0:
                    color = 'green';
                    break;
                case 1:
                    color = 'brown';
                    break;
                default: break;

            }
            if (color != null) {
                context.fillStyle = color;
                context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
    }

}



