document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("description-form")
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const fullName = document.getElementById('fname').value
        console.log(fullName)

        const yourEmail = document.getElementById('email').value
        console.log(yourEmail)

        const itemDescription = document.getElementById('description-form1').value
        console.log(itemDescription)
    })
})

