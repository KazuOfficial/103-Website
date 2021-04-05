window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  var w = $(window).width();
  if (currentScroll > 200) {
    if (!$("header").hasClass("expand")) {
      $("header").addClass("expand");
    }
  } else {
    if ($("header").hasClass("expand")) {
      $("header").removeClass("expand");
    }
  }
  if (w > 1150) {
    if (currentScroll <= 320) {
      $(".youtube-section").stop().fadeOut(1);
    } else {
      $(".youtube-section").fadeIn(500);
    }

    if (currentScroll <= 1300) {
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
