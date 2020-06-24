const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1, ball_2, ball_3
var launcherX, launcherY;
var flag = "start"

function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 30);
    tanker = new Tanker(75, height - 110, 60, 30);

    ball_1 = new Ball(100, 100, 20)
    ball_2 = new Ball(200, 200, 20)
    ball_3 = new Ball(300, 300, 20)

    canonBall = new CanonBall(20, 20);
    

    shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
   
    background(255)
    Matter.Engine.update(engine);
    textSize(30);
    text("Press the left and right arrows to move the shooter!!", 40, 250);
    fill("yellow");
    ground.display();
    fill("green");
    ball_2.display();
    ball_1.display();
    ball_3.display();
    canonBall.display();
    fill("blue");
    tanker.display();
    shot.display();
}
