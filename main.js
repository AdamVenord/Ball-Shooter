const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let point = 0;
let enemies =[];
let bullets = [];

let mouse = {
  x: canvas.width / 2, 
  y: canvas.height / 2
}

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY

  console.log(mouse);
});

class Circle {
  constuctor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = c;
  }
}

draw() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 
  2, false);
  ctxfillStyle = this.color;
  ctx.fill();
  ctx.close
}

function Start () {

} 

function Update () {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Start();
Update();
