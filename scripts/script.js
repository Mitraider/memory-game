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
    
}

InitGame();