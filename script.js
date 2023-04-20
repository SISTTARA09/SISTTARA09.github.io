
// Header Script
let myList = document.querySelector('.list');
let myShop = document.querySelector('.shop')
myList.addEventListener('click', ev => {
    let myAnchorTag = document.querySelector('a.active');
    let target = ev.target;
    target.classList == 'list' ? target.classList == 'list' : target.classList = 'active';
    target === myList ? target.classList = 'list' : myAnchorTag.removeAttribute('class')
},false)

// image Script
let imageSpansContainer = document.querySelector('#image-spans');

imageSpansContainer.addEventListener('click', ev => {
    let target = ev.target;
    let myImage = document.querySelector('img.active')
    target == imageSpansContainer ? true : target.classList = 'active';
    target == imageSpansContainer ? target.classList = 'spans' : myImage.removeAttribute('class');
})
// image Changer
let womenImage = document.querySelector('img#women-image')
imageSpansContainer.addEventListener('click', ev => {
    let target = ev.target;
    let src = target.getAttribute('src');
    target == imageSpansContainer ? true :
    womenImage.setAttribute('src', src);
})
// Heart Icon
let heartIcon = document.getElementById('heart-icon')
heartIcon.onclick = () => heartIcon.style.color = 'red'

// Quantity Box
let quantityBox = document.querySelector('.quantity-box')
let quantityNumber = document.getElementById('quantity-number')
let increament = document.getElementById('increament')
let decreament = document.getElementById('decreament')
quantityBox.addEventListener('click', ev => {
    let target = ev.target;
    target == increament ? ++quantityNumber.textContent : target == decreament ? --quantityNumber.textContent : false;
})
// add Color To localStorage
let spansColorParent = document.querySelector('.color-size .color .spans')
let spansParent = document.querySelector('.color-size .color')
let colorPreview = document.createElement('p')
spansColorParent.addEventListener('click', ev => {
    let target = ev.target;
    target == spansColorParent ?
        false : color = target.getAttribute('data-color');
    localStorage.setItem('color', color)
    let localStorageColor = localStorage.getItem('color');
    colorPreview.textContent = 'Color:' + ' ' + localStorageColor;
    spansParent.appendChild(colorPreview)
})

//  Add Size To LocalStorage

let sizeParent = document.querySelector('.color-size .size');
let sizeSpansContainer = sizeParent.children[1];
let sizePreview = document.createElement('p')
sizeSpansContainer.addEventListener('click', ev => {
    let target = ev.target;
    target == sizeSpansContainer ? true : size = target.textContent; localStorage.setItem('size', size);
    let localSize = localStorage.getItem('size');
    sizePreview.textContent = 'size:' + ' ' + localSize;
    sizeParent.appendChild(sizePreview)
})

console.dir(document)