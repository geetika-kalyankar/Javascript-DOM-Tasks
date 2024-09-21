const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
let h1 = document.querySelector('h1')
let interval

start.addEventListener("click", function(){
    let count = 1
    interval = setInterval(function() {
        h1.textContent = count
        count++
    }, 1000);
});

stop.addEventListener("click", function(){
    clearInterval(interval)
})

//Synchronous JavaScript -> sync ->(line by line) ->linear
//Array, loops, conditional statements
//Asynchronous JavaScript -> independent 

// setTimeout(()=>{
//     console.log('hello!');
//     //clearTimeout(ID)
// }, 5000)


// let count=0
// const interval = setInterval(()=>{
//     count++
//     if(count===9){
//         clearInterval(interval)
//     }
//     console.log(count);
// },1000)

