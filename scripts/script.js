const dimensions = 150;
const imgStart = Math.floor(Math.random()*100)+1;
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