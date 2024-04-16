(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;

  var audio = new Audio("LaguIbu.mp3");
  audio.loop = true;

  openB.addEventListener("click", function () {
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 1000);
    audio.play();
  });

  closeB.addEventListener("click", function () {
    card.setAttribute("class", "close-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });
})();
