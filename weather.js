const key = '4a4cc74e0c0891c58518c3ae0dd7a620';
const un = 'metric' ;
let button = document.getElementById('btn') ;
console.log(button)
button.addEventListener('click',()=>{
    const input = document.getElementById('val') ;
    getWeather(input.value) ;
})
const getWeather=async(city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${un}`;
    const response = await fetch(url) ;
    const data = await response.json() ;
    console.log(data)
    if(data.cod!='200'){
        alert("Enter valid city name")
    }
    else{
        displayContent(data) ;
    }
    return 
}
const displayContent=(data)=>{
    document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"</img>`
    document.getElementById('tempmaxval').innerHTML = `<h2>${data.main.temp_max}<sup>o</sup>C</h2>`
    document.getElementById('tempminval').innerHTML = `<h2>${data.main.temp_min}<sup>o</sup>C</h2>`
}