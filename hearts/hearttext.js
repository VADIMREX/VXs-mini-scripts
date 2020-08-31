CanvasRenderingContext2D.prototype.drawHeart = function (x, y, a, c1, c2) {
    c1 = c1 || "red";
    c2 = c2 || "white";
    a = a || 20;
    x = x || 0;
    y = y || 0;
    this.beginPath();
    this.arc(x - a, y - a * (1 + Math.sqrt(2)) / 2, a * Math.sqrt(2), 0.75 * Math.PI, 1.75 * Math.PI);
    this.arc(x + a, y - a * (1 + Math.sqrt(2)) / 2, a * Math.sqrt(2), 1.25 * Math.PI, 0.25 * Math.PI);
    this.lineTo(x, y + a * (2 * Math.sqrt(2) / 2));
    this.lineTo(x - 2 * a, y - a * (1 + Math.sqrt(2)) / 2 + a);
    let grd = ctx.createRadialGradient(x, y, 0.5 * a, x, y, 4 * a);
    grd.addColorStop(0, c1);
    grd.addColorStop(1, c2);
    this.fillStyle = grd;
}
//
document.body.innerText = "";
var c = document.createElement("canvas");
c.width = window.screen.availWidth;
c.height = window.screen.availHeight;
document.body.append(c);
var ctx = c.getContext("2d");
//
{
    class TextDraw {
        constructor() {
            this.w = 15;
            this.h = 15;
            this.cur = {
                x: 0,
                y: 0
            };
            this[" "] = function (p) {
                if (!p)
                    p = this.cur;
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\n"] = function (p) {
                if (!p)
                    p = this.cur;
                return {
                    x: this.cur.x,
                    y: p.y + this.h * 11
                };
            }
            this["!"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [], [1, 1]]);
                return {
                    x: p.x + this.w * 4,
                    y: p.y
                }
            }
            this["\u0410"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1]]);
                return {
                    x: p.x + this.w * 8,
                    y: p.y
                }
            }
            this["\u0439"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[0, 1, 0, 1], [0, 0, 1], [], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u0433"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [1, 1, 1, 1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u0443"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [0, 1, 1, 1, 1], [0, 0, 0, 1, 1], [0, 1, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u043B"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [0, 0, 1, 1, 1], [0, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u044F"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [0, 1, 1, 1, 1], [1, 0, 0, 1, 1], [0, 1, 1, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u0442"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [1, 1, 1, 1, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1]]);
                return {
                    x: p.x + this.w * 8,
                    y: p.y
                }
            }
            this["\u0435"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [0, 1, 1, 1], [1, 1, 0, 0, 1], [1, 1, 1, 1, 1], [1, 1], [0, 1, 1, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u0431"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[0, 0, 0, 0, 1], [0, 1, 1, 1], [1, 1], [1, 1, 1, 1], [1, 1, 0, 0, 1], [1, 1, 0, 0, 1], [1, 1, 0, 0, 1], [0, 1, 1, 1]]);
                return {
                    x: p.x + this.w * 7,
                    y: p.y
                }
            }
            this["\u044E"] = function (p) {
                if (!p)
                    p = this.cur;
                this.drawMatrix(p.x, p.y, [[], [], [], [1, 0, 0, 1, 1, 1], [1, 0, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1], [1, 0, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 1]]);
                return {
                    x: p.x + this.w * 9,
                    y: p.y
                }
            }
        }
        drawPixel(x, y) {
            ctx.drawHeart(x - this.w / 4, y + this.h / 4, 3);
            ctx.fill();
            ctx.drawHeart(x + this.w / 4, y - this.h / 4, 3);
            ctx.fill();
        }
        drawMatrix(x, y, matrix) {
            for (var i in matrix) {
                for (var j in matrix[i]) {
                    if (matrix[i][j])
                        this.drawPixel(j * this.w + x, i * this.h + y);
                }
            }
        }
        drawText(x, y, text) {
            this.cur = { x: x, y: y };
            var p = this.cur;
            for (var i in text) {
                p = this[text[i]](p);
            }
        }
    }
    var tx = new TextDraw();
    tx.cur = {
        x: 10,
        y: 10
    };
    var text = decodeURI("%D0%90%D0%B9%D0%B3%D1%83%D0%BB%D1%8F%0A%D1%8F%20%D1%82%D0%B5%D0%B1%D1%8F%0A%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E!!!")
    tx.drawText(100, 100, text);
}