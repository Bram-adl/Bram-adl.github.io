const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', () => {
	const navigation = document.getElementById('navigation')
	navigation.classList.toggle('clicked')
})

function generateText() {
	const SUBTITLE_TEXT = ['Web Developer', 'Web Designer', 'Web Programmer']
	let index = 0
	let text
	setInterval(() => {
		index++
		if ( index == SUBTITLE_TEXT.length ) index = 0
		text = SUBTITLE_TEXT[index]
		const subtitleText = document.getElementById('subtitleText')
		subtitleText.innerHTML = ` I am a <span class="subtitle-text">${text}</span>`
	}, 4000)
}
generateText()

function switchMenu() {
	const navbarMenu = document.querySelectorAll('.navbar-menu-container p')
	const homeSection = document.getElementById('home')
	let currentSection = document.querySelector('.current-section')
	let activeMenu = document.querySelector('.navbar-menu-container p.active')

	navbarMenu.forEach(menu => {
		menu.addEventListener('click', e => {
			activeMenu.classList.remove('active')
			const targetMenu = e.target.parentElement
			targetMenu.classList.add('active')
			activeMenu = targetMenu
			const targetId = e.target.dataset.section
			const targetSection = document.getElementById(targetId)
			moveSection(currentSection, targetSection)
		})
	})

	function moveSection(current = homeSection, target = homeSection) {
		current.classList.remove('move-in')
		current.classList.add('move-out')
		target.classList.remove('move-out')
		target.classList.add('move-in')
		currentSection = target
	}
}
switchMenu()

function toggleProject() {
	const portfolioMenu = document.querySelectorAll('.portfolio-menu ul li')
	const portfolioImages = document.querySelectorAll('.portfolio-wrapper .box')
	let activeMenu = document.querySelector('.portfolio-menu ul li.active')

	portfolioMenu.forEach(menu => {
		menu.addEventListener('click', e => {
			activeMenu.classList.remove('active')
			e.target.classList.add('active')
			activeMenu = e.target
			const dataset = e.target.dataset.get
			let filteredImages = []
			if ( dataset == 'webdesign' ) {
				setPortfolioImages(dataset)
			} else if ( dataset == 'webproject' ) {
				setPortfolioImages(dataset)
			} else {
				portfolioImages.forEach(image => {
					image.style.display = 'block'
				})
			}
		})
	})

	function setPortfolioImages(type) {
		filteredImages = [...portfolioImages].filter(image => image.dataset.type == type)
		let difference = [...portfolioImages].filter(img => !filteredImages.includes(img))
		difference.forEach(distinct => {
			distinct.style.display = 'none'
		})
		filteredImages.forEach(image => {
			image.style.display = 'block'
		})
	}
}
toggleProject()



