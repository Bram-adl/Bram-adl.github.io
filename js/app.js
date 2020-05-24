/* Hamburger Event */
(function() {
	const navbar = document.getElementById('navbar')
	const hamburger = navbar.querySelector('.hamburger')

	hamburger.addEventListener('click', () => {
		navbar.classList.toggle('clicked')
	})
})()

function setSection() {
	const navbarMenu = document.querySelectorAll('.navbar__menu li')
	let activeMenu = document.querySelector('.navbar__menu li.active')

	navbarMenu.forEach(menu => {
		menu.addEventListener('click', function() {
			const currentSection = document.getElementById(activeMenu.dataset.section)
			const targetSection = document.getElementById(this.dataset.section)
			activeMenu.classList.remove('active')
			this.classList.add('active')
			activeMenu = this
			moveSection(targetSection, currentSection)
		})
	})

	function moveSection(target, current) {
		target.classList.add('move-in')
		target.classList.remove('move-out')
		current.classList.add('move-out')
		current.classList.remove('move-in')
	}
}
setSection()

/* Text Animation */
function setChangeText() {
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
setChangeText()

/* Portfolio Filter */
function setPortfolio() {
	let activeTab = document.querySelector('.portfolio__tabs li.active')
	const portfolioTabs = document.querySelectorAll('.portfolio__tabs li')
	const portfolioImages = document.querySelectorAll('.portfolio__box')

	portfolioTabs.forEach(tab => {
		tab.addEventListener('click', (e) => {
			activeTab.classList.remove('active')
			e.target.classList.add('active')
			activeTab = e.target
			const dataset = e.target.dataset.type
			setImages(dataset)
		})
	})

	function setImages(dataset) {
		if ( dataset == 'all' ) return showImage(portfolioImages)

		let filtered = [...portfolioImages].filter(image => image.dataset.type == dataset)
		let difference = [...portfolioImages].filter(image => !filtered.includes(image))
		showImage(filtered)
		hideImage(difference)
	}

	function showImage(images) {
		images.forEach(image => {
			image.style.display = 'block'
		})
	}

	function hideImage(images) {
		images.forEach(image => {
			image.style.display = 'none'
		})
	}
}
setPortfolio()