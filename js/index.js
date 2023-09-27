const navItems = $(".header-nav__left__items");
const carouselShop = $(".carousel__content__shop");
const linkedItem = $(".linked-A");
const handleHove = $(".explore-range-slider__ul__li");
$.each(navItems, function (index, item) {
  $(item).on("mouseenter", function () {
    $(this).addClass("items-active");
  });
  $(item).on("mouseleave", function () {
    $(this).removeClass("items-active");
  });
});
carouselShop.on("mouseenter", function () {
  const carouselSpan = $(this).find("span");
  carouselSpan.css({
    color: "black",
  });
});
carouselShop.on("mouseleave", function () {
  const carouselSpan = $(this).find("span");
  carouselSpan.css({
    color: "white",
  });
});
linkedItem.on("mouseenter", function () {
  $(this).css({
    color: "#898f4b",
  });
});
linkedItem.on("mouseleave", function () {
  $(this).css({
    color: "black",
  });
});

// slider items hover
$.each(handleHove, (i, items) => {
  $(items).on("mouseenter", function () {
    $(this).css({
      transform: "translateY(-12%)",
    });
    if ($(this).children().hasClass("greenHover")) {
      $(this).find(".greenHover").css({
        backgroundColor: "#414929",
        borderRadius: "12px 12px 50% 50%/ 12px 12px 25% 25%",
      });
    } else if ($(this).children().hasClass("purpleHover")) {
      $(this).find(".purpleHover").css({
        backgroundColor: "#64587a",
        borderRadius: "12px 12px 50% 50%/ 12px 12px 25% 25%",
      });
    } else if ($(this).children().hasClass("brownHover")) {
      $(this).find(".brownHover").css({
        backgroundColor: "#927156",
        borderRadius: "12px 12px 50% 50%/ 12px 12px 25% 25%",
      });
    } else if ($(this).children().hasClass("blueHover")) {
      $(this).find(".blueHover").css({
        backgroundColor: "#8791aa",
        borderRadius: "12px 12px 50% 50%/ 12px 12px 25% 25%",
      });
    }
  });
  $(items).on("mouseleave", function () {
    $(this).css({
      transform: "translateY(0)",
    });
    $(this).children().css({
      backgroundColor: "white",
      borderRadius: "12px",
    });
  });
});

const slider = function (direction, tag, current) {
  const tags = $(tag);

  const sliderScroll = tags.parents(".explore-range-slider");
  const sliderScrollUl = sliderScroll.find(".explore-range-slider__ul");
  const sliderScrollUlItems = sliderScrollUl.find(
    ".explore-range-slider__ul__li"
  );
  const sliderScrollUlItemsLength = sliderScrollUlItems.length;
  const sliderWidth = parseInt(sliderScrollUlItems.css("width"));
  const sliderMargin = parseInt(sliderScrollUlItems.css("margin-right"));
  let curSilde = 0;
  console.log(curSilde);
  // calculate width
  const goToSlider = function (cs) {
    const translateXValue = -(sliderWidth + sliderMargin) * cs;
    sliderScrollUl.css({ transform: `translateX(${translateXValue}px)` });
  };
  const prevSlider = function () {
    if (curSilde > 0) {
      curSilde = current;
    } else {
      curSilde--;
    }
    goToSlider(curSilde);
  };
  const nextSlider = function () {
    if (curSilde === current) {
      curSilde = 0;
    } else {
      curSilde++;
    }
    goToSlider(curSilde);
  };
  if (direction === "left") {
    prevSlider();
  }
  if (direction === "right") {
    nextSlider();
  }
};
const headerHover = function () {
  const headerHove = $(".header-hover");
  $.each(headerHove, (i, items) => {
    $(items).on("mouseenter", function () {
      const hoverItems = $(items).find(".header-nav-hover");
      hoverItems.css({ display: "flex" });
    });
    $(items).on("mouseleave", function () {
      const hoverItems = $(items).find(".header-nav-hover");
      hoverItems.css({ display: "none" });
    });
  });
};
headerHover();

// menu show
$(".menu-icon").on("click", function () {
  $(".hamburger-menu").fadeIn(0);
  $(".hamburger-menu").animate({ left: "0" }, 700);
  $(".dark").fadeIn(0);
});
$(".closed").on("click", function () {
  $(".hamburger-menu").animate({ left: "-40rem" }, 700);
  $(".hamburger-menu").fadeOut(0);
  $(".dark").fadeOut(0);
});
