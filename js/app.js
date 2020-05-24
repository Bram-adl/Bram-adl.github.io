/* Hamburger Event */
(function() {
	const navbar = document.getElementById('navbar')
	const hamburger = navbar.querySelector('.hamburger')

	hamburger.addEventListener('click', () => {
		navbar.classList.toggle('clicked')
	})
})()

/* Text Animation */
function changeText() {
	const TEXTS = ['Web Programmer', 'Web Designer', 'Web Developer']
	const textEl = document.getElementById('text')

	let index = 0
	setInterval( () => {
		index++
		if ( index == TEXTS.length ) index = 0
		const text = TEXTS[index]
		textEl.innerHTML = text
	}, 6000 )
}
changeText()