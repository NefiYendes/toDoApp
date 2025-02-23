const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pause = document.querySelector('.fa-pause');
const playSong = document.querySelector('#playsong');
const art_img = document.querySelector('#artist');
const ttl = document.querySelector('.title');
const art_name = document.querySelector('#name');
const progress = document.querySelector('.line');
const lineChild = document.querySelector('.lineChild');

const artist_name = ['Drake','Adele', 'Ariana Grande', 'BTS', 'Camila Cabello', 'Ed Sheeran', 'Harry Styles', 'Justin Bieber', 'Katy Perry','Post Malone', 'Shawn Mendes', 'The Weeknd'];
const artist_title = ["God's plan",'Someone Like You', 'Thank U, Next','Butter', 'Havana','Shape of You', 'Watermelon Sugar', 'Yummy', 'Roar', 'Congratulations', 'Lost in Japan', 'Blinding Lights'];

let intervalId;
let isDragging = false;

playSong.addEventListener('click', effect);

function effect(){
    if(ad.duration == ad.currentTime){
        x += 1;
        console.log(x);
    }
    if(playing.classList.contains('none')){
        ad.pause();
        playing.style.display = 'flex';
        pause.style.display = 'none';
        clearInterval(intervalId);
    } else {
        ad.play();
        playing.style.display = 'none';
        pause.style.display = 'flex';
        intervalId = setInterval(prog, 1000);
    }
    ttl.classList.toggle('run');
    art_img.classList.toggle('round');
    playing.classList.toggle('none');
    pause.classList.toggle('none');
    dur();
}

function removeEffect(){
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove('run');
    playing.classList.remove('none');
    pause.classList.add('none');
    art_img.classList.remove('round');
    clearInterval(intervalId);
}

var x = 0;

function backward(){
    dur();
    x -= 1;
    if(x < 0){
        x = artist_name.length - 1;
    }
    removeEffect();
    songs(x);
}

function forward(){
    dur();
    x += 1;
    if(x >= artist_name.length){
        x = 0;
    }
    removeEffect();
    songs(x);
}

function songs(x){
    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_title[x];
    art_img.src = `./imagenes/${x}.jpg`;
    ad.src = `./songs/${x}.mp3`;
}

songs(0);

const strt = document.querySelector('#start');
const end = document.querySelector('#end');

function dur(){
    var dura = ad.duration;
    var secdu = Math.floor(dura % 60);
    var mindu = Math.floor(dura / 60);
    if(secdu < 10){
        secdu = `0${secdu}`;
    }
    end.innerHTML = `${mindu}:${secdu}`;
}

function prog(){
    var curtine = ad.currentTime;
    var mincur = Math.floor(curtine / 60);
    var seccur = Math.floor(curtine % 60);

    if(seccur < 10){
        seccur = `0${seccur}`;
    }

    strt.innerHTML = `${mincur}:${seccur}`;

    const progressPercent = (curtine / ad.duration) * 100;
    lineChild.style.width = `${progressPercent}%`;
}

progress.addEventListener('click', (e) => {
    updateProgress(e);
});

lineChild.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateProgress(e);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function updateProgress(e) {
    const clickX = e.offsetX;
    const progressWidth = progress.clientWidth;
    const newTime = (clickX / progressWidth) * ad.duration;
    ad.currentTime = newTime;
    lineChild.style.width = `${(newTime / ad.duration) * 100}%`;
}
