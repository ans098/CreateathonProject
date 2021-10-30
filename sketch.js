console.log('page is working');

// variables
let title = document.querySelector('#title');
let enter = document.querySelector('#enter');
let reset = document.querySelector('#reset');
let resetBut = document.querySelector('#resetBut');
let resetGame = document.querySelector('#resetGame');
let password = document.querySelector('#password');
let passwordBox = document.querySelector('#passwordBox');
let mirror = document.querySelector('#mirror');
let failVid = document.querySelector('#fail');
let magicVid = document.querySelector('#magic');
let hint = document.querySelector('#hint');
let correctPassword = 'mitochondria';

// ------------------------------------------------------------
// password submission
enter.addEventListener('click', () => {
    console.log(password.value);

    let newPass = password.value.toLowerCase();

    if (newPass == correctPassword) {
        console.log('right');
        playMagic();
    } else {
        console.log('wrong');
        playFail();
    }
});

reset.addEventListener('click', () => {
    console.log('reset works');
    failVid.style.visibility = "hidden";
    magicVid.style.visibility = "hidden";
    reset.style.visibility = "hidden";
    resetGame.style.visibility = "hidden";
    title.style.visibility = "visible";
    hint.style.visibility = "hidden";
    failVid.pause();
    failVid.currentTime = 0;
    magicVid.pause();
    magicVid.currentTime = 0;
    password.value = "";
    passwordBox.style.visibility = "visible";
    title.innerHTML = "Magic Miror on the wall, who's the most powerful one of all?";
})

function playFail() {
    failVid.style.visibility = "visible";
    reset.style.visibility = "visible";
    resetGame.style.visibility = "hidden";
    title.style.visibility = "hidden";
    hint.style.visibility = "visible";
    failVid.play();
    password.value = "";
    passwordBox.style.visibility = "hidden";
}

function playMagic() {
    magicVid.style.visibility = "visible";
    resetGame.style.visibility = "visible";
    reset.style.visibility = "hidden";
    magicVid.play();
    magicVid.loop = 'true';
    password.value = "";
    passwordBox.style.visibility = "hidden";
    title.innerHTML = "Yes!";
}

