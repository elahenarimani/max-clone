"use strict"
let number;
let sum=0;
let average;
let i;
let num1;
for(i=0; i<100 ; i++){
number=Number(prompt());
if(i>=1){
    if(number>=num1){
        num1=number;
    }
}else{
    num1=number;
}
}
console.log(num1);