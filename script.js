// script.js
let steps = 0;
let distance = 0;
let calories = 0;
let stepLength = 0.8; // average step length in meters
let weight = 0;
let tracking = false;
let interval;

document.getElementById('startButton').addEventListener('click', startTracking);
document.getElementById('stopButton').addEventListener('click', stopTracking);

function startTracking() {
    weight = document.getElementById('weight').value;
    if (weight <= 0) {
        alert('Please enter a valid weight.');
        return;
    }

    steps = 0;
    distance = 0;
    calories = 0;
    tracking = true;
    interval = setInterval(trackSteps, 1000);
}

function stopTracking() {
    tracking = false;
    clearInterval(interval);
}

function trackSteps() {
    if (tracking) {
        steps++;
        distance += stepLength;
        calories = calculateCalories(weight, distance);
        updateDisplay();
    }
}

function calculateCalories(weight, distance) {
    // Approximate calories burned per meter walked
    let caloriesPerMeter = 0.05; // This is a rough estimate
    return (caloriesPerMeter * weight * distance).toFixed(2);
}

function updateDisplay() {
    document.getElementById('steps').textContent = steps;
    document.getElementById('distance').textContent = distance.toFixed(2);
    document.getElementById('calories').textContent = calories;
}