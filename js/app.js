// const acordions = document.querySelectorAll('.questions__item');


// acordions.forEach(el => {

// 	el.addEventListener('click', function(event) {
// 		const self = event.currentTarget;
// 		const content = self.querySelector('.questions__text');
	
// 		if (content.classList.contains('close')) {
// 			self.querySelector('.questions__text').classList.remove('close');
// 			self.classList.add('questions__item--active')

// 		} else {
// 			self.querySelector('.questions__text').classList.add('close');
// 			self.classList.remove('questions__item--active')
// 		}
// 	})
// });





let akk = document.querySelectorAll('.questions__item');


akk.forEach((item) => {

	let itemBody = item.querySelector('.questions__text');
	let itemHeight = itemBody.clientHeight;
	console.log(itemHeight)

	itemBody.style.height= '0px';

	item.onclick = function() {
		let akkordBody = this.closest('.questions__item').querySelector('.questions__text');
		
		akkordBody.classList.toggle('questions__text--open')


		if(akkordBody.classList.contains('questions__text--open')) {
			itemBody.style.height = itemHeight + 'px';
			item.classList.add('questions__item--active')
		} else {
			itemBody.style.height= '0px';
			item.classList.remove('questions__item--active')
		}
	}

})