let musics = [
{artist: 'O Rappa', name: 'Angos pra quem tem fé', src: 'Album O Rappa/O Rappa - Anjos (Pra Quem Tem Fé) [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'O home amarelo', src: 'Album O Rappa/O Rappa - Homem amarelo [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'Fogo cruzado', src: 'Album O Rappa/O Rappa - Fogo cruzado [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'Hey joe', src: 'Album O Rappa/O Rappa - Hey Joe [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'Lado A Lado B', src: 'Album O Rappa/O Rappa - Lado B Lado A [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'Me deixa', src: 'Album O Rappa/O Rappa - Me deixa [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'Não vão me matar', src: 'Album O Rappa/O Rappa - Não vão me matar [www.slider.kz].mp3'},
{artist: 'O Rappa', name: 'O home bomba', src: 'Album O Rappa/O Rappa - O homem bomba [www.slider.kz].mp3'},
];

const audio = document.querySelector('audio');
const play = document.querySelector('.fi-rr-play');
const pause = document.querySelector('.fi-rr-pause')
const progress = document.querySelector('progress');
const timeInit = document.querySelector('.inicio');
const timeLeft = document.querySelector('.fim');
let musicName = document.querySelector('.descricao h2');
let name = document.querySelector('.descricao i')
let indexMusic = 0;

//eventos
play.addEventListener('click', function() {
  setTimeout(() => {
    audio.play()
  }, 1000);
});

pause.addEventListener('click', () => {
  audio.pause();
});

document.querySelector('.fi-rr-angle-left').addEventListener('click', () => {
  if (indexMusic > 0) {
    indexMusic -= 1;
  }
  renderMusic(indexMusic);
  setTimeout(() => {
    audio.play()
  }, 1000);
  console.log(indexMusic)
});

document.querySelector('.fi-rr-angle-right').addEventListener('click', () => {
  if (indexMusic < musics.length - 1) {
    indexMusic += 1
  }
  renderMusic(indexMusic);
  setTimeout(() => {
    audio.play()
  }, 1000);
  console.log(indexMusic)
});

//funçẽos

function renderMusic(index) {
  audio.setAttribute('src', musics[index].src);
  musicName.textContent = musics[index].name;
  name.textContent = musics[index].artist;

};

audio.addEventListener("timeupdate", (e)=>{

  const currentTime = e.target.currentTime;
  const duration = e.target.duration;

  progress.style.width = (currentTime / duration) * 100 + '%';
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10){
      currentSec = `0${currentSec}`;
  }

  timeInit.innerText = `${currentMin} : ${currentSec}`;

  let minutes = parseInt((audio.duration / 60 - currentTime / 60) % 60)
  let seconds = Math.floor(duration % 60)
  if (seconds === 0) {
    seconds = 59;
  }
  seconds <= 0 ? seconds = 59 : seconds;
  timeLeft.innerHTML = `${minutes} : ${seconds >= 0 ? seconds - Math.floor(currentTime) : seconds = 59}`

});