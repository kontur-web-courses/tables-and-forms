const form = document.getElementById("myForm");

function submit(event){
    const isValidEmail = validateEmail() && validatePhone();
    if (!isValid)
        event.preventDefault();
}
 
const email = document.getElementById('email');
function validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const phone = document.getElementById('phone');
function validatePhone() {
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(String(phone).toLowerCase());
}