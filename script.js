// Declaration of variables
let body = document.querySelector('body');
let hamburger = document.querySelector('#hamburger i');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelectorAll('.link');
const signUpForm = document.querySelector("#form");

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");

    if (navLinks.style.left != "50%"){
        navLinks.style.left = "50%";
        body.style.overflowY = 'hidden'
    }else {
        navLinks.style.left = "150%";
        body.style.overflowX = 'hidden'
        body.style.overflowY = 'scroll'
    }

    links.forEach( link =>{
        link.style.visibility = 'hidden'
        setTimeout(()=>{
            link.style.visibility = 'visible'
        }, 300)
    })
})

// form button
signUpForm.addEventListener('submit', function (event){
    event.preventDefault();

    const firstName = document.querySelector('.firstname').value;
    const lastName = document.querySelector('.lastname').value;
    const userName = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    const userInfo = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
    };

    alert(JSON.stringify(userInfo));

    signUpForm.reset();
});

