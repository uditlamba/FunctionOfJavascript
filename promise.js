const ticket=new Promise(function(resolve,reject){
    const isBoarded=false;
    if(isBoarded){
        resolve("You are in the flight");
    }else{
        reject("Your flight is cancled");
    }
    
});

ticket
.then((data)=>{
    console.log("wohoo",data);  

})
.catch((data)=>{
    console.log("oh no",data);
})
.finally(()=>{
    console.log("i always run");
})