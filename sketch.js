var snake,food,w,h;
var rez = 20;

function setup(){
createCanvas(400,400) 
w = floor(width/rez);
h = floor(height/rez);
frameRate(5);

snake = new Snake();
foodlocation();
}
function foodlocation(){
    var x = floor(random(w))
    var y = floor(random(h))
    food = createVector(x,y)
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake.setdir(-1,0)
    }
   else if(keyCode === RIGHT_ARROW){
        snake.setdir(1,0)
    }
   else if(keyCode === UP_ARROW){
        snake.setdir(0,-1)
    }
   else if(keyCode === DOWN_ARROW){
        snake.setdir(0,1)
    }
    
}

function draw(){
scale (20);
background("black");
if(snake.eat(food)){
    foodlocation();
}
snake.update();
snake.display();
noStroke();
fill("red");
rect(food.x,food.y,1,1)
if(snake.end()){
    textSize(2)
    background("blue")
    text("GAME OVER",5,h/2)
    
}

}