// Scroll To Faq Button
document.getElementsByClassName("scroll-to-faq-button")[0].addEventListener("click", function () {
    if (window.outerWidth <= 768) {
        window.scrollTo({
            top: document.getElementById("anti-tiktok-union").offsetHeight,
            behavior: "smooth"
        });
    }
});