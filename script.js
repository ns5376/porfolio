window.addEventListener('load', function() {
    const goggles = document.getElementById('vr-goggles');
    goggles.addEventListener('animationend', function() {
        goggles.style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    });
});
