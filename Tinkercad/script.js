document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const playPauseButton = document.getElementById('play-pause-button');
    const playPauseIcon = playPauseButton.querySelector('img'); 

    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseIcon.src = '/Tinkercad/PauseIcon.png';
            playPauseIcon.alt = 'Pause';

        } else {
            video.pause();
            playPauseIcon.src = '/Tinkercad/PlayIcon.png';
            playPauseIcon.alt = 'Play';

        }
    });
});
