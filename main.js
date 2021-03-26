noseX = 0;
noseY = 0;


function preload () {
ClownNose = loadImage("https://i.postimg.cc/mkS6c71J/Clown-Nose-Download-Transparent-PNG-Image.png");
Hat = loadImage("https://i.postimg.cc/7ZLYZVTv/Fancy-Cowboy-Hat-PNG-Free-Download.png");
}

function setup () {
   canvas = createCanvas(300,300);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    Pose_net = ml5.poseNet(video, modelLoaded);
    Pose_net.on('pose', Got_Poses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw () {
image(video, 0, 0, 300, 300);
//fill(255, 0, 0);
//stroke(255, 0, 0);
//circle(noseX, noseY, 25);
image(ClownNose, noseX-17, noseY-15, 35, 35);
image(Hat, noseX-100, noseY-140, 200, 80);
}

function Got_Poses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x is " + noseX); 
        console.log("Nose y is " + noseY);

     }
}

function take_snapshot() {
    save("ClownNosePicture.png");
}