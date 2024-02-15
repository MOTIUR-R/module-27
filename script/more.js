function getRandomAlphabet(){
    // get or create an alphabet arry
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphavet = alphabetString.split('');
    // console.log(alphavet);

    // get a random index betwen 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphavet[index]
    // console.log(index, alphabet);
    return alphabet;
}


function  setBgById(elementId){
    const getElement = document.getElementById(elementId);
    getElement.classList.add('bg-violet-700');
} 

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-violet-700');
}