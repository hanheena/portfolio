// $(document).ready(function () {
//   alert("프로필 스크립트 타나");
// });

// 화면 스크롤 시 내용 표출
var top_height = $("#banner").outerHeight();
var top_height_minus = top_height - 40;

$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  // console.log("banner_height = " + banner_height);
  // console.log("st = " + st);

  if (st > 400) {
    $("#profile .tatal_contents_wrap").addClass("animation");
  }
});
