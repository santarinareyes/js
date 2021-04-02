let discountAmount = $(".highlight-sticker--rebate"),
  originalPrice = $(".product-card__price--regular"),
  reducedPrice = $(".product-card__reduced-price"),
  btnLoadMore = $(".load-more__link");

$(document).ready(function () {
  $.each(discountAmount, function (index, value) {
    let newPrice =
      parseFloat(reducedPrice.get(index).innerText.replace(/\s/g, "")) -
      parseFloat(originalPrice.get(index).innerText.replace(/\s/g, ""));
    discountAmount.get(index).innerText = newPrice + "kr";
  });

  btnLoadMore.click(function () {
    $.each(discountAmount, function (index, value) {
      let newPrice =
        parseFloat(reducedPrice.get(index).innerText.replace(/\s/g, "")) -
        parseFloat(originalPrice.get(index).innerText.replace(/\s/g, ""));
      discountAmount.get(index).innerText = newPrice + "kr";
    });
  });
});
