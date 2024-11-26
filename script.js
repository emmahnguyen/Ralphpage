document.addEventListener("DOMContentLoaded", () => {
    // Select all paragraphs with the fade effect
    const paragraphs = document.querySelectorAll(".fade-paragraph");

    // Function to add 'visible' class for fade-in effect
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add("visible");
        }, index * 400); // delay each paragraph by 400ms for staggered fade-in
    });

    // Toggle visibility (fade in/out) when paragraph is clicked
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener("click", () => {
            paragraph.classList.toggle("visible");
        });
    });
});
