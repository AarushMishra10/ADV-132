function setup(){
    canvas=createCanvas(640,220);
    canvas.center();
    objectDector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";

}


function modelLoaded() { 
    console.log("Model Loaded!") ;
    status = true; 
    objectDector.detect(img, gotResult); 
}

img="";
status="";


function preload(){
img=loadImage("fan.jpg");

}


function draw(){
    image(img,0,0,640,420);
    text("Fan", 45, 75);
    fill("red");
    noFill();
    stroke("red");
    rect(30,60,450,350);

}

function gotResult(error, results){
    if(error){
        console.log(error);

        
    }
    console.log(results);
}