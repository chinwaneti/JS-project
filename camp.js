const height = document.getElementById("height")
const weight = document.getElementById("weight")
const para = document.querySelector("p")
const btn = document.querySelector("button")

// function mma(){
//     let x = " "
//     if(x % 2 === 0){return "fizz"}
//     else if(x % 3===0){return "buzz"}
//     else if (x % 2 === 0 || x % 3 === 0){return "fizzbuzz"}
//     else{return mma}}
// mma(34)
function mma() {
    let w = weight.value
    let h = height.value / 100
    let status
    const val = w / (h ** 2)


    if (val >= 30) { status = "obesity" } else if (val >= 25) { status = "over weight" } else if (val >= 18.5) { status = "normal weight" } else { status = "underweight" }
    return para.textContent = status
}

btn.addEventListener('click', mma)



// h <= 6 ? x % 3 === 0 ? alert("fizzbuzz") :
//     x % 2 === 0 ? "fizz" : x % 3 === 0 ? "buzz" : x