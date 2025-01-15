const apikey = "d3eb798cdf9d60d435cf023a81655fe2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const button = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon");

async function checkwheather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " Km/h";

        // Dynamically set the weather icon
        wheatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

button.addEventListener("click", () => {
    checkwheather(searchbox.value);
});