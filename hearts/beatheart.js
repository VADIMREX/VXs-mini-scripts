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
c.width = window.screen.availWidth;
c.height = window.screen.availHeight;
document.body.append(c);
var ctx = c.getContext("2d");
var i = 0;
var r = [];
for (i = 0; i < 100; i++)
    r.push(i/10);
for (i = 0; i < 30; i++)
    r.push((100 - i*3)/10);
var r2 = [];
var h = setInterval(function() {
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawHeart(100, 100, 20 + r[i]);
    ctx.fill();  
    i++;
    if (i > 70 && i % 3 == 0) {
        r2.push({
            x: 200 + Math.random() * 50, 
            y: 10 + Math.random() * 100,
            a: 3 + Math.random() * 7
        })
    }
    for(var j = 0; j < r2.length; j++) {
        ctx.drawHeart(r2[j].x, r2[j].y, r2[j].a);
        ctx.fill();
    }
    if (i > r.length) {
        i = 0; 
        r2 = [];
    }
    ctx.fill();    
}, 7);
