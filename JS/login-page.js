const loginform = document.getElementById("login-form");
const loginsubmit = document.getElementById("login-form-submit");

loginsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginform.username.value;
    const password = loginform.password.value;

    if(username!="" && password!=""){
        alert("you have successfully logged in!");
        location.href="Home.html";
    }
    else
    {
        alert("please provide any username & password to login");
        location.reload();
    }
})
