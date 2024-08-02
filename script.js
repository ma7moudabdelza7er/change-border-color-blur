// let inputColor = document.querySelector("#base")
// let inputBlur = document.querySelector("#blur")
// let inputBorder = document.querySelector("#spacing")
// let img = document.querySelector("img");
// // blur event
// inputBlur.addEventListener("click",function(){
    //     img.style.filter = `blur(${inputBlur.value}px)`
    // })
    // // border event
    // inputBorder.addEventListener("click",function(){
        //     img.style.border = `${inputBorder.value}px solid black`
        // })
        // // border color
        // inputColor.addEventListener("change",function(){
            //     img.style.borderColor = `${inputColor.value}`
            // })
            
// ##########################another solve ################################
let img = document.querySelector("img");
let input = document.querySelectorAll(".controls input")
input.forEach(function(el){
    el.addEventListener("change",function(e){
        if(e.target.classList.contains("border")){
            img.style.border = `${e.target.value}px solid black`
        }else if(e.target.classList.contains("blur")){
            img.style.filter = `blur(${e.target.value}px)`
        }else if(e.target.classList.contains("color")){
            img.style.borderColor = `${e.target.value}`
        }
    })
})