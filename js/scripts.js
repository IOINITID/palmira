//Tabs actions
$(function () {
  $("#tabs").tabs();
});
//Tabs actions
$(".item-description").click(() => {
  $(".item-description").addClass("item-active");
  $(".item-specs").removeClass("item-active");
});
//Tabs actions
$(".item-specs").click(() => {
  $(".item-specs").addClass("item-active");
  $(".item-description").removeClass("item-active");
});
//Images actions
function l_image(a) {
  document.largeIMG.src = a
}
