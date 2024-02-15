function continueGame(){
    //  step: 1 genarete a ranom alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // show random alphabet in screen
    const carentAlphavetElement = document.getElementById('carrent-alphabet');
    carentAlphavetElement.innerText = alphabet;

    // set background color
    setBgById(alphabet);
}

function play(){
    // step:1 hiden the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // step:2 show the playground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame();
}

