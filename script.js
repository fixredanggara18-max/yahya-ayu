// =====================================
// NAMA TAMU DARI URL
// contoh:
// ?to=DIRA%20DAN%20PARTNER
// =====================================

const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");

if (guest) {
    document.getElementById("guestName").innerHTML =
        decodeURIComponent(guest);
}

// =====================================
// BUKA UNDANGAN
// =====================================

const openBtn = document.getElementById("open");
const opening = document.getElementById("opening");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

    },700);

    music.play();

});

// =====================================
// COUNTDOWN
// =====================================

const weddingDate = new Date("February 19, 2026 10:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hour = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minute = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const second = Math.floor(
        (distance % (1000*60))
        /1000
    );

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

},1000);

// =====================================
// BACK TO TOP
// =====================================

const back = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        back.style.display="block";

    }else{

        back.style.display="none";

    }

});

back.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =====================================
// COPY REKENING
// =====================================

const copyButton = document.querySelectorAll(".gift-card button");

copyButton.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        const rekening =
        btn.parentElement.querySelector("h1").innerText;

        navigator.clipboard.writeText(rekening);

        btn.innerHTML="✔ Berhasil Disalin";

        setTimeout(()=>{

            btn.innerHTML="Salin Nomor Rekening";

        },2000);

    });

});

// =====================================
// ANIMASI SCROLL
// =====================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((el)=>{

    observer.observe(el);

});
