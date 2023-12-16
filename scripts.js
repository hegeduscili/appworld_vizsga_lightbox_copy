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
    fullScreenImage.id = 'fs_image';

    fullScreenContainer.innerHTML = '';
    fullScreenContainer.appendChild(fullScreenImage);

    fullScreenImage.animate({
        'opacity': 1,
        'transform': 'scale(1)'
    }, 1000); 
}
    )};

    

fullScreenContainer.addEventListener('click',function(){
    if (event.target.id === 'fs_image') {
        fullScreenContainer.style.display = 'fixed';
    }else{
        fullScreenContainer.style.display = 'none';
        console.log('szurke')
    }
})



