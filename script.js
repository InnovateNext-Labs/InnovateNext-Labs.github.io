// Open demo modal
function openDemo(videoSrc) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'flex';
    video.src = videoSrc;
    video.play();
}

// Close demo modal
function closeDemo() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'none';
    video.pause();
    video.src = '';
}

// Infinite scroll logic
const skillsSlider = document.querySelector('.skills-slider');
skillsSlider.innerHTML += skillsSlider.innerHTML; // Clone skills for circular effect
