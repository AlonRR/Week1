let validate = function(){
    let name = document.getElementById(`name`).value
    let salary = document.getElementById(`salary`).value
    let birthday = document.getElementById(`birthday`).value
    let phone = document.getElementById(`phone`).value
    if (name.length<3){
        missingThing(`name`)
    }
    if (salary<10000||salary>16000){
        missingThing(`salary`)
    }
    if (!birthday){
        missingThing(`birthday`)
    }
    if(phone.length<10){
        missingThing(`phone`)
    }
    if(!document.getElementById(`main`)){
        document.getElementById(`main`).style.display = `none`
    }
}
let missingThing = function(thing){
    let thg = document.createElement(`div`)
    thg.setAttribute(`class`,`miss`)
    thg.innerText= `${thing} is missing`
    thg.style.color = `red`
    document.body.appendChild(thg)
}