/*
//ex1
let names = ["jon","tess","ben"]
let ages = [10,23,134]
for (const p in names) {
    console.log(`${names[p]} is ${ages[p]} years old`)
} 
//ex2 
let num = [13,43,35,65,345,2,56,35421,36]
let sum=0
for(let p of num){
    sum += p
}
console.log(sum)
//ex3
let avrg = sum / (num.length)
console.log(avrg)
//ex4
let nums = []
for (let i = 1; i < 101; i++) {
    nums.push(i)
}
console.log(nums)
//ex5
for( let p in nums){
    if(nums[p]%2===1){
        nums.splice(p,1)
    }
    console.log(nums[p])
}
//ex6
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let p in names){
    people.push({
        name:names[p],
        age:ages[p]
    })
    //let nam=names[p],ag=ages[p]
    //people.push({name:[nam],age:[ag]})
    console.log(people[p])
}
//ex7
for(let p in people){
    console.log(`${people[p].name} is ${people[p].age} years old`)
}
//ex8
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let p in posts){
    if(posts[p].id === 2){
        posts.splice(p,1)
    }
    console.log(posts[p])
}
//ex9
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []},
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "I agree!"}, {id: 3, text: "Fool!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]
  for(let p in posts){
    if(posts[p].id === 2){
        for(let c in posts[p].comments){
            if(posts[p].comments[c].id===2){
                posts[p].comments.splice(c,1)
            }
        }
    }
    console.log(posts[p])
}*/
//extra
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  for(let p in dictionary){
      console.log(`Words that begin with ${p}:`)
      for(let c in dictionary[p]){
          console.log(dictionary[p][c])            
      }

  }