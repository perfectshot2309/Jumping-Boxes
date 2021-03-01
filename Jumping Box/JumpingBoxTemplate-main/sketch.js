var canvas,bluebrick,yellowbrick,pinkbrick,greenbrick,ball,edges,music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    bluebrick= createSprite(0,580,360,30);
    bluebrick.shapeColor = rgb(0,0,255);

    yellowbrick = createSprite(295,580,200,30);
    yellowbrick.shapeColor = rgb(255,128,0);

    pinkbrick = createSprite(515,580,200,30);
    pinkbrick.shapeColor = rgb(153,0,76);

    greenbrick = createSprite(740,580,220,30);
    greenbrick.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(bluebrick.isTouching(ball) && ball.bounceOff(bluebrick)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(yellowbrick.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(pinkbrick.isTouching(ball) && ball.bounceOff(pinkbrick)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(greenbrick.isTouching(ball) && ball.bounceOff(greenbrick)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
