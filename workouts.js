
let textBox = document.querySelector('#text-input');
let button = document.querySelector("#click-btn");
let out1 = document.getElementById("output1");

button.onclick = function(event) {
    event.preventDefault();
    var muscle = textBox.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
        headers: { 'X-Api-Key': 'lDEqHZRKOffNhAQHgiW34w==Arct62u4Z8YLDQvr'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            displayExerciseData(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

function displayExerciseData(data) {
    out1.innerHTML = '';

 
    const container = document.createElement('div');
    container.classList.add('exercise-container');

    for (let i = 0; i < data.length; i++) {
        const exercise = data[i];
        const exerciseElement = document.createElement('div');
        exerciseElement.classList.add('exercise-item');
        exerciseElement.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>Difficulty: ${exercise.difficulty}</p>
            <p>Instructions: ${exercise.instructions}</p>
        `;
        container.appendChild(exerciseElement);
    }

    out1.appendChild(container);
}
