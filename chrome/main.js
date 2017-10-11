Array.from(document.getElementsByClassName('outdated-diff-comment-container')).concat(Array.from(document.getElementsByClassName('outdated-comment'))).forEach(l => {
	l.classList.add('open');
	var fh = l.getElementsByClassName('file-header');
	if (fh) {
		fh[0].style.backgroundColor = "#fff3d4";
	}
});
