function startClassification()
 {
      navigator.mediaDevices.getUserMedia({ audio: true}); 
      classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_2lTVou-F/model.json', modelReady); 
    }
     function modelReady()
     { classifier.classify(gotResults); 
}

function gotResults(error,results){
    if (error) {
        console.error(error);

    }else{
        console.log(error);
        
        document.getElementById("result_label").innerHTML = 'I can hear : ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy : ' + (results[0].confidence*100).toFixed(2)+"%";
        img=document.getElementById("dog");
        img1=document.getElementById("cat");
    
        if (results[0].label=="dog") {
            img.src="dog.png";
            img1.src="dog-ae_1_still_2x.webp";
              
        }

     else{
        img.src="cat.png";
        img1.src="cat1.jpg";
       
        
    }
    }
}
