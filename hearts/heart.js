CanvasRenderingContext2D.prototype.drawHeart = function(x, y, a, c1, c2) {
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