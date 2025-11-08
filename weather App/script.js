// Selecting HTML elements
const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
const weatherContainer = document.getElementById('weather-container');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


// Handling form submission
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = locationInput.value.trim();
  if (location) {
    fetchWeatherData(location);
    locationInput.value = '';
  } else {
    alert('Please enter a location name.');
  }
});


// Function to fetch weather data
async function fetchWeatherData(location) {
  const apiKey = '3fc87da47828a9e7200d7cbf7b6ece1e'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${3fc87da47828a9e7200d7cbf7b6ece1e}`;
}
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(data);
    } else {
      throw new Error('location not found');
    }
  } catch (error) {
    alert(error.message);
  }


  // Function to display weather data
function displayWeatherData(data) {
  const { name, main, weather } = data;

}
