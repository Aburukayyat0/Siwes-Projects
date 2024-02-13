const apiKey = "0d17836d110854c7bb6e8b530613e230";
const apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchBox");
const SearchBtn = document.getElementById("SearchBtn");
const humidity = document.getElementById("humidity");
const cityName = document.getElementById("cityName");
const windSpeed = document.getElementById("windSpeed");
const weatherTypeImg = document.getElementById("weatherTypeImg");
const tempreture = document.getElementById("tempreture");

// calling tthe function when button is click and passing the value of the city name as parameter.
SearchBtn.addEventListener("click",()=>{
    weatherApp(searchBox.value);  
});



const data = "";

async function weatherApp(cityName){
    // collecting data from weather api.
    const response = await fetch(apiLink + cityName + "&appid=" + apiKey);
    

    // check if there is error when fetching the data
    if(response.status === 200){
        const data = await response.json();

    // printing the data on the webpage
    tempreture.innerHTML = Math.floor(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    document.getElementById("cityName").innerHTML = data.name;
    windSpeed.innerHTML = data.wind.speed + " km/h";

    // checking and changing the image depending on the weather condition

    console.log(data);

    }


}

 