/*
//ex1
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert `I'm not longer hungry`

  //ex2
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

 //ex3
 const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  },
  fuel:``
}

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

//ex4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins:function(amount){
    this.coinCount -= amount
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount); 

//ex5
const revealSecret = function () {
  return this.secret;
}

const shoutIt = function (person, func) {
  person.revealItAll = func
  const result = person.revealItAll()
  alert(`${person.name} said: ${result}`)
}

const avi = {
  name: `Avi`,
  secret: `Im scared of snakes!`
}

const narkis = {
  name: `Narkis`,
  secret: `I dont have secrets because I'm zen like that.`
}

shoutIt(avi, revealSecret)
shoutIt(narkis, revealSecret)
*/

//ex6
const CALLMEmoney = function(){
  console.log(coffeeShop.money)
}
const coffeeShop = {
  buyDrink: function(drinkType){
    this.money+=this.drinkRequirements[drinkType].price
    CALLMEmoney()
  },
  buyBeans: function(numBeans){
    this.money-=(numBeans*this.costPerBean)
    CALLMEmoney()
  },
  makeDrink: function (drinkType) {
    let numBeansForDrink = this.drinkRequirements[drinkType]
    if (!(this.drinkRequirements[drinkType])) {
      alert(`Sorry we don't make ${drinkType}`)}
      else if (this.beans<numBeansForDrink){
        alert(`Sorry, we're all out of beans!`)}
        else{
          this.beans-=this.drinkRequirements.drinkType
          this.buyDrink(drinkType)
        }
      },
  money: 17,
  beans: 40,
  costPerBean: 3,
  drinkRequirements: {
    latte:{beanRequirement: 10, price: 6},
    americano:{beanRequirement: 5, price: 3},
    doubleShot:{beanRequirement: 15, price: 7},
    frenchPress:{beanRequirement: 12, price: 6.5}
  },
}
    
coffeeShop.makeDrink(`latte`); 
coffeeShop.makeDrink(`americano`);
coffeeShop.makeDrink(`filtered`); //should alert/console `Sorry, we don't make filtered`
coffeeShop.makeDrink(`doubleShot`);
coffeeShop.makeDrink(`frenchPress`); //should alert/console `Sorry, we're all out of beans`
