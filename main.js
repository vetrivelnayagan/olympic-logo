canvas = document.getElementById("myCanvas")
ctx= canvas.getcontext("2d")

ctx.beginpath();
ctx.stokestyle="grey";
ctx.linewidth=4;
ctx.rect(150,143,430,200);
ctx.stokestyle();

ctx.beginpath();
ctx.stokestyle="blue";
ctx.linewidth=5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stokestyle();

ctx.beginpath();
ctx.stokestyle="black";
ctx.linewidth=5;
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.stokestyle();

ctx.beginpath();
ctx.stokestyle="red";
ctx.linewidth=5;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stokestyle();

ctx.beginpath();
ctx.stokestyle="yellow";
ctx.linewidth=5;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stokestyle();

ctx.beginpath();
ctx.stokestyle="green";
ctx.linewidth=5;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stokestyle();