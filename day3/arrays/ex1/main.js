let  pepole = [
    p1={
        name:"Jill",
        age:"",
        city:"",
     },
     p2={
        name:"Robert",
        age:"",
        city:"",
     }, 
] 
let print = `${p1.name} wanted to date ${p2.name}`
if (p1.age===p2.age){
    if(p1.city===p2.city){
        console.log(print)
    }
    else{
        console.log(`${print}, but couldn't`)
    }
}
