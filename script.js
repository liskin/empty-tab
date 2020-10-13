function body_input(e) {
	document.location.hash = '#' + encodeURIComponent(e.target.innerHTML);
}

function document_click(e) {
	if (!document.body.innerText) {
		document.body.focus();
	} else {
		document.body.blur();
	}
}

function body_click(e) {
	e.stopPropagation();
}

document.body.addEventListener('input', body_input);
document.body.addEventListener('click', body_click);
document.addEventListener('click', document_click);

if (document.location.hash.startsWith('#')) {
	document.body.innerHTML = decodeURIComponent(document.location.hash.slice(1));
} else {
	document.body.innerHTML = '';
}
