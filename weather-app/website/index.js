// WEATHER APP

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const weatherCard = document.querySelector('.weatherCard');
const apiKey = 'eb09d47ca00b7b72ec2b2c7c9f8ed7cf'

weatherForm.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeather(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error)
        }
    } else {
        displayError('⚠️ Please enter a city...');
    }

});

async function getWeather(city) {
    
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error('⚠️ City not found...');
        } else {
            const data = await response.json();
            return data;
        }
}

function displayWeather(data) {
    
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    weatherCard.textContent = '';
    weatherCard.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(humidityDisplay);
    weatherCard.appendChild(descDisplay);
    weatherCard.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId) {

    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return '⛈️';
        case weatherId >= 300 && weatherId < 600:
            return '🌧️';
        case weatherId >= 600 && weatherId < 700:
            return '❄️';
        case weatherId >= 700 && weatherId < 800:
            return '🌫️';
        case weatherId === 800:
            return '☀️';
        case weatherId > 800:
            return '☁️';
        default:
            return '';
    }
}

function displayError(msg) {

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = msg;
    errorDisplay.classList.add('errorDisplay');

    weatherCard.textContent = '';
    weatherCard.style.display = 'flex';
    weatherCard.appendChild(errorDisplay);
}
