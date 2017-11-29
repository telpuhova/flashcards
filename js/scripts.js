$(document).ready(function() {
  $("h3").click(function() {
    // $(this).addClass("well");
    // $(this).children("p").first().addClass("well");
    $(this).toggle();
    $(this).next("p").toggle().addClass("well");
    // $("h3").removeClass();
  });
  $("p").click(function() {
    $(this).prev().show();
    // $("h3").show();
    // $("p").hide();
    $(this).toggle();
    // $(this).previous("h3").show();
  });
});
