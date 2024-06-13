// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const mainImage = item.querySelector('.main-image');
        const hoverImage = item.querySelector('.hover-image');

        item.addEventListener('mouseover', () => {
            mainImage.style.opacity = '0';
            hoverImage.style.opacity = '1';
        });

        item.addEventListener('mouseout', () => {
            mainImage.style.opacity = '1';
            hoverImage.style.opacity = '0';
        });

        mainImage.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });

        hoverImage.addEventListener('click', function() {
            openModal(mainImage.src, mainImage.alt);
        });
    });

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    function openModal(src, alt) {
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt;
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
