let myList = [
    {ob1: "b"},
    {ob2: "c"}
]
console.log(myList)
myList[0].ob1 += "ajhvkjv"
console.log(myList[1])
console.log(myList)
myList.splice(1,1)
console.log(myList)
//ex3 here
let newArrayJustCus = [
    {imAnObject: "Halooo"},
    {imAlsoAnObject: "Hooraw"}
]
myList.push(...newArrayJustCus)
console.log(myList)
//ex4 here
let library ={
    books: [{
        title:"The Voyger",
        author:"dono" 
    },{
        title:"whatever",
        author:"yourface"
    },{
        title:"knk",
        author:"sadf"
    }]
}
myList.push(...library)
console.log(myList)
