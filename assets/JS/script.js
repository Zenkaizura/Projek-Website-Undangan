function bukaUndangan() {
    document.getElementById('btn=buka-undangan').style.display = 'none';
    document.querySelector('.floating-navbar').style.display = 'flex';
    document.querySelector('.floating-navbar').style.display = 'flex';
    document.getElementById('musicButton').style.display = 'block';
    document.getElementById('Quotes').style.display = 'flex';
    document.getElementById('couple').style.display = 'block';
    document.getElementById('lokasi').style.display = 'flex';
    document.getElementById('Gallery').style.display = 'block';
    document.getElementById('Tamu-vip').style.display = 'flex';
    document.getElementById('Story').style.display = 'flex';
    document.getElementById('RSVP').style.display = 'flex';
    document.getElementById('Hadiah').style.display = 'flex';
    document.getElementById('Pesan').style.display = 'flex';
    document.getElementById('Pesan').style.display = 'flex';
    document.getElementById('footer').style.display = 'block';
}

/* bagian cover */

let isPlaying = false

function playMusic() {
    const music = document.getElementById('backgroundMusic');
    const buttonIcon = document.getElementById('buttonIcon');
    const musicButton =  document.getElementById('musicButton');

    if(isPlaying) {
        music.pause();
        buttonIcon.src = "assets/img/audio-off.png";
        musicButton.classList.remove("rotating");
    }

    else{
        music.play();
        buttonIcon.src = "assets/img/audio-nyala.png";
        musicButton.classList.add("rotating");
    }


    isPlaying = !isPlaying;
}

/* bagian cover */


function ValidasiForm() {
 const nama = document.getElementById('nama').value;
 const email = document.getElementById('email').value;
 const kehadiran = document.getElementById('kehadiran').value;
 const eventPilihan = document.querySelector('input[name="event-pilih"]:checked');


 if (nama === "" || email === "" || kehadiran ==="" || !eventPilihan){
    return false;
 }


 document.getElementById("rsvp-form").style.display = 'none';
 document.getElementById("thank-you-message").style.display = 'block';

 document.getElementById("rsvp-description").innerText = "Terima kasih telah meluangkan waktu untuk mengonfirmasi. Kami sangat menantikan momen berharga ini bersama Anda.";

 return false;
}

function CopyRekening(){
    const rekening = document.querySelector(".Rekening").innerText;

    navigator.clipboard.writeText(rekening);
}
