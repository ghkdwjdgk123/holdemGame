
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
    for (let i = 1; i <= 52; i++) {
        const card = document.createElement('img');
        card.src = './img/card_img/back.png'; // 모든 카드는 뒷면
        card.classList.add('card' + i, 'card');
        card.style.position = 'absolute';
        card.style.width = '100px';
        card.style.height = 'auto';
        card.style.transition = 'transform 1s ease'; // 이동 시 부드러운 애니메이션
        cards.push(card);
    }
    return cards;
}