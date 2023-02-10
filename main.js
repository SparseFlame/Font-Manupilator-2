function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(900,600);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    poseNet.on();
}

setup();

function modelLoaded(){
    console.log("poseNet is ready");
}

function gotPoses(results){
    if(results[0].confidence.length>0){
        console.log(results);
    }
}