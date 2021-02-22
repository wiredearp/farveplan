((fit) => {
	fit();
	onresize = fit;
})(function() {
	document.documentElement.style.setProperty('--height', innerHeight + 'px');
});