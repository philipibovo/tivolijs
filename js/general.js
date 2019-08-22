$(window).on("load", function() {
  $("#header-btn-download").click(function() {
    window.location = "tivolijs-1.0.0.zip";
  });

  $("#btn-download").click(function() {
    window.location = "tivolijs-1.0.0.zip";
  });

  $(".menu > ul > li > ul span.title").click(function() {
    $(this)
      .children()
      .toggleClass("fa-sort-down");
    $(this)
      .children()
      .toggleClass("fa-caret-up");
    $(this)
      .next()
      .toggleClass("show");
  });

  $(".menu span").click(function() {
    if ($(window).innerWidth() >= "992") {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).attr("for")).offset().top + -50
        },
        500
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).attr("for")).offset().top + -15
        },
        200
      );

      if (!$(this).hasClass("title")) {
        showHideMenu();
      }
    }
  });

  $("#menu-mobile-action").click(function() {
    showHideMenu();
  });
});

$(document).on("scroll", function() {
  if ($(window).innerWidth() >= "992") {
    if (
      $(window).scrollTop() >=
      parseInt(
        $("header")
          .css("height")
          .replace("px", "")
      )
    ) {
      $(".header-min").addClass("show");
      $(".menu").addClass("fixed");
      $(".content").addClass("margin-left");
    } else {
      if ($(".header-min").hasClass("show")) {
        $(".header-min").removeClass("show");
      }

      if ($(".menu").hasClass("fixed")) {
        $(".menu").removeClass("fixed");
      }

      if ($(".content").hasClass("margin-left")) {
        $(".content").removeClass("margin-left");
      }
    }

    if (
      $(document).height() - $(window).height() - $(window).scrollTop() <=
      parseInt(
        $("footer")
          .css("height")
          .replace("px", "")
      )
    ) {
      $(".menu").addClass("footer-visible");
    } else {
      $(".menu").removeClass("footer-visible");
    }
  }
});

function showHideMenu(swipe) {
  $(".header-min").toggleClass("skew");
  $(".content").toggleClass("skew");
  $(".menu").toggleClass("skew");
  $(".shadow-top-left").toggleClass("skew");
  $(".shadow-top-right").toggleClass("skew");
  $(".header-menu-mobile ").toggleClass("skew");
  if ($("#menu-mobile-action i").hasClass("fa-bars")) {
    $("#menu-mobile-action i").removeClass("fa-bars");
    $("#menu-mobile-action i").addClass("fa-arrow-right");
  } else {
    $("#menu-mobile-action i").removeClass("fa-arrow-right");
    $("#menu-mobile-action i").addClass("fa-bars");
  }
}
