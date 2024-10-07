
document.onload = function(){
    document.getElementById("startButton").onclick = function(){

        playerNum = 10;
        dealCard(playerNum);
        alert("시작")
    }    
}
function dealCard(playerNum){
    const cards = generateDeck(playerNum);
    let playerArr = [];
    for(let i = 1; i<=playerNum; i++){
        for(let j=1; j<=2; j++){
            document.querySelector(".player"+i).appendChild(cards.pop())
        }
    }
}
function generateDeck() {
    const cards = [];
    let widthOffset = 100/2;
    for (let i = 1; i <= 52; i++) {
        const card = document.createElement('img');
        card.src = './img/card_img/back.png'; // 모든 카드는 뒷면
        card.classList.add('card' + i, 'card');
        card.style.position = 'absolute';
        card.style.top = '0';
        if(i%2===0){
            card.style.right = `${widthOffset}px`;
        }
    
        card.style.transform = 'translate(-50%, -50%)';
        card.style.opacity = '0';
        cards.push(card);
    }
    return cards;
}