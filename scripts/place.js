// Static weather values
const temperature = 28;
const windSpeed = 10;

// Calculate wind chill using the metric formula
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Display the wind chill only when the calculation is valid
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Last modified date
document.querySelector("#lastModified").textContent = document.lastModified;