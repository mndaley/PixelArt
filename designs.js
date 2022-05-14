// Select color input
// Select size input
const canvas = document.getElementById('pixelCanvas');
const gridSize = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
    // Your code goes here!
    canvas.innerHTML = '';

    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);

        for (var j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function(evt){
                evt.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
};
