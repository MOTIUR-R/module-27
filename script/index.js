// function handleKeyboardButtonPress(event){
//     const pleyerPresd = event.key;
//     console.log('player preshed',pleyerPresd);

//     // get the exprese to press
//     const currentAlphabet = document.getElementById('carrent-alphabet');
//     const alphabet = currentAlphabet.innerText;
//     const expectedalphabet = alphabet.toLowerCase();
//     console.log(pleyerPresd, expectedalphabet);

//     // cheked mach or not mach
//     if(pleyerPresd === expectedalphabet){
//         console.log('you got a point');
//     }
//     else{
//         console.log('you lost the point');
//     }
// }   

// capture keyboard key press
function handelKeybordUpEvent(event){
    const pleyerpresed = event.key;
    console.log('player presed', pleyerpresed);

    // stop the game player presed "esc"
    if(pleyerpresed === 'Escape'){
        gameOver();
    }

    // key pleyer is expected to press
    const currentAlphaavetId = document.getElementById('carrent-alphabet');
    const curentElemet = currentAlphaavetId.innerText;
    const expectedalphabet = curentElemet.toLowerCase();

    // chek right or worng key press
    if(pleyerpresed === expectedalphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setElementValueById('current-score', updateScore);


        // ------------------------------------------------------
        // console.log('you have press coretly', expectedalphabet);
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = currentScoreElement.innerText;
        // const currentSr = parseInt(currentScore);
        // console.log(currentSr);

        // // 2. increse the score by 1
        const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedalphabet);
        continueGame();
    }
    else{
        console.log('dhuri mia risht key press koren');
        
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);

        if(updatedLife === 0 ){
            gameOver();
        }

        // -----------------------------------
        // step 1: get the current life number
        // const currentLiveElemnet = document.getElementById('current-life');
        // const currentLive = currentLiveElemnet.innerText;
        // const currentLiv = parseInt(currentLive);

        // // step:2 reduce the life count
        // const newLife = currentLiv - 1;

        // // disply the updeted
        // currentLiveElemnet.innerText = newLife;

    }

}

document.addEventListener('keyup', handelKeybordUpEvent);

function continueGame(){
    //  step: 1 genarete a ranom alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // show random alphabet in screen
    const carentAlphavetElement = document.getElementById('carrent-alphabet');
    carentAlphavetElement.innerText = alphabet;

    // set background color
    setBgById(alphabet);
}

function play(){
    // // step:1 hiden the home screen
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');

    // // step:2 show the playground
    // const playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
    // continueGame();


    // hide everiting and show playground
    hideElementByID('home-screen');
    hideElementByID('final-score');
    showElementById('play-ground');

    // reset scorew and life
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();

}

function gameOver(){
    hideElementByID('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setElementValueById('last-score', lastScore);

    // clear the last selected bg alphabet
    const currentAlphaavet = getElementTextById('carrent-alphabet');
    // console.log(currentAlphaavet);
    removeBackgroundColorById(currentAlphaavet);
}