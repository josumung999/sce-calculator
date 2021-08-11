var btnConvert = document.getElementById('btn-convert');

var priceDisplay = document.getElementById('price');
var tshPrice, actualPrice;

btnConvert.addEventListener('click', function (e) {
	tshPrice = parseFloat(document.getElementById('tsh-price').value);
	Number(tshPrice);
	if (isNaN(tshPrice)) {
		alert('Saisissez un nombre !')
	} else {
		var tshRate = 1.49;
		var bifPrice = tshPrice * tshRate;
		var margin1 = 0.3;
		var margin2 = 0.2;

		if (bifPrice <= 100000 ) {
		 	actualPrice = numeral(Math.ceil(bifPrice + bifPrice*margin1)).format('0,0.0'); 
		} else if (bifPrice > 100000) {
			actualPrice = numeral(Math.ceil(bifPrice + bifPrice*margin2)).format('0,0.0');
		} else {
			alert("Ce nombre est négatif");
		}

		priceDisplay.textContent = actualPrice + " BIF";
	}

	e.preventDefault();
});