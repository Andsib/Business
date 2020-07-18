const imageArray = [
    './images/bar.png',
    './images/bookshop.png',
    './images/hotel.png',
]

let firstPicture = document.querySelector('.radio_1');
let secondPicture = document.querySelector('.radio_2');
let thirdPicture = document.querySelector('.radio_3');
let image = document.querySelector('.tv_image');

function showImage() {
    firstPicture.addEventListener('click',()=> image.src = imageArray[0]);
    secondPicture.addEventListener('click',()=> image.src = imageArray[1]);
    thirdPicture.addEventListener('click',()=> image.src = imageArray[2]);
}

showImage();