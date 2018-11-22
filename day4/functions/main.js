/*
//ex1,ex2
const calcAge = function(curentYear, bornYear){
    let age = curentYear-bornYear
    return ([age-1,age])
}

const age = calcAge(2017, 1989)
console.log(`You are either ${age[0]} or ${age[1]}`)

//ex3
let isEven = function(num){
    if (num%2===0){
        return (true)
    }
    else{
        return (false)
    }
}

//ex4
let printOddNums = function(nums){
   for(let num of nums){
       if (!isEven(num)){
           console.log(num)
       }
   } 
}

//ex5 
let areYouInHere = function(manyNums,myNum){
    for(let num of manyNums){
        if(myNum===num){
            return true
        }
    }
    return false
}

//ex6
let calculator = {
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    }
}

//ex7
let increaseByNameLength = function(money,name){
    return (money* name.length)
}
let makeRegal = function(name){
 return(`His Royal Highness ${name}`)
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(`${name} has ${money} gold coins`)
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
*/

//extra 1
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
const capitalize = function(str){
    let capitalizedStr = ``
    capitalizedStr = str[0].toUpperCase() //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normally
    return capitalizedStr
  }
const getAge = function(age){
    if(age>55){
        return `a 55+`
    }
    else if (age<21){
        return `an Underage`
    }
    return `${age} years old`
}
let getProfession = function(profession){
    let capedProfession = profession.split(` `)
    for (let word in capedProfession) {
         capitalize capedProfession[word]    }
    return capedProfession
}
const getSummary = function(person){
    let summary = ""
    for(let p in person){
        summary += capitalize(person[p].name)
        summary += ` is ${getAge(person[p].age)} ` //Yes - you can put a function call inside the tick quotes!
        summary += getProfession(person[p].profession)
        //summary += //call function for catchphrase
        //summary += //call function for country + city
    }
    return summary
  }
  console.log(getSummary(people_info))
  