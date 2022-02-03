var city = document.querySelector("#cities");
var button = document.querySelector("#buttons");
var cityname = document.querySelector("#cout")
var desc = document.querySelector("#para")
var temperature = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var api = "c24e73f26496e4a539882534b2f699db"

function convert(e){
    return (e-273.15).toFixed(2)
}
button.addEventListener("click",()=>{
    var city2 = city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${api}`)
    .then(res=>res.json())
    .then(data =>{
        var citi = data['name']
        var disc = data['weather']['0']['description']
        var tamp = data['main']['temp']
        var winds = data['wind']['speed']
        cityname.innerHTML= `Location: ${citi}`
        temperature.innerHTML=`Temperature: ${convert(tamp)}`
        desc.innerHTML=`Mood: ${disc}`
        wind.innerHTML=`current wind: ${winds}`
    })
    .catch(()=>{
        alert("Invalid Input")
    })
})
