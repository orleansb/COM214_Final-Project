document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    video.autoplay = true;
    video.muted = true; // Mute the video to comply with autoplay policies
  });