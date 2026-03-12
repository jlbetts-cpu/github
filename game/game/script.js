(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
            '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function () {
        //Randomly set the gameData.idex here, which will be choose the player

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function () {
            location.reload();
        });

        // console.log('set up the turn');
        setUpTurn();

    });

    function setUpTurn() {
        game.html = `<p>Roll the dice for the ${gameData.players[gameData.index]} </p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){

            // console.log('Roll the Dice');
            throwDice();

        });
    }

    function throwDice (){
        actionArea.innerHTML = '';
        gameData.roll1 =Math.floor(Math.random() * 6) + 1; //using ceil result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        // gameData.roll1 = 1;
        // gameData.roll2 = 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(`total is ${gameData.rollSum}`);

        // if two 1s are rolled..
        if( gameData.rollSum === 2 ){
            console.log('snake eyes!');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            /* set score for current play */
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //We will add showCurrentScore() function here...
            //wait 2 seconds...
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice rolled a 1')
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        //if neither die is a 1...
        else {
            console.log('neither die was a 1, game continues...');
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            //checkWinningCondition function will be added here...
            checkWinningCondition();
        }

    }
            function checkWinningCondition(){
                if (gameData.score[gameData.index] > gameData.gameEnd) {
                    score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
                    actionArea.innerHTML = '';
                    document.querySelector('#quit').innerHTML = 'Start a New Game?';
                } else {
                    showCurrentScore();
            }
            }     function showCurrentScore() {
                    score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:${gameData.score[1]}</strong></p>`;
                }
})();