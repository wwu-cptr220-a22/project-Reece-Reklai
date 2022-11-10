function sendEmail() {
    const mailjet = require('node-mailjet')
        .connect('****************************1234', '****************************abcd')
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "catherine.thomsen@wallawalla.edu",
                        "Name": "Catherine"
                    },
                    "To": [
                        {
                            "Email": "catherine.thomsen@wallawalla.edu",
                            "Name": "Catherine"
                        }
                    ],
                    "Subject": 'Email Submission ' + document.querySelector('#name').value + ' reply to ' + document.querySelector('#email').value,
                    "TextPart": document.querySelector('#message-box').value,
                    "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}

document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault()
    sendEmail()
})