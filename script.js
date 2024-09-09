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

// Access the audio element
var audio = document.getElementById('myAudio');

// Use the Media Session API to add metadata (if supported by the browser)
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Martin Trenger Hjelp',  // Replace with actual song title
        artist: 'AI',  // Replace with artist name
        album: 'Martin Trenger Hjelp',  // Replace with album name
        artwork: [
            { src: 'images/album-cover.jpg', sizes: '512x512', type: 'image/jpeg' } // Replace with actual album cover image path
        ]
    });

    // Optionally, you can handle media control events (like play, pause, etc.)
    navigator.mediaSession.setActionHandler('play', function() { audio.play(); });
    navigator.mediaSession.setActionHandler('pause', function() { audio.pause(); });
}

document.getElementById('stopButton').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.pause(); // Stop the audio
    audio.currentTime = 0; // Reset audio to the start
    this.style.display = 'none'; // Hide the stop button
    document.getElementById('playButton').style.display = 'inline-block'; // Show the play button again
});

});
