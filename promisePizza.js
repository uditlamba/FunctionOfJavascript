function getCheese() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese='🧀';
            console.log("here is the cheese",cheese);
            resolve(cheese); 
        },2000)

    });

}
function makeDough(Cheese) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=Cheese+'🍩';
            console.log("here is the dough",dough);
            resolve(dough); 
        },2000)

    });

}
function bakePizza(dough) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Pizza=dough+'🍕';
            console.log("here is the Pizza",Pizza);
            resolve(Pizza); 
        },2000)

    });

}
getCheese()
.then((cheese)=>{
    console.log("here is cheese",cheese);
    return makeDough(cheese);
})
.then((dough)=>{
    console.llog("here is dough",dough);
    return bakePizza(dough);
})
.then((Pizza)=>{
    console.log("here is the pizza",Pizza);
})
.catch((data)=>{
    console.log("error occured");
})
.finally(()=>{
    console.log("Process ended");
})