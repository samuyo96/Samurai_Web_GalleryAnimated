document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
});


