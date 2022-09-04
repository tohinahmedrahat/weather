const apiKey = `72132ce4f86fe2521cb6f7993673b066`;

const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))
}
const showWeather = data => {
    setText("temperature",data.main.temp)
    setText("condition",data.weather[0].main)
    setText("city",data.name)
    console.log(data)
}

const setText = (id,value) => {
    const idName = document.getElementById(id);
    idName.innerText = value;
}
const serchBtn = document.getElementById("serach");
serchBtn.addEventListener("click",() => {
    const inputField = document.getElementById("city-name");
    const inputValue = inputField.value;
    loadWeather(inputValue)
})
loadWeather("dhaka")