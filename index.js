const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68a65b4a39mshcf2679edfb6b35ap1eda53jsnfed9262c1f89',
		'X-RapidAPI-Host': 'the-giving-lab-thegivinglab.p.rapidapi.com'
	}
};

fetch('https://the-giving-lab-thegivinglab.p.rapidapi.com/users/user/%7BID%7D/activity/?apikey=undefined', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const form = document.getElementById("description-form")

form.addEventListener('submit', function (event){
    event.preventDefault()
})

