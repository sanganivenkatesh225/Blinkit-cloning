const placeholderTexts = ['"sugar"', '"butter"','"curd"', '"bread"', '"eggs"'];
let index = 0;

function changePlaceholder() {
    const inputField = document.querySelector('.finput');
    inputField.setAttribute('placeholder', "Search"+ "  "+placeholderTexts[index]);
    index = (index + 1) % placeholderTexts.length;
}

setInterval(changePlaceholder, 1000); 
// Change placeholder every 2 seconds

