const skyIMag = document.querySelector(".container .sky img");
const temp = document.querySelector(".container .tempandcity .temp");
const cityName = document.querySelector(".container .tempandcity .city");
const humidity = document.querySelector(".container .humi-and-wind .humidity div .humidity-percent");
const windSpeed = document.querySelector(".container .humi-and-wind .wind div .wind-speed");
let btn = document.querySelector(".container .search .searchicon i");


let getSection = document.querySelector("section");
let getSky = document.querySelector(".sky");
let getTempCity= document.querySelector(".tempandcity");
let getHumiWind = document.querySelector(".humi-and-wind");


 const APIKey = 'df6300fd82a25b287646496e7c018309';
 const APIUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
 let cityEntered = document.querySelector(".container .search input");

  

 async function chechWeather(city){
    const response = await fetch(APIUrl + city+ `&appid=${APIKey}`);
    var data = await response.json();
    if(city.trim() == ''){
        displayError();
    }
    else{
        try {
            getSection.style.visibility="hidden";
            getSection.style.height="0px";
            getSky.style.visibility="visible";
            getTempCity.style.visibility="visible";
            getHumiWind.style.visibility="visible";    
            temp.innerHTML= Math.round(data.main.temp) + "°c";
            cityName.innerHTML=data.name;
            humidity.innerHTML=data.main.humidity+"%";
            windSpeed.innerHTML=data.wind.speed +"Km/h"
            let sky = data.weather[0].main.toLowerCase();

            skyIMag.setAttribute("src","images/"+sky+".png");
            
        } catch (error) {
            displayError();
        }
    }
    console.log(data);
    
 } 

 function displayError(){
    getSection.innerHTML="<img src='images/404.png' alt='error message' style='width:400px;'><p style='text-align:center;'>location not found</p>"
        getSection.style.visibility="visible";
        getSection.style.height="100vh";
        getSky.style.visibility="hidden";
        getTempCity.style.visibility="hidden";
        getHumiWind.style.visibility="hidden";
 }
//  chechWeather();
btn.addEventListener('click', function(){
    chechWeather(cityEntered.value);
})