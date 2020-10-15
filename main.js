var catalogItem = document.querySelectorAll('.catalog__item');
catalogphoto = document.querySelectorAll('.catalog__photo');

var isFramed = false;
try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

function haveOrNotScrollbar(array, classWithScrollbar, classWithoutScrollbar) {
	for (let i = 0; i < array.length; i++) {
		if (isFramed) {
			array[i].classList.add(classWithScrollbar);
			array[i].classList.remove(classWithoutScrollbar);
			/* страница загружена во фрейме */
		} else {
			array[i].classList.add(classWithoutScrollbar);
			array[i].classList.remove(classWithScrollbar);
			/* страница загружена в основном окне */
		}
	}
}

haveOrNotScrollbar(catalogItem, 'catalog__item_width-with-scrollbar', 'catalog__item_width-without-scrollbar');
haveOrNotScrollbar(catalogphoto, 'catalog__photo_height-with-scrollbar', 'catalog__photo_height-without-scrollbar')
