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
//
document.body.innerText = "";
var c = document.createElement("canvas");
c.width = window.screen.availWidth;
c.height = window.screen.availHeight;
document.body.append(c);
var ctx = c.getContext("2d");
// стартовые позиции
{
    class point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = 7 + Math.random() * 5;
            this.fallx = 90 + Math.random() * 45;
            this.fally = 45 + Math.random() * 45;
            this.dir = Math.random() > 0.5;
            this.d = 45;
            this.dt = 0;
            this.a45 = Math.PI * 45 / 180;
        }
        get args() {
            return [this.x, this.y, this.r];
        }
        set args(arg) {
            this.x = arg[0];
            this.y = arg[1];
            this.r = arg[2];
            this.dir = !this.dir;
            this.radius = 30 + Math.random() * 60;
        }
        get a() {
            return Math.PI * this.d / 180;
        }
        nextargs() {
            var dx = (this.fallx * Math.cos(this.a45) - this.fallx * Math.cos(this.a));
            var dy = (this.fally * Math.sin(this.a) - this.fally * Math.sin(this.a45));
            var x = this.dir ? this.x + dx : this.x - dx;
            var y = this.y + dy;
            var next = [x, y, this.r];
            this.d += this.dt;
            this.dt += 0.1;
            if (this.d >= 90) {
                this.args = next;
                this.d = 45;
                this.dt = 0;
            }
            return next;
        }
    }
    var startPoints = [];
    var removePoint = [];
    var f = 0;
    if (debug) debugger;
    var h = setInterval(function() {
        if (f % 10 == 0) {
            if (0 == removePoint.length) 
                startPoints.push(new point(30 + Math.random() * (c.width - 60), -15 + Math.random() * 15));
            else while (removePoint.length > 1) {
                var j = removePoint.pop();
                delete startPoints[j];
                startPoints[j] = new point(30 + Math.random() * (c.width - 60), -15 + Math.random() * 15);
            }
        }
        ctx.beginPath();
        ctx.clearRect(0, 0, c.width, c.height);
        var points = [];
        for (var i in startPoints) {
            points[i] = startPoints[i].nextargs();
            if (startPoints[i].y > c.height + 15) removePoint.push(i);
            ctx.drawHeart.apply(ctx, points[i]);
            ctx.fill();
        }
        if (f > 2000) {
            clearInterval(h);
        }
        f++;
        ctx.fill();
    }, 14);
}
//
