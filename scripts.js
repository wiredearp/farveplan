((fit) => {
	fit();
	onresize = fit;
})(function() {
	document.documentElement.style.setProperty('--height', innerHeight + 'px');
});

(() => {
	onhashchange = () => !location.hash && (document.querySelector('main').scrollTop = 0);
})();

document.querySelectorAll('figure').forEach(figure => {
	setup(figure.querySelectorAll('picture'), figure.querySelectorAll('button'));
});

/**
 * @param {NodeList<HTMLPictureElement>} pictures 
 * @param {NodeList<HTMLButtonElement>} buttons 
 */
function setup(pictures, buttons) {
	buttons.forEach((button, index) => {
		button.onclick = () => {
			pictures.forEach((pic, i) => pic.style.display = i === index ? 'block' : 'none');
		};
	});
}