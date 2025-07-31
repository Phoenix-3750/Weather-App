const apiKey = '1a8caea41ab93d6aee2f0dbaa8bc162b'; // Your actual API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (city === '') {
    resultDiv.innerHTML = 'Please enter a city name.';
    return;
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if (data.cod === '404') {
      resultDiv.innerHTML = 'City not found.';
      return;
    }

    const { name, main, weather } = data;
    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = 'Error fetching weather data.';
    console.error(error);
  }
}
