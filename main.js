function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    console.log(results);
}