document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingTexts = document.querySelectorAll(".rating-text .text");
    const ratingInput = document.getElementById("rating");

    stars.forEach((star, index) => {
        star.addEventListener("click", function() {
            const value = star.getAttribute("data-value");

            // Toggle selected class for current star and deselect others
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });

            // Display corresponding rating text and hide others
            ratingTexts.forEach((text, i) => {
                if (i == index) {
                    text.style.display = "inline-block";
                } else {
                    text.style.display = "none";
                }
            });

            ratingInput.value = value; // Update the hidden input value
        });

        star.addEventListener("mouseover", function() {
            const value = star.getAttribute("data-value");
            // Highlight stars on hover
            stars.forEach((s, i) => {
                if (i < value) {
                    s.classList.add("hovered");
                } else {
                    s.classList.remove("hovered");
                }
            });
        });

        star.addEventListener("mouseout", function() {
            // Remove hover effect on mouseout
            stars.forEach(s => s.classList.remove("hovered"));
        });
    });
});
