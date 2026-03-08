



   const userInput=document.getElementById('username-input')
const passwordInput=document.getElementById('password-input');
const SignButton=document.getElementById('sign-in-btn');
const errorMsg=document.getElementById('error-msg');

SignButton.addEventListener('click',()=>{
const username=userInput.value;
const password=passwordInput.value;

    if(username==='admin' && password==='admin123'){
        alert("LogIn Successful");
        window.location.href='homepage.html';
        return;
    }
   else if(username === "" || password === ""){
    errorMsg.textContent = "Please enter username and password";
}
else if(username !== "admin" || password !== "admin123"){
    errorMsg.textContent = "Wrong username or password";
    userInput.value="";
    passwordInput.value="";
}
     
});
