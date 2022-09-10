 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext('2d');

 nasaBGimages = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
 randomNumber = Math.floor(Math.random()*4);
 console.log(randomNumber);

 rover_width = 100;
 rover_height = 90;

 backgroundImg = nasaBGimages[randomNumber];
 console.log("background image = " + backgroundImg);

 roverImg = "rover.png";

 roverX = 10;
 roverY = 10;

function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground();
    backgroundImgTag.src = backgroundImg;
    
    roverImgTag = new Image();
    roverImgTag.onload = uploadRover();
    roverImgTag.src = roverImg;

}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImgTag, roverX, roverY, rover_width, rover_height);
}


window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if (roverY >= 0){
        roverY = roverY - 10;
        console.log("When up arrow is pressed, x = " + roverX + "- y = " + roverY);

        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (roverY <= 500){
        roverY = roverY + 10;
        console.log("When down arrow is pressed, x = " + roverX + "- y = " + roverY);

        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (roverX >= 0){
        roverX = roverX - 10;
        console.log("When left arrow is pressed, x = " + roverX + "- y = " + roverY);

        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (roverX <= 700){
        roverX = roverX + 10;
        console.log("When right arrow is pressed, x = " + roverX + "- y = " + roverY);

        uploadBackground();
        uploadRover();
    }
}