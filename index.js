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

        const donFile = document.getElementById('myFile').value
        console.log(donFile)

        if (fullName == '' || yourEmail == '' || itemDescription == '' || donFile == '') {
            swal({
                title: "Fields Empty!",
                text: "Please check the missing fields",
                icon: "warning",
                button: "Ok",
            })
        } else {
            swal({
                title: "Submitted Successfully",
                text: "Success",
                icon: "Yes!",
                button: "Ok",
            })
        }
    })
    const contactForm = document.getElementById("contact-form")
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const firstName = document.getElementById('fname').value
        console.log(firstName)

        const lastName = document.getElementById('lname').value
        console.log(lastName)

        const selectCountry = document.getElementById('country').value
        console.log(selectCountry)

        const addSubject = document.getElementById('subject').value
        console.log(addSubject)
    })
})




