document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn, .discord-btn');
    const container = document.querySelector('.container');

    // Add fade-in to container
    if (container) {
        container.classList.add('fade-in');
    }

    document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play(); // Play the audio
    this.style.display = 'none'; // Hide the play button
    document.getElementById('stopButton').style.display = 'inline-block'; // Show the stop button
});

document.getElementById('stopButton').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.pause(); // Stop the audio
    audio.currentTime = 0; // Reset audio to the start
    this.style.display = 'none'; // Hide the stop button
    document.getElementById('playButton').style.display = 'inline-block'; // Show the play button again
});

});
