const images = document.getElementsByClassName('picture');
const fullScreenContainer = document.getElementById('full_screen');
const greyback = document.getElementById('all');

const hounds_pics = document.getElementsByClassName('hounds_pic');
const cats_pics = document.getElementsByClassName('cats_pic');


for (const img of images) {
    img.addEventListener('click',function(){
    const fullScreenImage = document.createElement('img');

    fullScreenContainer.style.display = 'flex';

    fullScreenImage.src = img.src;
    fullScreenImage.alt = img.alt;

    fullScreenContainer.innerHTML = '';
    fullScreenContainer.appendChild(fullScreenImage);

    fullScreenImage.style.pointerEvents = 'none';
});
}

fullScreenContainer.addEventListener('click',function(){
    fullScreenContainer.style.display = 'none';
})



