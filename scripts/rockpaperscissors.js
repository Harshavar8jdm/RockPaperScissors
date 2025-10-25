let compChoice = '';
            let score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
            let result = '';

            

            function playGame(playerMove){
               

                if(playerMove === 'rock'){
                    if(compChoice === 'rock'){
                        result = 'Tie';
                        score.ties +=1;
                    }
                    else if(compChoice === 'paper'){
                        result = 'You lose';
                        score.losses+=1;
                    }

                    else if(compChoice == 'scissors'){
                        result = 'You win';
                        score.wins+=1;
                    }
                      
                }

                else if(playerMove === 'paper'){
                    if(compChoice === 'rock'){
                        result = 'You win';
                        score.wins+=1;
                    }
                    else if(compChoice === 'paper'){
                        result = 'Tie';
                        score.ties+=1;
                    }

                    else if(compChoice == 'scissors'){
                        result = 'You lose';
                        score.losses+=1;
                    }
                        
                }

                else if(playerMove === 'scissors'){
                    if(compChoice === 'rock'){
                        result = 'You lose';
                        score.losses+=1
                    }
                    else if(compChoice === 'paper'){
                        result = 'You win';
                        score.wins+=1;
                    }

                    else if(compChoice == 'scissors'){
                        result = 'Tie';
                        score.ties+=1;
                    }
                        
                     
                }

                else{
                    console.log('error 1');
                }
                updatePickedElement(playerMove, compChoice);
                updateResultElement();
                updateScoreElement();

            }

            function reset(){
                score.wins = 0;
                score.losses = 0;
                score.ties = 0;
                updatePickedElement(playerMove, compChoice);
                updateResultElement();
                updateScoreElement(); 
                 
            }
            function updateResultElement(){
                document.querySelector('.js-result')
                    .innerHTML = result;
            }

            function updatePickedElement(playerMove = 'none', compChoice = 'none'){
                document.querySelector('.js-picked')
                    .innerHTML = `You <img class="${playerMove}-icon" src="images/${playerMove}-emoji.png"> 
                                  <img class="${compChoice}-icon" src="images/${compChoice}-emoji.png"> Computer `;

            }
            
            function updateScoreElement(){
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
            }
            function pickComputerChoice(){

                const randomNumber = Math.random();
                let result = '';
                if(randomNumber >= 0 && randomNumber < 1/3){
                    compChoice = 'rock';
                } else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    compChoice = 'paper';
                } else if(randomNumber >= 2/3 && randomNumber < 3/3){
                    compChoice = 'scissors';
                }
                 else{
                    console.log('NaN');
                }

            }
