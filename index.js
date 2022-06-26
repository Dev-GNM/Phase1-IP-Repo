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
// Render the donation types
let url="http://localhost:3000/donations";
fetch(url)
.then(res =>res.json())
.then(data =>{
    let html='';
data.map(value =>{
    html+=`
    <div class="col-md-3">
    <div class="card" style="width:400px">
        <img class="card-img-top" src="/images/capturer.png" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${value.name}</h4>
          <h3 class="item-description">${value.address.city}</h3>
          <p class="card-text">${value.phone}</p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
</div>
`
}
)
document.getElementById('houses').innerHTML=html;
})
.catch((err)=>console.log(err))
})






