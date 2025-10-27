// Filter videos by category
const filterButtons = document.querySelectorAll(".filter-btn");
const videoCards = document.querySelectorAll(".video-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;

    videoCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Hover play/pause
videoCards.forEach((card) => {
  const video = card.querySelector("video");
  card.addEventListener("mouseenter", () => video.play());
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});