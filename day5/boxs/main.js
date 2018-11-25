
let randamize = function(box){
    console.log(box)

    let color = `#${colorPicker()}`

    box.style.backgroundColor = color //[colorPicker(),colorPicker(),colorPicker()]
}
let colorPicker = function(){
    // let cs = ['blue', 'red']
    // cs[Math.floor(Math.random()*cs.length)]
    let color=``
    for(let p=0; p<6;p++){
        let prop = Math.floor(Math.random()*16)
        if (prop<9){
            color+=prop
        }
        else{
            color+=hexValueInRGB[prop]
        }
    }
    return color
}
//make object:{keys (0-15), value 0-9then A-F} 
const hexValueInRGB = {
    10:`A`,
    11:`B`,
    12:`C`,
    13:`D`,
    14:`E`,
    15:`F`
}
let a=0
for(let p=0;p<6;p++){
    let box = document.createElement("div")
    box.setAttribute(`id`,`${a}`)
    box.setAttribute(`class`,`box`)
    box.onmouseover = function(){
        randamize(this)
    }
    document.getElementsByClassName('mother')[0].appendChild(box)
    a += 1
}