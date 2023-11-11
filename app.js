// 1. Variable declaration for all elements needed in the DOM 
const form = document.getElementById("form")
const emailInput = document.getElementById("forminput")
const formBtn = document.getElementById("formbtn")
const formError = document.getElementById("errormessage")
const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalbtn")
const modalEmail = document.getElementById("modalemail")


// 2. Regex Email Validation Function
function emailValidation(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// 3. Real-time Email Validation with colors for form input
emailInput.addEventListener("input", function () {
    if (emailValidation(emailInput.value)) {
      emailInput.classList.add('email-input-ok');
      removeErrors();
    } else {
      addErrors(); 
      emailInput.classList.remove('email-input-ok');
    }
});

// 4. Functions for adding errors on screen removing errors on screen
const removeErrors = () => {
  formError.classList.add('hidden'); 
  emailInput.classList.remove('email-input-error__active'); 
}

const addErrors = () => {
  formError.classList.remove('hidden'); 
  emailInput.classList.add('email-input-error__active'); 
  emailInput.classList.add('email-input-error__active::placeholder'); 
}

// 5. Functions for hiding form showing form / hiding modal showing modal 
const hideForm = () => {
  form.classList.add('hidden'); 
  form.classList.add('sm:hidden')
}

const showForm = () => {
  form.classList.remove('hidden'); 
  form.classList.remove('sm:hidden'); 
}

const showModal = () => {
  modal.classList.remove('hidden'); 
}

const hideModal = () => {
  modal.classList.add('hidden')
}

const resetForms = () => {
  document.forms['form'].reset(); 
}

// 6. Eventlistener for removing error message from input field when user clicks back into the input field to enter email again
emailInput.addEventListener('click', () => {
  removeErrors()
})

// 7. Eventlistener for form button when clicked validates email entered if valid email removes form adds modal to screen if email invalid adds errors to input box and displays invalid email error message for user to try adding email again
formBtn.addEventListener('click', () => {
  if(emailValidation(emailInput.value)) {
    hideForm();
    modalEmail.innerText = emailInput.value; 
    showModal(); 
    event.preventDefault(); 
  } else {
    addErrors(); 
    event.preventDefault(); 
  }
})

// 8. Eventlistener for modal button to remove modal with success message and return to starting form while resetting email input field
modalBtn.addEventListener('click', () => {
  hideModal(); 
  showForm(); 
  emailInput.value = ''; 
  emailInput.classList.remove('email-input-ok');
  removeErrors(); 
})


 
