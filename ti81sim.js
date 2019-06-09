let c = document.querySelector("canvas");

c.width = 96 * 5;
c.height = 64 * 5;

let ctx = c.getContext("2d");

class TI81Screen {
    constructor() {
        this._screen = [];
        for (var i = 0; i < 96 * 64; i++) this._screen.push(0);
    }
    pxTest(x, y) {
        if (x < 0 || y < 0 || x > 95 || y > 63) return;
        return this._screen[y * 96 + x];
    }

    pxOn(x, y) {
        if (x < 0 || y < 0 || x > 95 || y > 63) return;
        this._screen[y * 96 + x] = 1;
    }
    pxOff(x, y) {
        if (x < 0 || y < 0 || x > 95 || y > 63) return;
        this._screen[y * 96 + x] = 0;
    }
    pxChange(x, y) {
        if (x < 0 || y < 0 || x > 95 || y > 63) return;
        this._screen[y * 96 + x] = 1 - this._screen[y * 96 + x];
    }

    render() {
        for (var y = 0; y < 64; y++) {
            for (var x = 0; x < 96; x++) {
                if (this._screen[y * 96 + x] == 1) { ctx.fillStyle = "#1b2b17"; }
                else { ctx.fillStyle = "#aad884"; }
                ctx.fillRect(x * 5, y * 5, 5, 5);
                ctx.stroke();
            }            
        }
    }
}

let keys = {};
onkeydown = onkeyup = function (e) {
    e = e || window.event;
    keys[e.key] = (e.type == "keydown");
}

let ti81 = new TI81Screen();

function loop() {
    requestAnimationFrame(loop);
    ti81.render();
}
loop();