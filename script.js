// чтобы надписи label поднимались вверх при фокусе
document.querySelectorAll(".inputbox input").forEach((input) => {
    // фокус на input
    input.addEventListener('focus', function (){
        input.parentElement.querySelector('label').style = "top: -5px;";
    })

    // пропал фокус на input
    input.addEventListener('blur', function (){
        // опускать надпись, только если ничего не написано в окне 
        if (input.value == "") {
            input.parentElement.querySelector('label').style = "top: 50%;";
        }
    })
})


// показать пароль
document.querySelector('.open-password').addEventListener('click', function(icon) {
    let input = this.parentElement.querySelector('input')
    
    if  (input.type === 'password'){
        input.setAttribute("type", "text");
        this.setAttribute("name", "lock-open-outline");
    }
    else {
        input.setAttribute("type", "password");
        this.setAttribute("name", "lock-closed-outline");
    }
})

