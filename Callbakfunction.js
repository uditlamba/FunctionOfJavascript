const calculate=(a,b,operation)=> {
    return operation(a,b);
     

};
const addition=calculate(2,4,function(num1,num2){
    return num1 + num2;

}) ;
console.log(addition);


const subtract=calculate(5,1,function(num1,num2){
    return num1 - num2;
});
console.log(subtract);

const mult=calculate(2,5,function(num1,num2){
    return num1*num2;
});
console.log(mult);

const div=calculate(8,1,function(num1,num2){
    return num1/num2;
});
console.log(div);
const other1 = calculate(2,5,function(){
    console.log("no operation performed");
});
console.log(other1);