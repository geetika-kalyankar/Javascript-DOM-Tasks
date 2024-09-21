const counter = document.querySelector('.counter')
const textarea = document.querySelector('textarea')
textarea.addEventListener('input', function() {
    counter.innerText = textarea.value.length
})