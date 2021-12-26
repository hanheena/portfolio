// 화면 스크롤 시 내용 표출
$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  // console.log("banner_height = " + banner_height);
  // console.log("st = " + st);

  if (st > 2800) {
    $("#project .contents").addClass("animation");
  }
});

// 이미지 슬라이드
var slideIndex = 1;
showSlides("edms", slideIndex);
showSlides("ems1", slideIndex);
showSlides("ems2", slideIndex);
showSlides("ups", slideIndex);
showSlides("drone", slideIndex);

function plusSlides(ele, n) {
  // console.log("plusSlides : " + ele);
  showSlides(ele, (slideIndex += n));
}

function currentSlide(ele, n) {
  // console.log("currentSlide : " + ele);
  showSlides(ele, (slideIndex = n));
}

function showSlides(ele, n) {
  var i;
  var slides = document.getElementById(ele).querySelectorAll(".slide_img");
  var dots = document.getElementById(ele).querySelectorAll(".dot");

  console.log("showSlides : " + slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
