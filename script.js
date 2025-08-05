(function() {
  var playBtn = document.getElementById('play-button');
  var audio = document.getElementById('background-music');

  playBtn.addEventListener('click', function() {
    audio.loop = true;       // define looping contínuo
    audio.play();            // inicia reprodução
    this.disabled = true;    // desabilita o botão
  });

  // Caso o atributo loop não funcione em algum navegador, reinicia manualmente
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  });

  window.addEventListener('scroll', function() {
    var finalImage = document.getElementById('final-image');
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 10) {
      finalImage.style.opacity = 1;
    }
  });
})();
