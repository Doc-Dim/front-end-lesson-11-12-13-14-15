
 // счетчик на карзину

let productCountEl = document.getElementById("products-count");
console.log(productCountEl)



let addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons)

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function() {
		let prevProductsCount = +productCountEl.textContent;
		productCountEl.textContent = prevProductsCount + 1;
	})
}




// выделение кнопки добовления в избранные

let btnList = document.querySelectorAll(".add-to-favorite");

for (let i = 0; i < btnList.length; i++){
	btnList[i].addEventListener("click", function() {
		if (btnList[i].classList.contains('favorite')) {
			btnList[i].classList.remove("favorite");
		} else {
			btnList[i].classList.add("favorite");
		}
 		
	})
}



  $('.slider-items').slick({
  	dots:true,
  	autoplay:true,
  	autoplayspeed:1000,
  })

