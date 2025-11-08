// Selecting HTML elements
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


// Handling form submission
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
    cityInput.value = '';
  } else {
    alert('Please enter a city name.');
  }
});


// Function to fetch weather data
async function fetchWeatherData(city) {
  const apiKey = '3fc87da47828a9e7200d7cbf7b6ece1e'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${3fc87da47828a9e7200d7cbf7b6ece1e}`;
}
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(data);
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    alert(error.message);
  }


  // Function to display weather data
function displayWeatherData(data) {
  const { name, main, weather } = data;
}