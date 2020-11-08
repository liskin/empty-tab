function body_input(e) {
	document.location.hash = '#' + encodeURIComponent(e.target.innerText);
	document.title = document.body.innerText;
}

function document_click(e) {
	if (!document.body.innerText.trim()) {
		document.body.focus();
	} else {
		document.body.blur();
	}
}

function body_click(e) {
	e.stopPropagation();
}

function escape_key(e) {
	if (e.key === "Escape") {
		document.body.blur();
	}
}

document.body.addEventListener('input', body_input);
document.body.addEventListener('click', body_click);
document.body.addEventListener('keydown', escape_key);
document.addEventListener('click', document_click);

if (document.location.hash.startsWith('#')) {
	document.title = document.body.innerText = decodeURIComponent(document.location.hash.slice(1));
} else {
	document.body.innerHTML = '';
}
