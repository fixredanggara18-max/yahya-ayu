// =============================
// NAMA TAMU DARI URL
// contoh:
// ?to=DIRA%20DAN%20PARTNER
// =============================

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").innerHTML =
        guest.replace(/\+/g, " ");
}

// =============================
// TOMBOL BUKA UNDANGAN
// =============================

const btn = document.getElementById("open");
const music = document.getElementById("music");

btn.addEventListener("click", () => {

    music.play();

    btn.innerHTML = "Selamat Datang ❤️";

    btn.disabled = true;

    setTimeout(() => {

        document.getElementById("opening")
        .style.display = "none";

    },800);

});
