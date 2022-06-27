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



// Render the donation types
// const options = {
//     method: 'GET',
//     headers: {
//     }
// };
// function getAllDonations() {
//     let url = ("http://localhost:3000/donations")
//     fetch(url)
//         .then(res => console.log(res.json()))
//         .then(data => {
//             let html = ""
//             donations.map ( donations => {
//                 html += `
//              <div class="don-sect">
//              <div class="col-sm2" id="recent-don">
//              <h3>Item Donated</h3>
//              <img src=" ${donations.imageurl}" alt="">
//              <h4> ${donations.type}</h4>
//              <h4> ${donations.itemdescription}</h4>
//              </div>
//             </div>   
//             `
//             }
//             )
//         })
//         .catch (err => console.error(err))
//     document.getElementById('new-sect').innerHTML = html
// }

            

// // Initialize
// // function initialize() {
// //     initialize()
// // }
// // initialize()

document.addEventListener('DOMContentLoaded', () =>{
    getAllDonations()


})
function getAllDonations (){
    fetch (" http://localhost:3000/donations")
    .then (res => res.json()) 
    .then (data => {
        data.forEach(donationObject => {
            // console.log(donationObject)
            const recent = document.getElementById('recent1')
            listEl = document.createElement('li')
            listEl.innerText = donationObject.type;
            recent.appendChild(listEl)
            listEl.addEventListener ('click', function (){
                const donationIMage = document.getElementById('item-image')
                const donationDesc = document.getElementById('item-description')
                donationIMage.src = donationObject.imageurl
                donationDesc.innerText = donationObject.itemdescription
                donationDesc.className = 'don'
            })
        });
    })
}





