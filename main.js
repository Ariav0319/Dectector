var status1 = "";
objects = [];
function setup() {
    objectDetector = ml5.objectDetector('CocoSsd',modelLoaded);
}
function draw() {
    if(status1 != "") {
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "status: object detected";
            fill('#FF0000');
            percent = floor(objects[i].confidence *100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded() {
    console.log("modelLoaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if(error){
        console.log("error");
    }
    console.log(results);
    object = results;
}