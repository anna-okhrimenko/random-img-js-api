const picture = document.querySelector('#picture');
const picturePreview = document.querySelector('#picture-preview');
const url = 'https://api.thecatapi.com/v1/images/search';
const downloadBtn = document.querySelector('.download');
const imgAlbum = document.querySelector('.img-album');

const downloadImg = (imgElement) => {
    fetch(url) 
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        imgElement.src = data[0]['url'];
    });
}
downloadImg(picture);
downloadImg(picturePreview);


downloadBtn.addEventListener('click', () => {
    downloadImg(picture);
})

const createImges = (countElements, parentElement) => {
    for (let i = 0; i < countElements; i++) {
        const imgLayout = document.createElement('div');
        imgLayout.setAttribute('class', 'img-layout');
        parentElement.appendChild(imgLayout);
    
        const img = document.createElement('img');
        img.setAttribute('class', 'img-fluid');
        downloadImg(img);
        imgLayout.appendChild(img);
    
    }
}
createImges(10, imgAlbum);

const imgPreview = document.querySelector('.imges-preview');
createImges(8, imgPreview);

const miniImg = imgPreview.querySelectorAll('.img-fluid');
miniImg.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('src');
        picturePreview.setAttribute('src', src);
        const active = imgPreview.querySelector('.active');
        if(active) {
            active.classList.remove('active');
        }
        item.classList.add('active');

    });
});