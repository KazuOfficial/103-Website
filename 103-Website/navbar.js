const checkpoint = 320;
const checkpoint2 = 1300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  var w = $(window).width();
  if (w > 1150) {
    if (currentScroll <= checkpoint) {
      $(".youtube-section").stop().fadeOut(1);
    } else {
      $(".youtube-section").fadeIn(500);
    }

    if (currentScroll <= checkpoint2) {
      $(".circle-section").stop().fadeOut(1);
    } else {
      $(".circle-section").fadeIn(500);
    }
  } else {
    $(".youtube-section").fadeIn(1);
    $(".circle-section").fadeIn(1);
  }
});

$(document).ready(function () {
  $("body").fadeIn(500);
  $(".youtube-section").fadeOut(1);
  $(".circle-section").fadeOut(1);
});
