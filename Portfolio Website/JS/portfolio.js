// functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// this function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// this function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // takes all the elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // this takes all the elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // if n (the number passed into the function) is greater than the length of the array "slides", the slidesIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // if n is less than 1, the slideshow is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // this for loop takes each item in the array "slides" and sets the display to none.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // this for loop takes each item in the array "Dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // this displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // this adds the active styling to the dot associated with the image
}