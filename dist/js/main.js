let phoneImg = document.querySelector('.phone-xs__img');
let phoneLi = document.querySelector('.phone-number-xs');
let navbar = document.querySelector('.navbar');



function showPhone(){

	if (phoneLi.style.display = 'none') {
		phoneLi.style.display = 'block';
	}

	if (phoneLi.style.display = 'block') {
		phoneLi.style.display = 'none';
	}


};


phoneImg.addEventListener('click', showPhone());








	