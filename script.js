// Get the input fields and the convert button
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");

// Add an event listener to the convert button
convertButton.addEventListener("click", () => {
    // Get the values from the input fields
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    // Check which field is empty and perform the conversion
    if (!isNaN(celsiusValue)) {
        const convertedFahrenheit = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = convertedFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        const convertedCelsius = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = convertedCelsius.toFixed(2);
    }
});
