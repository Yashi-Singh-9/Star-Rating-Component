const stars = document.querySelectorAll(".star");
const feedbackMessage = document.querySelector(".feedback-message");

const messages = [
  "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"
];

let currentRating = 0; // Track the current rating

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-rating"));
    // If clicking the same star again, toggle off
    if (currentRating === rating) {
      updateRating(0);
    } else {
      updateRating(rating);
    }
  });

  star.addEventListener("mouseover", () => {
    const rating = star.getAttribute("data-rating");
    highlightStars(rating);
  });

  star.addEventListener("mouseout", () => {
    clearHighlight();
  });
});

function updateRating(rating) {
  currentRating = rating; // Update current rating
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
  feedbackMessage.textContent = rating > 0 ? messages[rating - 1] : ""; // Clear message if rating is 0
}

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("hovered");
    } else {
      star.classList.remove("hovered");
    }
  });
}

function clearHighlight() {
  stars.forEach((star, index) => {
    // Only keep stars highlighted up to the current rating
    if (index < currentRating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected", "hovered"); // Remove both selected and hovered classes
    }
  });
}