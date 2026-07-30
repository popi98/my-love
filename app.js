// Запуск истории

function startStory(){

    window.scrollTo({

        top: window.innerHeight,

        behavior:"smooth"

    });

}



// Музыка

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;


musicBtn.addEventListener("click",()=>{


    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸️";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

        playing=false;

    }


});




// Появление блоков при скролле


const reveals =
document.querySelectorAll(".reveal");


function reveal(){

    for(let i=0;i<reveals.length;i++){


        let windowHeight =
        window.innerHeight;


        let elementTop =
        reveals[i].getBoundingClientRect().top;


        let elementVisible = 120;


        if(elementTop < windowHeight - elementVisible){

            reveals[i].classList.add("active");

        }


    }

}


window.addEventListener(
"scroll",
reveal
);


reveal();





// Летающие сердечки


function createHeart(){


    const heart =
    document.createElement("div");


    heart.className =
    "heart-particle";


    const hearts =
    [
        "🤍",
        "💜",
        "✨",
        "❤️"
    ];


    heart.innerHTML =
    hearts[
    Math.floor(
    Math.random()*hearts.length
    )
    ];



    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (Math.random()*3+4)+"s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}



setInterval(
createHeart,
900
);




// Плавное появление после загрузки


window.addEventListener(
"load",
()=>{

    setTimeout(()=>{

        document.body.classList.add("loaded");

    },2500);

});// Защита от отсутствующих фотографий

const images = document.querySelectorAll("img");


images.forEach((img)=>{


    img.addEventListener("error",()=>{


        img.style.display="none";


        const message =
        document.createElement("div");


        message.className="photo-error";


        message.innerHTML=
        "🤍";


        img.parentElement.appendChild(message);


    });


});




// Защита музыки

music.addEventListener("error",()=>{


    musicBtn.style.display="none";


});