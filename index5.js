// let username = document.getElementById('username');
// console.log(username);

// mouse event
// let username = document.getElementById('username');
// let btn = document.getElementById('btn');

// btn.addEventListener ('mouseenter', (e) => {
//     e.preventDefault();
//     console.log('mouse enter');
    
//     //document.body.style.background = "red";
//     btn.style.background = "red";
//     btn.style.color = "white";
//     btn.style.padding = "15px";
//     btn.style.border = "5px solid black";
// });

// btn.addEventListener('mouseleave', (e) => {
//     e.preventDefault();
//     console.log('mouse leave');

//     //document.body.style.background = "deeppink"
//     btn.style.background = "blue";
//     btn.style.color = "wheat";
//     btn.style.padding = "10px";
//     btn.style.border = "none";

// });

//KeyBoard Event in Javascript

// let input = document.getElementById('username');

// input.addEventListener('keyup',(e) => {
//     console.log(e.target.value);
    
// });

// keyboard event by jquery
// jQuery(document).ready(function() {
//     jQuery('#username').on ('keyup', (e) => {
//         // console.log(e.target.value);
//         let test = jQuery(this).val();
//         console.log(test);
        
//         })
// })


//. .........client side form validation....

// let form = document.getElementById('form');
// let errors = document.getElementById('errors')
// let username = document.getElementById('username');
// let password = document.getElementById('password');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//         alert('form submitted');
//});


let form = document.getElementById('form');
let errors = document.getElementById('errors')
let username = document.getElementById('username');
let password = document.getElementById('password');

    form.addEventListener('submit', (e) =>{
    let messages = [];

    if (username.value === "" || username.value === null) {
    messages.push(`<p class = " alert alert-danger">Username is required</p>`)
    }

    if (password.value === "" || password.value === null) {
        messages.push(`<p class=" alert alert-danger">Password is required</p>`)
    }

    if (password.value.length<5){
      messages.push(`<p class = "alert alert-danger">Password should be minimum 5 character</p>`)
    }

    if (messages.length>0){
        e.preventDefault();
        errors.innerHTML = messages.join("")
    }   


});//form Submitting