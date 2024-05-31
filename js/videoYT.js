
var videoIds = ['3-PWyXktmCE', 'uB8ylftXMaA', 'HLVepBOeawo'];
var currentVideoIndex = 0;
function mostrarVideo() {
    var videoAlert = document.getElementById('videos-yt');
    var videoIframe = document.getElementById('video-yt-cargado');

    videoIframe.src = 'https://www.youtube.com/embed/' + videoIds[currentVideoIndex];

    videoAlert.style.display = 'flex';
    setTimeout(function () {
        videoAlert.classList.add('mostrarVideosYT');
    }, 10);
}
function cerrarVideo() {
    var videoAlert = document.getElementById('videos-yt');
    videoAlert.classList.remove('mostrarVideosYT');
    setTimeout(function () {
        videoAlert.style.display = 'none';
        exitFullscreen();
    }, 500);
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
function retrocedeVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    actualizarVideo();
}
function siguienteVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    actualizarVideo();
}
function actualizarVideo() {
    var videoIframe = document.getElementById('video-yt-cargado');
    videoIframe.src = videoUrls[currentVideoIndex];
}