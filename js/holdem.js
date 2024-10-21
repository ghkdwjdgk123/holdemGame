const cards = generateDeck();
document.getElementById("startButton").onclick = function() {
    let playerNum = 10;
    $(this).remove();
    dealForPlayer(playerNum);
}
document.getElementById("raiseButton").onclick = raise;
function dealForPlayer(playerNum){
    for(let i = 1; i <= playerNum; i++) {
        for(let j = 1; j <= 2; j++) {
            dealCard(i, j);
        }
    }
}

function dealCard(playerNum = 0, cardNum = 1 ) {
    const player = document.querySelector(".player" + playerNum);
    const card = cards.pop();
    let dealer = document.querySelector(".dealer");
    player.appendChild(card);
    setTimeout(() => {
        card.style.transition = 'transform 1s ease, opacity 1s ease';
        
        // 플레이어 영역으로 카드 이동
        card.style.transform = `translate(0, 0)`;
        card.style.opacity = '1'; 
    }, 100 * (playerNum - 1) + 50 * (cardNum - 1)); // 플레이어 순서와 카드 순서에 따라 딜레이 추가    

    
    // 딜레이를 적용하여 카드가 순차적으로 날아가게 함
    

        
    setTimeout(() => {
        card.style.transition = 'transform 1s ease, opacity 1s ease';
        
        // 플레이어 영역으로 카드 이동
        card.style.transform = `translate(0, 0)`;
        card.style.opacity = '1'; 
    }, 100 * (playerNum - 1) + 50 * (cardNum - 1)); // 플레이어 순서와 카드 순서에 따라 딜레이 추가

}
function maxBet(){
    let raisInput = document.querySelector("#raiseInput");
    let maxMoney = document.querySelector("#currentAmount").textContent.split("₩");
    raisInput.setAttribute("value", maxMoney); 
}
function raise(){
    let input = $('<input type="text" id="raiseInput" class="raise"><button id ="raiseSubmit">입력</button><button onclick = maxBet()>올인</button>');
    $(this)
    $(this).replaceWith(input);
}
function addMyHand(){
    let myHand=document.getElementById("myHand");

    myHand.appendChild()
}
function showAllHand(){

}
function addFlop(){
    let deallingZone = documet.querySelector(".dealer");

}
function generateDeck() {
    const cards = [];
    let widthOffset = 100/2;
    for (let i = 1; i <= 52; i++) {
        const card = document.createElement('img');
        card.src = './img/card_img/back.png';
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
