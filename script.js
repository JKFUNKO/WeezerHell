const imageMapping = {
    ArrowRight: "https://media.discordapp.net/attachments/1144882484794884148/1167159534175920188/right_view.png?ex=654d1d05&is=653aa805&hm=c30ca496062313fce553e90f64043ca4d15e329dbff03f7ddbc258f1b9e8b4c8&=",
    ArrowLeft: "https://media.discordapp.net/attachments/1144882484794884148/1167159533307695275/left_view.png?ex=654d1d05&is=653aa805&hm=266d477b883982b446f3916da6652cee14b8bc71b3bc62ca8b418564694c1e1d&=",
    ArrowUp: "https://media.discordapp.net/attachments/1144882484794884148/1167159532791812117/back_view.png?ex=654d1d05&is=653aa805&hm=d5df9dc42f0ad2701251b689d59ac9c365490716daf84ebf954bbdefc966fb35&=",
    ArrowDown: "https://media.discordapp.net/attachments/1144882484794884148/1167165836075728988/down.png?ex=654d22e4&is=653aade4&hm=432d06f9662453156ccc17c902425793abad363de1c0a480d1c601fc2356c4aa&=",

};

const movingImage = document.getElementById('movingImage');
let positionX = 0;
let positionY = 0;
const step = 10; // Number of pixels to move on each arrow key press

function updateImage(key) {
    const imageUrl = imageMapping[key];
    if (imageUrl) {
        movingImage.src = imageUrl;
    }
}

function moveImage(direction) {
    switch (direction) {
        case 'ArrowRight':
            positionX += step;
            break;
        case 'ArrowLeft':
            positionX -= step;
            break;
        case 'ArrowUp':
            positionY -= step;
            break;
        case 'ArrowDown':
            positionY += step;
            break;
    }
    movingImage.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    updateImage(key);
    moveImage(key);
});