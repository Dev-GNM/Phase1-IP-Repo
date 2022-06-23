document.addEventListener('DOMContentLoaded',()=>{
    const itemImage = document.getElementById("item-image")
    const itemDesc = document.getElementById("item-description")
    const donationDesc = document.getElementById("description")
    const itemPic = document.getElementById("myFile")

    // fetch("http://localhost:3000/beers")
    // .then((res)=>res.json())
    // .then((beers)=>{
    //     beerTitle.textContent = beers[0].name
    //     // beerImage.src = beers[8].image_url
    //     beerDesc.textContent = beers[0].description
        
        beers[0].reviews.forEach(review => {
            let reviews = document.createElement('li')
            reviews.style.cursor = 'pointer'
            reviews.innerText = review
            reviewList.appendChild(reviews)
            reviews.addEventListener('click',(e)=>{
                e.preventDefault()
                reviews.remove()
            })
        });
        const reviewForm = document.querySelector('form#review-form')
        reviewForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            const customerReview = document.getElementById("review").value
            const newReview = document.createElement('li')
            newReview.style.cursor = 'pointer'
            newReview.innerText = customerReview
            reviewList.appendChild(newReview)
            reviewForm.reset()
            newReview.addEventListener('click',(e)=>{
                e.preventDefault()
                newReview.remove()
            })
        })
        

        beers.forEach(beer => {
            let beerName = document.createElement('li')
            beerName.innerText = beer.name
            beerList.appendChild(beerName)
            beerName.addEventListener('click',(e)=>{
                e.preventDefault()
                beerTitle.textContent = beer.name
                beerImage.src = beer.image_url
                beerDesc.textContent = beer.description
                beer.reviews.forEach(review => {
                    let reviews = document.createElement('li')
                    reviews.style.cursor = 'pointer'
                    reviews.innerText = review
                    reviewList.appendChild(reviews)
                    reviews.addEventListener('click',(e)=>{
                        e.preventDefault()
                        reviews.remove()
                    })
                });
                
            })
            
        });

    })
})
