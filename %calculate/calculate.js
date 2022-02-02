let loses = []; let total =[]; let wins = [];
let draws = total - loses-wins;

let input1El = document.getElementById("input1")
let input2El = document.getElementById("input2")
let input3El = document.getElementById("input3")

let result1El = document.getElementById("result1");
let result2El = document.getElementById("result2");
let result3El = document.getElementById("result3");

let result1Ela = document.getElementById("result1a");
let result2Ela = document.getElementById("result2a");
let result3Ela = document.getElementById("result3a");


let localStorageProb1 = JSON.parse(localStorage.getItem("prob1"))
let localStorageProb2 = JSON.parse(localStorage.getItem("prob2"))
let localStorageProb3 = JSON.parse(localStorage.getItem("prob3"))

let localStorageInput1 = JSON.parse(localStorage.getItem("input1"))
let localStorageInput2 = JSON.parse(localStorage.getItem("input2"))
let localStorageInput3 = JSON.parse(localStorage.getItem("input3"))

if (localStorageInput1) {
    result1Ela.innerHTML = localStorageInput1
}

if (localStorageInput2) {
    result1Ela.innerHTML = localStorageInput2
}

if (localStorageInput3) {
    result1Ela.innerHTML = localStorageInput3
}


function seeEnteredValue (){
    result1Ela.innerHTML = wins;
    result2Ela.innerHTML = loses;
    result3Ela.innerHTML = total
}

if (localStorageProb1){
    result1El.innerHTML =localStorageProb1
}
if (localStorageProb2){
    result2El.innerHTML =localStorageProb2
}
if (localStorageProb3){
    result3El.innerHTML = localStorageProb3
}

function ifPush (){
    if(loses|| total||wins == '') {
        warning.innerHTML ="Enter all values"
    }
    else{
        return loses, total, wins;
    }
}

function odds180Prob(){loses.push(input2El.value) ; total.push(input3El.value);wins.push(input1El.value)
     draws = total - loses-wins;
     localStorage.setItem("input1", JSON.stringify(wins))
     localStorage.setItem("input2", JSON.stringify(loses))
     localStorage.setItem("input1\3", JSON.stringify(total))

     seeEnteredValue ()
     input2El.value = ''
     input1El.value = ''
     input3El.value = ''

   let probofWinning = Math.round((wins/total) *100);
   let proboflosing = Math.round( (loses/total) *100);
   let probofdrawing = Math.round( (draws/total) *100);

   prob1 = ("W 1.80: " + probofWinning + "%");
   prob2= ("L 1.80: " + proboflosing + "%");
   prob3=("D 1.80: " + probofdrawing + "%");
 

   localStorage.setItem("prob1", JSON.stringify(prob1))
   localStorage.setItem("prob2", JSON.stringify(prob2))
   localStorage.setItem("prob3", JSON.stringify(prob3))
   
      result1El.innerHTML = ("W 1.80 : " + probofWinning + "%");
      result2El.innerHTML= ("L 1.80 :" + proboflosing + "%");
      result3El.innerHTML = ("D 1.80 :" + probofdrawing + "%");
   }

   function odds150Prob(){loses.push(input2El.value) ; total.push(input3El.value);wins.push(input1El.value)
     draws = total - loses-wins;
     localStorage.setItem("input1", JSON.stringify(wins))
     localStorage.setItem("input2", JSON.stringify(loses))
     localStorage.setItem("input1\3", JSON.stringify(total))
     seeEnteredValue ()
     input2El.value = ''
     input1El.value = ''
     input3El.value = ''
 
      let probofWinning = Math.round((wins/total) *100);
      let proboflosing = Math.round( (loses/total) *100);
      let probofdrawing = Math.round( (draws/total) *100);

      prob1 = ("W 1.50: " + probofWinning + "%");
      prob2= ("L 1.50: " + proboflosing + "%");
      prob3= ("D 1.50: " + probofdrawing + "%");
 
      localStorage.setItem("prob1", JSON.stringify(prob1))
      localStorage.setItem("prob2", JSON.stringify(prob2))
      localStorage.setItem("prob3", JSON.stringify(prob3))
      
      result1El.innerHTML =("W 1.50: " + probofWinning + "%");
      result2El.innerHTML= ("L 1.50: " + proboflosing + "%");
      result3El.innerHTML =("D 1.50: " + probofdrawing + "%");
      }
    
      function odds120Prob(){loses.push(input2El.value) ; total.push(input3El.value); wins.push(input1El.value)
       draws = total - loses-wins;
       localStorage.setItem("input1", JSON.stringify(wins))
     localStorage.setItem("input2", JSON.stringify(loses))
     localStorage.setItem("input1\3", JSON.stringify(total))
       seeEnteredValue ()

       input2El.value = ''
        input1El.value = ''
        input3El.value = ''
       
      let probofWinning = Math.round((wins/total) *100);
      let proboflosing = Math.round( (loses/total) *100);
      let probofdrawing = Math.round( (draws/total) *100);
      
     prob1 = ("W 1.20: " + probofWinning + "%");
     prob2= ("L 1.20: " + proboflosing + "%");
     prob3 = ("D 1.20: " + probofdrawing + "%");
    

     localStorage.setItem("prob1", JSON.stringify(prob1))
     localStorage.setItem("prob2", JSON.stringify(prob2))
     localStorage.setItem("prob3", JSON.stringify(prob3))


      result1El.innerHTML = ("W 1.20: " + probofWinning + "%");
      result2El.innerHTML= ("L 1.20: " + proboflosing + "%");
      result3El.innerHTML = ("D 1.20: " + probofdrawing + "%");
      
    }

    function clearbtn (){
        localStorage.clear()
        loses = []
        wins = []
        total = []
        input1El.value = ''
        input1E2.value = ''
        input1E3.value = ''
        result2El.innerHTML = 0 +"%"
        result1El.innerHTML = 0 +"%"
        result3El.innerHTML = 0 +"%"
        result2Ela.innerHTML = 0
        result1Ela.innerHTML = 0
        result3Ela.innerHTML = 0

    }



   
   
   
   
   
   
   
   
   