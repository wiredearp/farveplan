((fit) => {
	fit();
	onresize = fit;
})(function() {
	document.documentElement.style.setProperty('--height', innerHeight + 'px');
});

(() => {
	onhashchange = () => !location.hash && (document.querySelector('main').scrollTop = 0);
})();