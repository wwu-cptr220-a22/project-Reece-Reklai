const submit = document.querySelector('#submit-button')

document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault()
    // adding event to let user know their form was submited
    submit.value = "Message Sent!"
    setTimeout(() => { submit.value = "Submit" }, 5000)
})