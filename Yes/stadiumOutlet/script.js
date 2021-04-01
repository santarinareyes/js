const discountProcent = document.querySelectorAll(".highlight-sticker--rebate");
const originalPrice = document.querySelectorAll(
  ".product-card__price--regular"
);
const reducedPrice = document.querySelectorAll(".product-card__reduced-price");
const btnLoadMore = document.querySelector(".load-more");

let beforeLoadMoreClicked;

for (let i = 0; i < discountProcent.length; i++) {
  discountProcent[i].innerText =
    parseInt(reducedPrice[i].innerText.replace(/\s/g, "")) -
    parseInt(originalPrice[i].innerText.replace(/\s/g, "")) +
    "kr";
  beforeLoadMoreClicked = [i];
}

// btnLoadMore.addEventListener('click', function(){
// 	for (let i = beforeLoadMoreClicked; i < discountProcent.length; i++){
// 		discountProcent[i].innerText = parseInt(reducedPrice[i].innerText.replace(/\s/g, "")) - parseInt(originalPrice[i].innerText.replace(/\s/g, "")) + 'kr';
// 		beforeLoadMoreClicked = [i];
// 	}
// })
