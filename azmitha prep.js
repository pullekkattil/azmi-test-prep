//alert('The world wishes you all the best for your exams!!!!!!')
let numberDcoument = document.getElementById('multiplication');
let answerDocument= document.getElementById('answer');
let number1, number2, answer;
let timerDocument = document.getElementById('timer');
function azm(){
    number1 = Math.round(Math.random() * 45 + 5);
    number2 = number1 * number1 ;
    numberDcoument.innerText=number1;
    return number2;
}
answer=azm();
countdown(5);

function countdown(remaining){
timerDocument.innerText=remaining;
    if(remaining===0){
        answerDocument.innerText=answer;
    }
    else{
        setTimeout(function(){ countdown(remaining-1);},1000)
    }

}

