const playlistContainerTag = document.getElementsByClassName("playlistContainer") [0];
const audioTag = document.getElementsByClassName("audioTag") [0];
const musicLengthTag = document.getElementsByClassName("musicLength") [0];
const currentProgressBarTag = document.getElementById("currentProgressBar");
const playButtomTag = document.getElementsByClassName("playButtom") [0];
const pauseButtomTag = document.getElementsByClassName("pauseButtom") [0];
const previousButtomTag = document.getElementsByClassName("previousButtom") [0];
const nextButtomTag = document.getElementsByClassName("nextButtom") [0];
  
const tracks = [
    {trackId: "music/sample1.mp3", title: "test_1_I love you Win Ei"},
    {trackId: "music/sample2.mp3", title: "test_2_You are my love Win Ei"},
    {trackId: "music/sample3.mp3", title: "test_3_I love you more than my life"},
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        playSong();
        currentSongIndex = i;
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString()+". " + tracks[i].title;
    trackTag.textContent = title;
    playlistContainerTag.append(trackTag);
};

let durationText = "00:00";
let duration = 0;

audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = minutesAndSecondsText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = minutesAndSecondsText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText+ " / " +durationText;
    musicLengthTag.textContent =  currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (350/duration) * currentTime; 
    currentProgressBarTag.style.width = currentProgressWidth.toString()+ "px";
};

let currentSongIndex = 0;
let playing = true;

playButtomTag.addEventListener("click", () => {
    const currentTime = Math.floor (audioTag.currentTime);
    playing = true;
    if (currentTime===0) {
        playSong();
    } else {
        audioTag.play();
        playAndPauseChanging();
    }
    
});

pauseButtomTag.addEventListener("click", () => {
    playing = false;
    audioTag.pause();
    playAndPauseChanging();
});

const playAndPauseChanging = () => {
    if (playing) {
        playButtomTag.style.display = "none";
        pauseButtomTag.style.display = "inline";
    }else {
        playButtomTag.style.display = "inline";
        pauseButtomTag.style.display = "none";
     }
};

previousButtomTag.addEventListener("click", () => {
    if (currentSongIndex === 0) {
        return;
    } 
    currentSongIndex -= 1;
    playSong();
});

nextButtomTag.addEventListener("click", () => {
    if (currentSongIndex === tracks.length - 1) {
        return;
    }
    currentSongIndex += 1;
    playSong(); 
}); 

const playSong = () => {
    const songPlaying = tracks[currentSongIndex].trackId;
    audioTag.src = songPlaying;
    audioTag.play();
    playing = true;
    playAndPauseChanging();
}

const minutesAndSecondsText = (totalSecond) => {
    const minutes = Math.floor(totalSecond/60);
    const seconds = totalSecond%60;

    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    return minutesText + ":" + secondsText
}