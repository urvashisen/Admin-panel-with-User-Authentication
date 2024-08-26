
const formOpenBtn = document.querySelector("#form-open"),
    Home = document.querySelector(".Home"),
    formContainer = document.querySelector(".form-container"),
    formCloseBtn = document.querySelector("#form-close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login");

    console.log(formOpenBtn, Home, formContainer, formCloseBtn, signupBtn, loginBtn);

    formOpenBtn.addEventListener("click", () => {
        console.log("Login button clicked");
        Home.classList.add("show");
        formContainer.style.opacity = '1';
        formContainer.style.pointerEvents = 'auto';
        document.querySelector('.login-form').style.display = 'block';
        document.querySelector('.signup-form').style.display = 'none';
    }); 

    formCloseBtn.addEventListener("click", () => {
        console.log("Close button clicked");
        Home.classList.remove("show");
        formContainer.style.opacity = '0';
        formContainer.style.pointerEvents = 'none';
    });

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Switch to signup clicked");
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.signup-form').style.display = 'block';
    });

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Switch to login clicked");
        document.querySelector('.login-form').style.display = 'block';
        document.querySelector('.signup-form').style.display = 'none';
    });


function myGeeks() {
    document.querySelector("#form-open").
    onclick = function () {
    alert("Button Clicked");
    }
}

// signup user
document.getElementById('signupBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action if needed
    signupUser(); // Call the sendMail function
});

function signupUser(){
    const EMAILJS_SERVICE_ID = 'service_g1s8msn';
    const EMAILJS_TEMPLATE_ID = 'template_zz08lyt';
    // Collect form data
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirm-password').value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const signupButton = document.getElementById('signupBtn');
    signupButton.disabled = true;
    signupButton.textContent = 'Sending...';

    // Store user data in local storage
    const user = 
    {   name: name, 
        email: email,
        password: password 
    };
    
    localStorage.setItem(email, JSON.stringify(user));
    
    // Send email using EmailJS
    const formData = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
        
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert("Sign up successful! Email sent.");
            document.getElementById('signupform').reset();
        }, function(error) {
            console.error('EmailJS error:', error);
            alert('Oops! Something went wrong. Please try again later.');
        })

        .finally(function() {
            // Re-enable the button and reset its text
            signupButton.disabled = false;
            signupButton.textContent = 'Signup Now';
        });
        
}

// login-user
function loginUser() {
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password-pwd').value;

    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    // retrive data from local storage
    const storedData = localStorage.getItem(email);

    if (!storedData) {
        alert('User not found. Please sign up first.');
        return;
    }

    const userData = JSON.parse(storedData);

    if (password === userData.password) {
        localStorage.setItem('loggedInUserEmail', email);
        alert('Login successful!');
        document.getElementById('login-form').reset();
        window.location.href = 'admin.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
