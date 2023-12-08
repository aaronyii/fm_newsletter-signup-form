const container = document.querySelector(".container")
const email = document.getElementById("email")
const submitBtn = document.querySelector(".left form button")
const emailPlaceholder = document.querySelector(".success-container .email")
const dismissBtn = document.querySelector(".success-container .dismiss")
const successContainer = document.querySelector(".success-container")
const errorMessage = document.querySelector(".left label .invalid")
const emailInput = document.querySelector(".left input")


// const emailExist = email.value.trim().length > 0 && email.value.indexOf('@') > -1




submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    const emailExist = email.value.trim().length > 0 && email.value.indexOf('@') > -1
    console.dir(errorMessage)
    if (emailExist) {
        container.classList.add("hidden")
        successContainer.classList.remove("hidden")
        emailPlaceholder.innerHTML = email.value
        email.value = ""
        errorMessage.classList.add("hidden")
        emailInput.classList.remove("invalid-input")
    }
    else {
        errorMessage.classList.remove("hidden")
        emailInput.classList.add("invalid-input")
    } 

})

dismissBtn.addEventListener('click', () => {
    successContainer.classList.add("hidden")
    container.classList.remove("hidden")
    emailPlaceholder.innerHTML = ""
})


