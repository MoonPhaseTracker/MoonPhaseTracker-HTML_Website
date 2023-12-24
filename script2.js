// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function() {
    var scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Smooth scroll to top when the button is clicked
document.getElementById("scrollToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
