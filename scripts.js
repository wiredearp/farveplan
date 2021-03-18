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
	const show = index => (elm, i) => elm.style.display = i === index ? 'block' : 'none';
	const mark = index => (elm, i) => elm.classList.toggle('mark', i === index);
	if (pictures.length === buttons.length) {
		buttons.forEach(mark(0));
		buttons.forEach((button, index) => {
			button.onclick = () => {
				pictures.forEach(show(index));
				buttons.forEach(mark(index));
			};
		});
	} else {
		alert('Ouch');
	}
}