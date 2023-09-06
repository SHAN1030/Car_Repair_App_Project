function startclassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0sjwlc1jr/model.json", modelReady);
}

function modelReady() {
    console.log("MODEL IS LOADED!!");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("GOT RESULT");
    if (results[0].confidence > .8){
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + Math.floor(results[0].confidence.toFixed(2) * 100) + "%"
    }

    if (error) {
        console.log(error);
    } else {
        console.log(results);

        if (results[0].label == "muffler" && results[0].confidence > .80) {
            document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
            document.getElementById("muffler").style.borderColor = 'red';
            document.getElementById("piston").style.borderColor = 'green';
            document.getElementById("belt").style.borderColor = 'green';
            document.getElementById("strt").style.borderColor = 'green';
        } else if (results[0].label == "piston" && results[0].confidence > .80) {
            document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
            document.getElementById("piston").style.borderColor = 'red';
            document.getElementById("muffler").style.borderColor = 'green';
            document.getElementById("belt").style.borderColor = 'green';
            document.getElementById("strt").style.borderColor = 'green';
        } else if (results[0].label == "belt" && results[0].confidence > .80) {
            document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
            document.getElementById("belt").style.borderColor = 'red';
            document.getElementById("strt").style.borderColor = 'green';
            document.getElementById("piston").style.borderColor = 'green';
            document.getElementById("muffler").style.borderColor = 'green';
        } else if (results[0].label == "starter" && results[0].confidence > .80) {
            document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
            document.getElementById("strt").style.borderColor = 'red';
            document.getElementById("piston").style.borderColor = 'green';
            document.getElementById("belt").style.borderColor = 'green';
            document.getElementById("muffler").style.borderColor = 'green';
        } else {
            document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
            document.getElementById("strt").style.borderColor = 'green';
            document.getElementById("piston").style.borderColor = 'green';
            document.getElementById("belt").style.borderColor = 'green';
            document.getElementById("muffler").style.borderColor = 'green';
        }
    }
}