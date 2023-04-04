//https://storage.googleapis.com/tm-model/0r6ewVBKG/model.json

function start(){

navigator.mediaDevices.getUserMedia({ audio: true});

classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/0r6ewVBKG/model.json",modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results)
    }


    document.getElementById("animal").innerHTML=results[0].label;
    document.getElementById("precisao").innerHTML=Math.round(results[0].confidence.toFixed(2)*100 )+"%"
    var resultado=results[0].label;

    var img1=document.getElementById("a1")
    var img2=document.getElementById("a2")
    var img3=document.getElementById("a3")
    var img4=document.getElementById("a4")

    if(resultado=='Background Noise'){
img1.src='cao.jpg'
img2.src=''
img3.src=''
img4.src=''
    }
    else if(resultado=='MIADO'){
        img1.src=''
        img2.src='cat.png'
        img3.src=''
        img4.src=''
    }
    else if(resultado=='RUGIDO'){
        img1.src=''
        img2.src=''
        img3.src='leao.jpg'
        img4.src=''
    }
    else if(resultado=='MUGIDO'){
        img1.src=''
        img2.src=''
        img3.src=''
        img4.src='vaca.png'
    }
}








