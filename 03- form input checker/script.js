const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const submit = document.querySelector('.submit')
submit.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();
    if(firstname.value==="" || lastname.value===""){
        alert('input is empty')
    }else{
        alert('input form submited successfully')
    }

})
