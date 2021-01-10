const form = document.getElementById("myForm");
form.onsubmit = submit;

function submit(event){
    const isValid = validateEmail();
    if (!isValid)
        event.preventDefault();
}
 
const email = document.getElementById('email');
function validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}