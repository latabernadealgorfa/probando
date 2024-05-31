window.addEventListener('scroll', function () {
    var nav = document.getElementById('navbar');
    var scrollTop = window.scrollY;
    if (scrollTop > 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});


