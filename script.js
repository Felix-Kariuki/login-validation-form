const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone= document.getElementById('phone');
const password = document.getElementById('password');
const password2= document.getElementById('password2');


/*const isEmailCorrect = (emailValue) =>{
    var atSymbol = emailValue.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailValue.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot == emailValue.length - 1) return false;
    return emailvalue;
}*/
//add event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
});


    const sendData = (usernameValue,sRate, count) => {
        if (sRate == count) {
            alert('Registration Successful');
            swal("welcome!"  + usernameValue, "Registration Successful", "success");
            /*location.href = 'demo.html?username=${usernameValue}'*/
        }
    }


//form validation

    const successMsg = (usernameValue) => {
        let formControl = document.getElementsByClassName('form-control');
        var count = formControl.length-1;
        for (var i = 0; i < formControl.length; i++) {
            if (formControl[i].className == "form-control success") {
                var sRate = 0 + i;
                console.log(sRate);
                sendData(usernameValue,sRate, count);
            } else {
                return false;
            }
        }
    }
//validation function defination
const validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //validate username 
    if (usernameValue == "") {
        setErrorFor(username, 'username cannot be blank');
    }else if(usernameValue.length < 5){
        setErrorFor(username, 'Username cannot be less than 5 characters');
    }else{
        setSuccessFor(username);
    }

    //validate Email
    if (emailValue == "") {
        setErrorFor(email, 'Email cannot be blank');
    }else if (!isEmailCorrect(emailValue)) {
        setErrorFor(email, 'Email is not Valid')
    }else{
        setSuccessFor(email);
    }

    //validate phone
    if (phoneValue == '') {
        setErrorFor(phone, 'Phone cannot be blank');
    }else if (phoneValue.length < 10) {
        setErrorFor(phone, 'Incorrect phone number');
    }else{
        setSuccessFor(phone);
    }


    //validate password
    if (passwordValue == '') {
        setErrorFor(password, 'Password cannot be blank');
    }else if(passwordValue.length < 7) {
        setErrorFor(password, 'password cannot be less than 7 characters');
    }else {
        setSuccessFor(password);
    }
    if (password2Value == '') {
        setErrorFor(password2, 'password cannot be blank');
    }else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'passwords do not match');
    }else if(password2Value.length < 7) {
        setErrorFor(password2, 'password cannot be less than 7 characters');
    }else {
        setSuccessFor(password2);
    }
    successMsg(usernameValue);
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = form.querySelector('small');

     //add error class
     formControl.className = 'form-control error';

    //adding error message in small
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
 function isEmailCorrect(emailValue) {
    return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue);
 };