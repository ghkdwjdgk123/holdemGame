document.getElementById("startButton").onclick = function() {
    playerNum = 10;
    $(this).remove();
    dealCard(playerNum);
}
document.getElementById("raiseButton").onclick = raise;

function dealCard(playerNum) {
    const cards = generateDeck();
    for(let i = 1; i <= playerNum; i++) {
        for(let j = 1; j <= 2; j++) {
            const player = document.querySelector(".player" + i);
            const card = cards.pop();
            player.appendChild(card);
            
            // 딜레이를 적용하여 카드가 순차적으로 날아가게 함
            setTimeout(() => {
                card.style.transition = 'transform 1s ease, opacity 1s ease';
                
                // 플레이어 영역으로 카드 이동
                card.style.transform = `translate(0, 0)`;
                card.style.opacity = '1'; 
            }, 100 * (i - 1) + 50 * (j - 1)); // 플레이어 순서와 카드 순서에 따라 딜레이 추가
        }
    }
}
function raise(){
    let input = $('<input type="text" id="raiseInput" class="raise">');
    $(this).replaceWith(input);
    $(this).parent().appendChild($('<button id="raiseSubmit">입력</button>'));
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
