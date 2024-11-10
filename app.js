let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");

let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let cutter=document.getElementById("cutter");

let result=document.getElementById("result");
var user=0;
let one = () => {
    btn1.innerText = "SELECTED"
    btn1.style.border = "3px green";
    btn1.style.color = "green";
    btn1.style.boxShadow = "0 0 20px green";
    btn1.disabled = "true";
    btn2.disabled = "true";
    btn3.disabled = "true";
    user=0;
    setTimeout("com(num)", 2000);
}
let two = () => {
    btn2.innerText = "SELECTED"
    btn2.style.border = "3px green";
    btn2.style.color = "green";
    btn2.style.boxShadow = "0 0 20px green";
    btn1.disabled = "true";
    btn2.disabled = "true";
    btn3.disabled = "true";
    user=1;
    setTimeout("com(num)", 2000);
}
let three = () => {
    btn3.innerText = "SELECTED"
    btn3.style.border = "3px green";
    btn3.style.color = "green";
    btn3.style.boxShadow = "0 0 20px green";
    btn1.disabled = "true";
    btn2.disabled = "true";
    btn3.disabled = "true";
    user=2;
    setTimeout("com(num)", 2000);
}


let num = Math.random() * 3;
let numint=parseInt(num);
// console.log(numint);


function com(num) {
    if (numint === 0) {
        btn1.disabled = "false";
        btn1.innerText = "SELECTED"
        btn1.style.border = "3px red";
        btn1.style.color = "red";
        btn1.style.boxShadow = "0 0 20px red";
        if(user===0){
            result.innerText="Match Draw"
            result.style.padding="5px"
        }
        else if(user===1){
            result.innerText="You win"
            result.style.padding="5px"
        }
        else{
            result.innerText="Computer win"
            result.style.padding="5px"
        }
    }
    else if (numint === 1) {
        btn2.disabled = "false";
        btn2.innerText = "SELECTED"
        btn2.style.border = "3px red";
        btn2.style.color = "red";
        btn2.style.boxShadow = "0 0 20px red";
        if(user===0){
            result.innerText="Computer win"
            result.style.padding="5px"
        }
        else if(user===1){
            result.innerText="Match Draw"
            result.style.padding="5px"
        }
        else{
            result.innerText="You win"
            result.style.padding="5px"
        }
    }
    else {
        btn3.innerText = "SELECTED"
        btn3.style.border = "3px red";
        btn3.style.color = "red";
        btn3.style.boxShadow = "0 0 20px red";
        btn3.disabled = "true";
        if(user===0){
            result.innerText="You win"
            result.style.padding="5px"
        }
        else if(user===1){
            result.innerText="Computer win"
            result.style.padding="5px"
        }
        else{
            result.innerText="Match Draw"
            result.style.padding="5px"
        }
    }
}