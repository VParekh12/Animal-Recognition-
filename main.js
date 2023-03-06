function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DtbTX2xgo/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %"; 
        img = document.getElementById('headphones');
        
        if (results[0].label == "Meow") {
            img.src = 'Cat.jpg';

          }  else if (results[0].label == "Bark") {
            img.src = 'Dog.jpg';

          } else {
            img.src = 'Background Noise.jpeg';
          }
        
    }

}


    
