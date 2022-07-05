objects=[];
status="";
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function modelLoaded(){
console.log("model loaded");
status=true;
}

function draw(){
image(video, 0, 0, 380, 380);
}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : Detecting objects";
object_name=document.getElementById("obejct_name").value
}