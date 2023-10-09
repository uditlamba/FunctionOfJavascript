// console.log("udit lamba ");
//  setTimeout(function(){
//     console.log("This execute later");
//  },2000);
//  // it execute the  function in give fix milisecond

//  console.log("world");
//  console.log("One");

function getcheese(){
    setTimeout(() => {
        const cheese="🧀";
        console.console.log('here is cheese',cheese);
        Callback(cheese);
},200);


getcheese((cheese) => {
    console.log("got the cheese",cheese);
});
}