const links = document.querySelectorAll('a[href*="#"]');


document.querySelector(".main").addEventListener('touchstart', function(event){
	for (let anchor of links) {
		anchor.addEventListener('click', (event) => {
			event.preventDefault();
	
			let blockId = anchor.getAttribute('href');
			document.querySelector('' + blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
});