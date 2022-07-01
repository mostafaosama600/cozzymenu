let span = document.querySelector('.uptotop');
window.onscroll = function () {
    if (this.scrollY >= 1000) {
        span.classList.add('showbtn');
    }
    else{
        span.classList.remove('showbtn');
    }
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}