function showMoreMP() {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = ''; // Clear previous content

    var images = document.querySelectorAll('.photos-container img.mp');
    images.forEach(function(img) {
        var newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        newImg.style.width = '100%';
        modalContent.appendChild(newImg);
    });

    modal.style.display = 'block';
}

function showMoreDiablo() {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = ''; // Clear previous content

    var images = document.querySelectorAll('.photos-container img.diablo');
    images.forEach(function(img) {
        var newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        newImg.style.width = '100%';
        modalContent.appendChild(newImg);
    });

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}