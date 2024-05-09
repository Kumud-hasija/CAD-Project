const display= document.querySelector(".display");
const buttons= document.querySelectorAll("button");

const specialchars =["%","*","/","-","+","="];
let output="";

//define function to calculate based on button
const calculate =(btnValue) => {
    if(btnValue ==="=" && output !==""){
        //if outpu has "% ,replace with '/100' before evaluating.
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue==="AC"){
        output= "";
    }
    else if(btnValue==="DEL"){
        //if del button is pressed remove the last character from the output.
        output = output.slice(0,-1);//.toString().slice....  
    }
    else{
        //if output is empty and buttton is specialChars then return
        if(output=="" && specialchars.includes(btnValue)) return;
        output += btnValue;
      
    }
    display.value = output;
};

//add event listner to buttons,call calculator( on click)
buttons.forEach((button) => {
    //button click listner calls calculator() with dataset value as argument.
    button.addEventListener("click",e => calculate(e.target.dataset.value))
});