const green = document.querySelector('.btn-green')
const red = document.querySelector('.btn-red')

red.addEventListener('mouseenter', function(){
    green.style.display = 'block'
})
red.addEventListener('mouseleave', function(){
    green.style.display = 'none'
})