(function(){
    'use strict';
    console.log('reading js');

    const heads = document.querySelector('#heads');
    const tails = document.querySelector('#tails');
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#start');
    const attackBtn = document.querySelector('#attack');

    let attacker;
    let defender;
    let defenderIndex;

    const gameData = {
        monsters: ['Heads', 'Tails'],
        health: [100, 100],
        attack: [5, 15, 25, 30, 40],
        attackMessage: [
            'flicked a speck of pocket lint... a measly 5 hit points!',
            'tossed some spare change! 15 hit points!',
            'made it rain! 25 hit points!',
            'dropped a heavy roll of quarters! 30 hit points!',
            'hit the Las Vegas jackpot! A massive 40 hit points!'
        ],
        defendMessage: [
            'forgot they were made of metal... direct hit!', 
            'deflected the blow off their rim! Partial hit.', 
            'rolled away flawlessly! Total dodge, no hit!'
        ],
        index: 0
    };

    startBtn.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `<p>Get ready! <strong>${gameData.monsters[gameData.index]}</strong> was randomly selected to attack first. Click the attack button to attack </p>`;
        attackBtn.className = 'showing';
    });

    attackBtn.addEventListener('click', monsterAttack );

    function monsterAttack(){
        
        if(gameData.index){
            attacker = gameData.monsters[1];
            defender = gameData.monsters[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.monsters[0];
            defender = gameData.monsters[1];
            defenderIndex = 1;
        }

        const thisAttack = Math.floor(Math.random() * 5);
        const thisdDefense = Math.floor(Math.random() * 3);

        attackBtn.className = 'hidden';

        document.querySelector(`#${attacker.toLowerCase()}`).className = `attack${thisAttack}`;
        messages.innerHTML = `<p><strong>${attacker}</strong> has completed ${gameData.attackMessage[thisAttack]}</p>`;

        setTimeout(function(){
            messages.innerHTML = `<p><strong>${defender}</strong> has ${gameData.defendMessage[thisdDefense]}</p>`;
            
            document.querySelector(`#${defender.toLowerCase()}`).className = `defend${thisdDefense}`;

            const defenderImage = document.querySelector(`#${defender.toLowerCase()}`);
            if( thisdDefense == 0 || thisdDefense == 1){
                defenderImage.src = `images/hurt${defender.toLowerCase()}.png`;
            } else {
                defenderImage.src = `images/happy${defender.toLowerCase()}.png`;
            }

            if( thisdDefense == 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if( thisdDefense == 1 ){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack]/2;
            }

            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            if(health < 0) {health = 0;}
            
            document.querySelector(`#healthbar${defenderIndex} div`).style.width = `${health}%`;
            
            if (defenderIndex === 0) {
                document.querySelector('#headshealth').innerHTML = `${health}%`;
            } else {
                document.querySelector('#tailshealth').innerHTML = `${health}%`;
            }

            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }

    function checkWinningCondition(enemy, attackingMonster){
        setTimeout(function(){
            heads.removeAttribute('class');
            tails.removeAttribute('class');
            
            const health = Math.floor(parseFloat(gameData.health[enemy]));
            
            if( health < 1 ){
                messages.innerHTML = `<p><strong>${attackingMonster}</strong> has won the battle! Play Again?</p>`;
                messages.innerHTML += '<button id="reset">Battle Again</button>';

                document.querySelector(`#${attackingMonster.toLowerCase()}`).src = `images/happy${attackingMonster.toLowerCase()}.png`;
                document.querySelector(`#${gameData.monsters[enemy].toLowerCase()}`).src = `images/hurt${gameData.monsters[enemy].toLowerCase()}.png`;

                document.querySelector(`#${attackingMonster.toLowerCase()}`).className = 'dancing';

                document.querySelector('#reset').addEventListener('click', function(){
                    location.reload();
                });
                
            } else {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                messages.innerHTML = `<p>It's now <strong>${gameData.monsters[gameData.index]}'s</strong> turn!</p>`;
                attackBtn.className = 'showing';
                heads.src = 'images/heads.png';
                tails.src = 'images/tails.png';
            }
        }, 3000);
    }
})();