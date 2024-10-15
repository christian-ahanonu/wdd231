const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCaption = document.querySelector("figcaption");

const key = "f8b61c6a8480f40134110dc75c051335" 
const lat = "49.7499"
const long = "6.6333"
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
 


async function apiFetch2() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            // throw new Error("Network error 😋");
            throw new Error(await response.text());
        }

        const data = response.json();
        // console.log(data);
        // displayResults(data);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}

apiFetch2();


async function displayResults() {
    
    try{
        const data = await apiFetch2();
        // console.log(data);

        if (data) {
            currentTemp.innerHTML = `${data.main.temp}&deg;C`;

            weatherIcon.innerHTML = `${data.weather[0].icon}`;
            weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/04d@2x.png");
            weatherIcon.setAttribute("alt", "Weather icon");
        
            figCaption.innerHTML = `${data.weather[0].description}`
        
        }

    } catch (error) {
        console.log(error)
    }
}

displayResults()











