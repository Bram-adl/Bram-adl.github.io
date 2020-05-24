/* Hamburger Event */
(function() {
	const navbar = document.getElementById('navbar')
	const hamburger = navbar.querySelector('.hamburger')

	hamburger.addEventListener('click', () => {
		navbar.classList.toggle('clicked')
	})
})()