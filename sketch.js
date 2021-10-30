console.log('page is working');

// variables
let title = document.querySelector('#title');
let enter = document.querySelector('#enter');
let reset = document.querySelector('#reset');
let resetBut = document.querySelector('#resetbut');
let password = document.querySelector('#password');
let passwordBox = document.querySelector('#passwordBox');
let mirror = document.querySelector('#mirror');
let failVid = document.querySelector('#fail');
let magicVid = document.querySelector('#magic');
let correctPassword = 'mitochondria';

// ------------------------------------------------------------
// password submission
 enter.addEventListener('click', ()=>{
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

reset.addEventListener('click', ()=> {
    console.log('reset works');
    failVid.style.visibility = "hidden";
    magicVid.style.visibility = "hidden";
    reset.style.visibility = "hidden";
    title.style.visibility = "visible";
    failVid.pause();
    failVid.currentTime = 0;
    magicVid.pause();
    magicVid.currentTime = 0;
    password.value = "";
    passwordBox.style.visibility = "visible";
    title.innerHTML = "What's the Password?!";
})

 function playFail() {
    failVid.style.visibility = "visible";
    reset.style.visibility = "visible";
    title.style.visibility = "hidden";
    failVid.play();
    password.value = "";
    passwordBox.style.visibility = "hidden";
 }

 function playMagic() {
     magicVid.style.visibility = "visible";
     reset.style.visibility = "visible";
     magicVid.play();
     magicVid.loop = 'true';
     password.value = "";
     passwordBox.style.visibility = "hidden";
     title.innerHTML = "Welcome!";
 }

