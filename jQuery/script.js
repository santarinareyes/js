"use_strict";

let hide = false;

$("#hide").click(function () {
  if (!hide) {
    $(".example").hide();
    hide = true;
  } else {
    $(".example").show();
    hide = false;
  }
});
