// $("#header .header_menu").click(function () {
//   alert("클릭 이벤트 확인");
// });

// 헤더 - 메뉴 클릭 시 내용 표출
$(".header_menu").click(function () {
  //  $(".header_menu").addClass("show");

  var menu = $("#menu");

  if (menu.hasClass("not-visible") === true) {
    menu.attr("class", "visible");
  } else {
    menu.attr("class", "not-visible");
  }
});

// 닫기 클릭 시 창 숨기기
$("#menu .fa-times-circle").click(function () {
  var menu = $("#menu");

  menu.attr("class", "not-visible");
});

// 화면 스크롤 시 헤더 메뉴 감춤
var banner_height = $("#banner").outerHeight();

$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  // console.log("banner_height = " + banner_height);
  // console.log("st = " + st);

  if (st > banner_height) {
    $("#header").addClass("not-visible");
  } else {
    $("#header").removeClass("not-visible");
  }
});
