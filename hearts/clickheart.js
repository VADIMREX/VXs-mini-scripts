CanvasRenderingContext2D.prototype.drawHeart = function(x, y, a) {
    a = a || 20;
    x = x || 0;
    y = y || 0;
    this.beginPath();
    this.arc(x - a, y - a * (1 + Math.sqrt(2)) / 2, a * Math.sqrt(2), 0.75 * Math.PI, 1.75 * Math.PI);
    this.arc(x + a, y - a * (1 + Math.sqrt(2)) / 2, a * Math.sqrt(2), 1.25 * Math.PI, 0.25 * Math.PI);
    this.lineTo(x, y + a * (2 * Math.sqrt(2) / 2));
    this.lineTo(x - 2 * a, y - a * (1 + Math.sqrt(2)) / 2 + a);
    let grd = ctx.createRadialGradient(x, y, 0.5 * a, x, y, 4 * a);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    this.fillStyle = grd;
}
document.body.innerText = "";
var c = document.createElement("canvas");
document.body.append(c);
c.width = window.screen.availWidth;
c.height = window.screen.availHeight;
var ctx = c.getContext("2d");
c.onclick = function(ev) {
    ctx.drawHeart(ev.layerX, ev.layerY, 3 + 7 * Math.random());
    ctx.fill();
}