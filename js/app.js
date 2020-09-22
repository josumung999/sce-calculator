var btnConvert = document.getElementById('btn-convert');

var memberPriceDisplay = document.getElementById('member-price');
var nonMemberPriceDisplay = document.getElementById('non-member-price');
var memberPrice, nonMemberPrice, tshPrice;

btnConvert.addEventListener('click', function (e) {
	tshPrice = parseFloat(document.getElementById('tsh-price').value);
	Number(tshPrice);
	if (isNaN(tshPrice)) {
		alert('Saisissez un nombre !')
	} else {
		var tshRate = 1.36;
		var bifPrice = tshPrice * tshRate;
		var margin1 = 0.3;
		var margin2 = 0.2;
		var memberDiscount = bifPrice * 0.03;

		if (bifPrice <= 100000 ) {
		 	nonMemberPrice = numeral(Math.ceil(bifPrice + bifPrice*margin1)).format('0,0.0');
			memberPrice = numeral(Math.ceil((bifPrice + bifPrice*margin1) - memberDiscount)).format('0,0.0'); 
		} else if (bifPrice > 100000) {
			nonMemberPrice = numeral(Math.ceil(bifPrice + bifPrice*margin2)).format('0,0.0');
			memberPrice = numeral(Math.ceil((bifPrice + bifPrice*margin2) - memberDiscount)).format('0,0.0');
		} else {
			alert("Ce nombre est négatif");
		}

		memberPriceDisplay.textContent = memberPrice + " BIF";
		nonMemberPriceDisplay.textContent = nonMemberPrice + " BIF";
	}

	e.preventDefault();
});