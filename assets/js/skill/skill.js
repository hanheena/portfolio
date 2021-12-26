// 화면 스크롤 시 내용 표출

$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st > 1300) {
    $("#skill .graph_wrap_ul").addClass("animation");
  }
});
