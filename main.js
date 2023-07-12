
let index = 0;
const images = document.getElementsByClassName("image");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const offersButton = document.querySelector('.rounded-button');

displayImages();
function displayImages() {
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	index++;
	if (index > images.length) {
		index = 1;
	}
	images[index - 1].style.display = "block";
	setTimeout(displayImages, 5000);
}

prevButton.addEventListener('click', function() {
	index--;
	if (index < 1) {
		index = images.length;
	}
	displayImages();
});

nextButton.addEventListener('click', function() {
	index++;
	if (index > images.length) {
		index = 1;
	}
	displayImages();
});



document.addEventListener('DOMContentLoaded', function() {
	// Smooth scrolling to the introductory section when Home link is clicked
	document.querySelector('nav ul li a[href="#home"]').addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('#introductory').scrollIntoView({ behavior: 'smooth' });
	});

	// Smooth scrolling to the Offers section when the arrow button is clicked
	document.querySelector('#Offers .arrow-down').addEventListener('click', function(event) {
		event.preventDefault();
		const offersContent = document.querySelector('#Offers .offers-content');
		offersContent.scrollIntoView({ behavior: 'smooth' });
	});

	// Scroll to the Offers section when "Our Offers" button is clicked
	offersButton.addEventListener('click', function(event) {
		event.preventDefault();
		const offersSection = document.querySelector('#Offers');
		offersSection.scrollIntoView({ behavior: 'smooth' });
	});
});


document.addEventListener('DOMContentLoaded', function() {
	const leftContent = document.querySelector('.left-content');
	const rightContent = document.querySelector('.right-content');
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	};

	// Function to apply the morph effect to the left content
	function handleLeftContent(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				leftContent.classList.add('morph-enter');
			} else {
				leftContent.classList.remove('morph-enter');
			}
		});
	}

	// Function to apply the morph effect to the right content
	function handleRightContent(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				rightContent.classList.add('morph-enter');
			} else {
				rightContent.classList.remove('morph-enter');
			}
		});
	}

	// Create the observers for left and right content
	const leftContentObserver = new IntersectionObserver(handleLeftContent, observerOptions);
	const rightContentObserver = new IntersectionObserver(handleRightContent, observerOptions);

	// Observe the left and right content
	leftContentObserver.observe(leftContent);
	rightContentObserver.observe(rightContent);
});