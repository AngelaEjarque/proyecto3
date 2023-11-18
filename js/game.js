const boardBoxes = [];
const checkBoxes = [];
let selectedColor;
let currentRow = 1;
let checkIndex = 0;

// Obtener colores seleccionados del almacenamiento local
const arrayChosenColoursString = localStorage.getItem('chosenColours');
const arrayChosenColours = JSON.parse(arrayChosenColoursString) || [];


for (let row = 1; row <= 10; row++) {
    const boardRow = [];
    const checkRow = [];

    for (let col = 1; col <= 4; col++) {
        const boardBox = document.getElementById(`board-box-${row}-${col}`);
        const checkBox = document.getElementById(`check-box-${row}-${col}`);

        boardRow.push(boardBox);
        checkRow.push(checkBox);

        
        boardBox.addEventListener('click', () => {
            if (selectedColor && boardBox.parentElement.classList.contains(`row${currentRow}`)) {
                boardBox.style.backgroundColor = selectedColor;
            }
        });
    }

    boardBoxes.push(boardRow);
    checkBoxes.push(checkRow);
}


document.querySelectorAll('.playerchoice').forEach(colorSelector => {
    colorSelector.addEventListener('click', () => {
        selectedColor = colorSelector.style.backgroundColor;
    });
});

// Función para convertir RGB a hexadecimal
function rgbToHex(rgb) {
    const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return `#${(1 << 24 | hex[1] << 16 | hex[2] << 8 | hex[3]).toString(16).slice(1)}`;
}


document.getElementById('buttoncheck').addEventListener('click', () => {
    const winningCombinationString = localStorage.getItem('winningCombination');
    const winningCombination = JSON.parse(winningCombinationString);

    const feedback = [];

    for (let i = 0; i < 4; i++) {
        const boardColor = rgbToHex(boardBoxes[currentRow - 1][i].style.backgroundColor);

        if (boardColor === winningCombination[i]) {
            feedback.push('purple'); // Color correcto en posición correcta
        } else if (winningCombination.includes(boardColor)) {
            feedback.push('white'); // Color correcto en posición incorrecta
        } else {
            feedback.push('transparent'); // Color que no está en la combinación
        }

        const checkBox = checkBoxes[currentRow - 1][i];
        checkBox.style.backgroundColor = feedback[i];
        checkBox.style.border = "thick solid #cafbfe";
    }

    if (feedback.every(color => color === 'purple')) {
        window.location.href = "/pages/win.html";
    } else {
        checkIndex++;
        if (checkIndex >= 10) {
            handleGameOver();
        } else {
            currentRow++;
            document.querySelectorAll(`.row${currentRow} .board-box`).forEach(boardBox => {
                boardBox.style.pointerEvents = 'auto';
            });
        }
    }
});

// Función para el final del juego
function handleGameOver() {
    window.location.href = "/pages/loose.html";
}

// Asignar colores a los divs
const miDivs = Array.from({ length: 4 }, (_, i) => document.getElementById(`colorgame${i + 1}`));

arrayChosenColours.forEach((color, index) => {
    miDivs[index].style.backgroundColor = color;
});
