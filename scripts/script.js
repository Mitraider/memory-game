const dimensions = 150;
const imgStart = Math.floor(Math.random()*100)+1;
const gameBoard = document.getElementById("game-board");

//logique de clics
let firstClick = null;
let secondClick = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

let images = [];

for(let i = 0;i < 8;i++){
    images.push(`https://picsum.photos/${dimensions}/${dimensions}?random=${imgStart+i}`);
}

let cards = [...images, ...images];

function shuffle(array){
    for(let i = array.length - 1; i >=0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return(array);
}


function InitGame(){
    shuffle(cards);

    cards.forEach((imgUrl) => {
        const card = document.createElement("div");

        card.classList.add("card");
        card.dataset.value = imgUrl;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex","0");
        card.addEventListener('click', () => handleClickCard(card));

        gameBoard.appendChild(card);
    });
}

function handleClickCard(card){
    if(lockBoard) return;
    if(card === firstClick) return;
    if (card.classList.contains("matched")) return;

    const img = document.createElement("img");
    img.src = card.dataset.value;
    card.appendChild(img);

    if(firstClick === null) {firstClick = card;}
    else {secondClick = card;
        lockBoard = true;
        moves++;
        checkMatch(firstClick, secondClick);
    }
}

function checkMatch(card1, card2){
    if (card1.dataset.value === card2.dataset.value){
        card1.classList.add("matched")
        card2.classList.add("matched")
        matchedCount++;
        firstClick = null;
        secondClick = null;
        lockBoard = false;
    }
    else{
        setTimeout(() => {
            card1.innerHTML = "";
            card2.innerHTML = "";

            firstClick = null;
            secondClick = null;

            lockBoard = false;
        }, 800)
    }
}

InitGame();