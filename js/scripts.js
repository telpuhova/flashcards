$(document).ready(function() {
  $("h3").click(function() {
    $(this).toggle();
    $(this).next("p").toggle();
  });
  $("p").click(function() {
    $("h3").show();
    $("p").hide();
    // $(this).previous("h3").show();
  });
});
