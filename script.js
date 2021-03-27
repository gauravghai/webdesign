function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function form_submit(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    document.getElementById('email_erro_msg').innerText = '';
    document.getElementById('password_erro_msg').innerText = '';
    if(email == ''){
        document.getElementById('email_erro_msg').innerText = 'Email is required';
    } else if(!validateEmail(email)){
        document.getElementById('email_erro_msg').innerText = 'Please Provide Valid Email';
    } else if(password == ''){
        document.getElementById('password_erro_msg').innerText = 'Password is required';
    } else {
        alert('submitted');
    }
    
}

