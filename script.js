const player = document.querySelector("#player");
const playPauseButton = document.querySelector('#btn-playPause');
const currentTime = document.querySelector('#current-time');
const duration = document.querySelector('#duration');
const linhaDoTempo = document.querySelector('#linha-tempo');
const linhaPercorrida = document.querySelector('#linha-percorrida');

console.log(playPauseButton);
function start (){
    const message = document.getElementById('message');
    console.log(message);
    message.classList.add('ativo');

    happyBtd.play();
};

function music (){
    const music = document.getElementById('music');
    console.log(music);
    music.classList.add('ativo');

    const lyric = document.getElementById('lyric');
    lyric.classList.add('ativo');
    happyBtd.pause();

};

const textButtonPlay = '<img id="btn-playPause" class="play" src="./assets/play.svg" alt="">'
const textButtonPause = '<img id="btn-playPause" class="play" src="./assets/pause.svg" alt="">'

playPauseButton.onclick = () => playPause();

player.ontimeupdate = () => updateTime();
const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);
    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);
    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

    const progressWidth = durationFormatted ? (player.currentTime / durationFormatted) * 100 : 0;
    linhaDoTempo.style.width = progressWidth + "%";
};
const formatZero = (n) => (n < 10 ? "0" + n : n);




const playPause = () => {
    if (player.paused){
        player.play();
        playPauseButton.innerHTML = textButtonPause;
    } else {
        player.pause();
        playPauseButton.innerHTML = textButtonPlay;
    }

};

let index = 0;