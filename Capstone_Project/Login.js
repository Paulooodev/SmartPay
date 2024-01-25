/*
*   LOGIN FORM WITH VALIDATION.
*/

const myForm = document.querySelector('#LoginForm');
const btnOne = document.getElementById('Submit_btn');
const inputElementsOne = document.getElementById('demo_One');
const inputElementsTwo = document.getElementById('demo_Two');

// We add an event listener to the form for validation purpose.
myForm.addEventListener('submit', e => {
    //  This preventDefault method prevents the form for automatically submitting
        e.preventDefault();

        validatesInputs();
    });

    // An arrow functon to display error messages.
    const Error = (htmlElement, errMessage) => {
        const inputControl = htmlElement.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = errMessage;
    }

    const setSuccess = element => { 
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        window.location.href = "Dashboard.html"
    }

    // An arrow function with a regular expression to check the validity of the username.
    const isValidUsername = (username) => {
        const Name = /^[0-9]{6}$/i;
        // Returned the RegEx for testing
        return Name.test(username);
    }    

    // An arrow function with a regular expression to check the validity of the password.
    const isValidPassword = (password) => {
        const Passwrd = /^[0-9]{11}$/i;
        // Returned the RegEx for testing
        return Passwrd.test(password);
    }    


// Removal of whitespaces in the field input and the validation in each field input
    const validatesInputs = () => {
        const Username = inputElementsOne.value.trim();
        const Password = inputElementsTwo.value.trim();
        
        if(Username === "") {
            Error(inputElementsOne, "Username is required");
        } else if(!isValidUsername(Username)) {
            Error(inputElementsOne, "Username is not Valid")
        } else {
            setSuccess(inputElementsOne)
        }

        if(Password === "") {
           Error(inputElementsTwo, "Password is required"); 
        } else if(!isValidPassword(Password)) {
            Error(inputElementsTwo, "Password is not Valid")
        } else {
            setSuccess(inputElementsTwo)
        }

        
    
    } 