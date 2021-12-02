var btnSearch = document.querySelector('.search-btn')

btnSearch.addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus();
})
