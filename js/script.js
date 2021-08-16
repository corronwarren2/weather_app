let weather = {
    "apiKey":"3f3c47133cad2f10ba19eb4582345689",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid="
         + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
displayWeather: function(data) {
    const {name} = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const{ speed } =  data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°";
    document.querySelector(".humidity").innerText = "Humidity:" +  humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading")

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function (){
    weather.search();
} );

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
      weather.search();
    }

});

weather.fetchWeather("Tampa");