// JavaScript file to display a message on the response page is still in progress and not live on the website yet
// Still working on JS code to display the message on the response page
// I will be using the DOM to display the message
// Learning more about the DOM and how to use it to display the message
// The code below is a work in progress and not live on the website yet


let message;
let username;
let email;
let greeting;


function greet() {
    let currentTime= new Date();
    let currentHour = currentTime.getHours();
    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
}

function formtype() {
    // Get the form by ID
    let form1 = document.getElementById("contact-form");
    let form2 = document.getElementById("sign-up-form");
    let form3 = document.getElementById("newsletter-form");
    
    // Get the username inputs from each form
    let username1 = form1.querySelector("input[name='username']");
    let username2 = form2.querySelector("input[name='username']");

    // Get the email input from Newsletter form
    let newsletterEmail = form3.querySelector("input[name='email']");

    if (username1) {
        username = username1.value;
        message = "Thank you for your message, " + username + ". We will get back to you soon!";
    } else if (username2) {
        username = username2.value;
        message = "Thank you for signing up, " + username + ". We will keep you updated!";
    }else if (newsletterEmail) {
        email = newsletterEmail.value;
        message = "Thank you for subscribing, " + email + ". We will keep you updated!";
    }

}




function displayMessage() {
    formtype();
    greet();
    console.log(greeting + ", " + message);
}

