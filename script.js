const APIKEY = "YOUR_API_KEY"
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function checkWeather(){
    const CITYinput = document.getElementById("INPUT").value
    const response = await fetch(APIURL+`&appid=${APIKEY}&q=${CITYinput}`)
    const data = await response.json()
    console.log(data)
    var MAINimg = document.querySelector(".weatherimg img")
    var WEATHERtext = document.querySelector(".description")
    var CITYtext = document.querySelector(".city")
    var TEMPtext = document.querySelector(".temperature")
    var HUMIDITYtext = document.querySelector(".humidityvalue")
    var WINDtext = document.querySelector(".windvalue")

    let temp = data.main.temp
    let humidity = data.main.humidity
    let windspeed = data.wind.speed
    let weather = data.weather[0].main
    let country = data.sys.country

    if (weather == "Thunderstorm" || weather == "Rain" ){
        MAINimg.src = "images/rain.png"
    }
    else if (weather == "Drizzle"){
        MAINimg.src = "images/drizzle.png"
    }
    else if (weather == "Snow"){
        MAINimg.src = "images/snow.png"
    }
    else if (weather == "Clear"){
        MAINimg.src = "images/clear.png"
    }
    else if (weather == "Clouds"){
        MAINimg.src = "images/clouds.png"
    }
    else if (weather == "Mist"){
        MAINimg.src = "images/mist.png"
    }

    if (temp<=0){
        TEMPtext.style.color = "blue"
    }
    else{
        TEMPtext.style.color = "orange"
    }
    CITYtext.innerHTML = CITYinput.toUpperCase()+","+country
    WEATHERtext.innerHTML = weather
    TEMPtext.innerHTML = temp+"°C"
    HUMIDITYtext.innerHTML = humidity+"%"
    WINDtext.innerHTML = windspeed+"m/s"
}