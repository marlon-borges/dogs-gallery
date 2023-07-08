let imagesContainer = document.querySelector('.images_container');
let numImagesPerLoading = 9;

async function getImages() {
    for (let i = 0; i < numImagesPerLoading; i++) {
        const loadingAnimation = document.createElement('div');
        imagesContainer.appendChild(loadingAnimation);
        loadingAnimation.classList.add('loading');
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        loadingAnimation.classList.add('fadeOut');
        loadingAnimation.style.display = "none";
        const img = document.createElement('img');
        img.setAttribute('data-fancybox', 'gallery');
        img.setAttribute('src', data.message);
        img.classList.add('fade');
        imagesContainer.appendChild(img);
    }
    let button = document.createElement("button");
    button.innerText = "Load more";
    button.classList.add('load_more');
    document.body.appendChild(button);
    button.addEventListener('click', () => {
        getImages();
        button.remove();
    });
}

getImages();

Fancybox.bind("[data-fancybox]", {
  });
