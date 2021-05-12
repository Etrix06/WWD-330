const form = document.forms['search'];  //it is the same as const form = document.getElementByTagname('form')[0];

const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
    event.preventDefault();
}