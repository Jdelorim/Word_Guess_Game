var wordCount = 0;
var alfArray = ["melmac","alien","alf","willie","lucky","bouillabaisseball","skleenball"];

var wrongWords = [""];
var rightWords = [""];
var currentWord;
var begArry = [];
var splitWord;
var tries = 0;
var newAr = [""];
var wins = 0;
var holdNum = 0;
var talker = "You Loose! Try Again!"

function pickWord(){
     randNum = (Math.floor(Math.random()*alfArray.length))
     holdNum = randNum;
    currentWord = alfArray[randNum];
    for(var i=0;i<=currentWord.length-1;i++){
        begArry.push("_ ");
    }
    document.querySelector("#wordDisplay").innerHTML = begArry.join("");
    tries = currentWord.length + 6;
}




document.onkeyup = function(event){
    var getKey = event.key;
    var wrongSplit;
   
    wrongWords += getKey;
    wrongSplit = wrongWords.split("");
    splitWord = currentWord.split("");
    tries--;
    document.querySelector("#numDisplay").innerHTML = tries;
    if(tries <= 0){
        document.querySelector("#wc").innerHTML = talker;
        setTimeout(reSet,1000);
    }
    console.log(tries);
   
    
    for(var i =0;i<=splitWord.length;i++){
       
       
        if(getKey === splitWord[i] ){
     
         
            if(splitWord[i] === getKey) {
            begArry[i] = getKey;
            console.log("newAR",newAr);
            console.log("cWord",currentWord);
             
            
            } else {
                
                
            begArry[i] = "_ ";
            }
        }else{
              
           
        }

     
    newAr = begArry.join("");
}


if(currentWord === newAr){
    wins++;
    reSet();
    
}
   
    document.querySelector("#ltrDisplay").innerHTML = wrongWords + "";
    document.querySelector("#wordDisplay").innerHTML = begArry.join("");
    document.querySelector("#winsDisplay").innerHTML = wins;
}
document.querySelector("#numDisplay").innerHTML = tries;
function reSet(){
     wrongWords = [""];
     rightWords = [""];
     currentWord;
     begArry = [];
     splitWord;
     tries = 0;
     newAr = [""];
     wins = 0;
     holdNum = 0;
     talker = "";
    document.querySelector("#wc").innerHTML = talker;
    alfArray.splice(holdNum,1);
    pickWord();
}

pickWord();

console.log(begArry);
console.log(currentWord);


