let colorchoose1 = document.getElementById('colorchoose1');
let colorchoose2 = document.getElementById('colorchoose2');
let colorchoose3 = document.getElementById('colorchoose3');
let colorchoose4 = document.getElementById('colorchoose4');
let arrayChosenColours = [];

document.getElementById('colorPick1').addEventListener('input', () => {
    colorchoose1.style.backgroundColor = document.getElementById('colorPick1').value;
});

document.getElementById('colorPick2').addEventListener('input', () => {
    colorchoose2.style.backgroundColor = document.getElementById('colorPick2').value;
});

document.getElementById('colorPick3').addEventListener('input', () => {
    colorchoose3.style.backgroundColor = document.getElementById('colorPick3').value;
});

document.getElementById('colorPick4').addEventListener('input', () => {
    colorchoose4.style.backgroundColor = document.getElementById('colorPick4').value;
});
let saveColours = () => {
    let color1 = document.getElementById('colorPick1').value;
    let color2 = document.getElementById('colorPick2').value;
    let color3 = document.getElementById('colorPick3').value;
    let color4 = document.getElementById('colorPick4').value;

    arrayChosenColours.push(color1, color2, color3, color4);

    let arrayChosenColoursString = JSON.stringify(arrayChosenColours);
    localStorage.setItem('chosenColours', arrayChosenColoursString);
}

let randomWinningArray = (colours) => {
    const combination = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colours.length);
        combination.push(colours[randomIndex]);
    }
    return combination;
}

let randomCombination = randomWinningArray(arrayChosenColours);

let saveColoursAndRedirect = () => {
    saveColours();

    if (arrayChosenColours[0] === arrayChosenColours[1] ||
        arrayChosenColours[0] === arrayChosenColours[2] ||
        arrayChosenColours[0] === arrayChosenColours[3] ||
        arrayChosenColours[1] === arrayChosenColours[2] ||
        arrayChosenColours[1] === arrayChosenColours[3] ||
        arrayChosenColours[2] === arrayChosenColours[3]) {

        alert("Colours must be different between them.")
        window.location.href = "/pages/colorselect.html";
    } else {

        const randomCombination = randomWinningArray(arrayChosenColours);

        window.location.href = "/pages/mastermind.html";
        localStorage.setItem('winningCombination', JSON.stringify(randomCombination));
    }
}
