const getTemp = () => {
    let cityName = document.getElementById('city-name').value
    let apiKey = 'd659936515177245ed9fb6181d1d1a52'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    fetchData(url)

}

const fetchData = (link) => {

    fetch(link)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    console.log(data)
    document.getElementById('name-city').innerText = `${data.name}`
    document.getElementById('temp').innerText = `${data.main.temp} C`
    document.getElementById('condition').innerText = `${data.weather[0].main}`

    //set img src 
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('img').setAttribute('src', url)
}



document.getElementById('btn').addEventListener('click', getTemp)