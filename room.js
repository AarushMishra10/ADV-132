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
img=loadImage("bedroom.jpeg");

}


function draw(){
    image(img,0,0,640,420);
    text("Bed", 45, 75);
    fill("green");
    noFill();
    stroke("green");
    rect(30,60,450,350);

}

function gotResult(error, results){
    if(error){
        console.log(error);

        
    }
    console.log(results);
}