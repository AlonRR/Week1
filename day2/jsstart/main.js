let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
let res
if(boughtTesla){
    if(isUSCitizen){
        if(currentYear-yearOfTeslaPurchase<=4){
            res="Would you like an upgrad?"
        }
        else{
            res="Are you satisfied?"
        }
    }
    else{
        res="would you like to move to the USA?"
    }
}
else{
    res="Are you interested in a Tesla for yourself?"
}
console.log(res)