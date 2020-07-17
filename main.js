const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let points = 0;
let enemies = [];
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

addEventListener('Click', Shoot);
addEventListener("keypress", (event) => {
  if (event.code == "Space") {
    Shoot();
  }
})

class Circle {
  constuctor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = c;
  }

  draw () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 
    2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update () {
    this.draw();
  }
}

function Shoot () {
  let bullet = new Circle(player.x, player.y,  15, "white");
  // bullet.mx = mouse.x;
  // bullet.my = mouse.y;

  let vx = mouse.x - bullet.x;
  let vy = mouse.y - bullet.y;
  let speed = 6;

  let dist = Math.sqrt(vx * vx + vy + vy);
  bullet.dx = vx / dist;
  bullet.dy = vy / dist;

  bullet.dx *= speed;
  bullet.dy *= speed;

  bullet.push(bullet);
}

let player;
function Start () {
  player = new Circle(0, canvas.height/2, 30, 
    '#FFFF00');
} 

function Update () {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //bullets
  for (let i = 0; i < bullets.length; i++) {
    let bullet = bullets[i];

    bullet.x *= bullet.dx;
    bullet.y *= bullet.dy;

    if (bullet.x < 0 || 
      bullet.x > canvas.width ||
      bullet.y < 0 ||
      bullet.y > canvas.height 
      ) {
        bullets.splice(i, 1);
        console.log(bullets);
      }

    bullet.update();
  }
  player.update();
}

Start();
Update();
