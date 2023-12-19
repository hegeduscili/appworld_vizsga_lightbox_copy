const images = document.getElementsByClassName('picture');
const fullScreenContainer = document.getElementById('full_screen');

const hounds_pics = document.getElementsByClassName('hounds_pic');
const cats_pics = document.getElementsByClassName('cats_pic');

var leftIcon = document.createElement("i");
var rightIcon = document.createElement("i");

var currentIndexHounds = 0;
var currentIndexCats = 0;

function showImage(index, gallery) {
  let currentGallery;

  if (gallery === 'hounds') {
    currentGallery = hounds_pics;
  } else if (gallery === 'cats') {
    currentGallery = cats_pics;
  }
  

  const fullScreenImage = document.getElementById('fs_image');
  fullScreenImage.src = currentGallery[index].src;
  fullScreenImage.alt = currentGallery[index].alt;
}

for (const img of images) {
  img.addEventListener('click', function () {
    const fullScreenImage = document.createElement('img');

    fullScreenContainer.style.display = 'flex';

    fullScreenImage.src = img.src;
    fullScreenImage.alt = img.alt;
    fullScreenImage.id = 'fs_image';

    fullScreenContainer.innerHTML = '';

    leftIcon.className = "fas fa-arrow-left arrow-icon";
    leftIcon.id = "prev";
    leftIcon.addEventListener('click', function () {
      if (img.classList.contains('hounds_pic')) {
        currentIndexHounds = (currentIndexHounds - 1 + hounds_pics.length) % hounds_pics.length;
        showImage(currentIndexHounds, 'hounds');
      } else if (img.classList.contains('cats_pic')) {
        currentIndexCats = (currentIndexCats - 1 + cats_pics.length) % cats_pics.length;
        showImage(currentIndexCats, 'cats');
      }
    });

    fullScreenContainer.appendChild(fullScreenImage);

    rightIcon.className = "fas fa-arrow-right arrow-icon";
    rightIcon.id = "next";
    rightIcon.addEventListener('click', function () {
      if (img.classList.contains('hounds_pic')) {
        currentIndexHounds = (currentIndexHounds + 1) % hounds_pics.length;
        showImage(currentIndexHounds, 'hounds');
      } else if (img.classList.contains('cats_pic')) {
        currentIndexCats = (currentIndexCats + 1) % cats_pics.length;
        showImage(currentIndexCats, 'cats');
      }
    });

    fullScreenContainer.appendChild(leftIcon);
    fullScreenContainer.appendChild(rightIcon);

    if (img.classList.contains('hounds_pic')) {
      currentIndexHounds = Array.from(hounds_pics).indexOf(img);
      showImage(currentIndexHounds, 'hounds');
    } else if (img.classList.contains('cats_pic')) {
      currentIndexCats = Array.from(cats_pics).indexOf(img);
      showImage(currentIndexCats, 'cats');
    }
  });
}

fullScreenContainer.addEventListener('click', function () {
  if (event.target.id === 'prev' || event.target.id === 'next') {
    fullScreenContainer.style.display = 'fixed';
    console.log('kövi vagy elozo');
  } else if (event.target.id === 'fs_image') {
    fullScreenContainer.style.display = 'fixed';
  } else {
    fullScreenContainer.style.display = 'none';
    console.log('szurke');
  }
});
