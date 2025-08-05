/* script.js */
document.getElementById("play-button").addEventListener("click", function () {
  var audio = document.getElementById("background-music")
  audio.loop = true;
  audio.play()
  this.disabled = true // desabilita o botão após clique
})

window.addEventListener("scroll", function () {
  var finalImage = document.getElementById("final-image")
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 10
  ) {
    finalImage.style.opacity = 1
  }
})
