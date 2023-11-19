let btn = document.getElementById("shorten");

btn.addEventListener('click', shorten);
const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '9e456b083amsh3c439cf589d94d9p1fe277jsn5aea1141d0cd',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
	body: new URLSearchParams({
		url:"https://www.fotojet.com/apps/?entry=design&category=youtube-channel-art"
	})
};
async function shorten(){
    try {
        let shortURL = document.getElementById("shorturl");
        const response = await fetch(url, options);
        const result = await response.json();
        shortURL.value = result.result_url;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
