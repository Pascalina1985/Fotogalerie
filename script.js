let images = [
    './img/a.jpg',
    './img/b.jpg',
    './img/c.jpg',
    './img/d.jpg',
    './img/e.jpg',
    './img/f.jpg',
    './img/g.jpg',
    './img/h.jpg',
    './img/i.jpg',
    './img/j.jpg',
    './img/k.jpg',
    './img/l.jpg',
    './img/m.jpg',
    './img/n.jpg',
    './img/o.jpg',
    './img/p.jpg',
    './img/q.jpg',
    './img/r.jpg',
    './img/s.jpg'
];

function load() {
    for (i = 0; i < images.length; i++) {
        let image = images[i];
        document.getElementById('images-container').innerHTML += `
        <div id="changeBox" onclick="openImage(${i})" class="imageBox"><img src="${image}" /></div>
        `;
    }
}

function openImage(imageIndex) {
    cImage = imageIndex;
    let invisibleImage = document.getElementById('images-container');
    invisibleImage.style.display = 'none';
    let invesibleHeader = document.getElementById('header');
    invesibleHeader.style.display = 'none';

    document.getElementById('newImagesContainer').innerHTML += `
    <img onclick="closeImage()" class="xImage" src="./img/x.png">/>
    <div class="newImage">
        <img onclick="changeImage('previous')" class="arrowImage" src="./img/arrow_left.png">/>
        <img id="sprinterImage" class="showImage" src="${images[imageIndex]}" />
        <img onclick="changeImage('next')" class="arrowImage" src="./img/arrow_right.png">/>
        </div>
    `;
}

function changeImage(direction) {
    let sprinterImage = document.getElementById('sprinterImage');

    if (direction === 'previous') {
        cImage = (cImage - 1 + images.length) % images.length;
    } else if (direction === 'next') {
        cImage = (cImage + 1) % images.length;
    }

    sprinterImage.src = images[cImage];
}


function closeImage() {
    let vesibleImage = document.getElementById('images-container');
    vesibleImage.style.display = 'flex';
    let vesibleHeader = document.getElementById('header');
    vesibleHeader.style.display = 'flex';
    let newImagesContainer = document.getElementById('newImagesContainer');
    newImagesContainer.innerHTML = '';
}