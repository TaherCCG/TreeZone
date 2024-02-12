/*  NOTE:
    This file is not live on the website yet, nor is it linked to any page.
    The code below is still in progress.
    None of the IDs or classes used in the code below are live on the website yet.
    The code below is just a draft and still in progress. 
    I will update the code below once it is working and live on the website.
    Please ignore the code below for now.

    Thank you.
*/

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
};

function formtype() {
    // Get the form by ID
    let form1 = document.getElementById("contact-form");
    let form2 = document.getElementById("sign-up-form");
    let form3 = document.getElementById("newsletter-form");
    
    // Get the username inputs from each form
    let username1 = form1.querySelector("input[name='username']");
    let username2 = form2.querySelector("input[name='username']");

    // Get the email input from Newsletter form as no username is required for newsletter.
    let newsletterEmail = form3.querySelector("input[name='email']");

    // Set the message based on the form type    
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

};




function displayMessage() {
   // formtype();
    greet();
    console.log(greeting + ", \n" + "How are you today?" ); // This is just to check if the message is correct in the console.
};

displayMessage(); // This is just to check if the message is correct in the console.

