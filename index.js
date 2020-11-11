//VARS

const value = document.querySelector(".value");
const pick = document.querySelector(".pick");
const submit = document.querySelector(".submit");
const names = document.querySelector(".name-list");
const clear = document.querySelector(".clear");
const win = document.querySelector(".win");
const lottery = document.querySelectorAll(".lottery");
const close = document.querySelector(".close");
const popUp = document.querySelector(".pop-up");
const numberOfWinners = document.querySelector(".numberOf")


//return
let array = [];
let val;
let arr;


//CALL FUNCTION

close.addEventListener("click", closeIt);

submit.addEventListener("click", () => {

    if(value.value.length == 0){
        value.style.backgroundColor = "red"
        setTimeout(() => {
            value.style.backgroundColor = "#fff"
        }, 100);
    }

    if (value.value != 0) {
        
        createName()
        arr = 0;
        console.log(array);
    }
    value.value = "";
    val = 1;
})
pick.addEventListener("click", () => {
    if (value.value.length > 0) {
        val = 1;
    }
    if (val == 1 && array.length > 0) {
        if(numberOfWinners.value != 0 && numberOfWinners.value <= array.length -1){
            pickName();
            popUp.style.zIndex = "10";
            setTimeout(() => {
                popUp.style.opacity = "100";
            }, 200);
        }if(numberOfWinners.value == 0 || numberOfWinners.value > array.length -1 ){
            alert("Invaid Value!")
        }
       
        
    }

    if(value.value.length > 0 && array.length ==0 ){
        submit.style.backgroundColor = "red"
        setTimeout(() => {
            submit.style.backgroundColor = "#fff"
        }, 100);
    }

    if (value.value == "" && array.length ==0) {
        value.style.backgroundColor = "red"
        setTimeout(() => {
            value.style.backgroundColor = "#fff"
        }, 100);

    }

    

})

//FUNCTIONS
function createName() {
    const candidate = document.createElement("p");
    candidate.setAttribute("class", "lottery")
    candidate.innerText = value.value
    names.appendChild(candidate)
    
    if(arr != 0){
        array = (candidate.innerText.split("\n"))
    }else{
        const cand = candidate.innerText.split("\n");
        array.push(...cand)
    }
    
    clear.addEventListener("click", () => {
        candidate.remove()
        win.innerText = ""
        value.value = ""
        val = 0;
        array.length = 0;
    })

}

function pickName() {

    const number = Math.floor(Math.random() * array.length)
    console.log(array[number]);
    
    win.innerText = "🏆" + " " + array.sort(()=> Math.random() - 0.5).slice(0,numberOfWinners.value) + "🏆"
    if (array[number] == null) {
        win.innerText = "Add name!"
    }

}

function closeIt() {
    
    popUp.style.opacity = "0"
    setTimeout(() => {
        popUp.style.zIndex = "-10";
    }, 300);
    
    
}