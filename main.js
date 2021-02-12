var video = "";
var status = "";

function preload()
{
    video = createVideo('video.mp4');
}

function setup()
{
    canvas = createCanvas(400 , 400);
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 400 , 400)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Satus: Objects Detected";
}

function modelLoaded()
{
    console.log("The servers are responding, your app is ready to go.");
    status = true;
    video.loop();
    video.rate(1);
    video.volume(1.5);
}