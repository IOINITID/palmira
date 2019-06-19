$(function () {
  $("#tabs").tabs();
});

$(".item-description").click(() => {
  $(".item-description").addClass("item-active");
  $(".item-specs").removeClass("item-active");
});

$(".item-specs").click(() => {
  $(".item-specs").addClass("item-active");
  $(".item-description").removeClass("item-active");
});
