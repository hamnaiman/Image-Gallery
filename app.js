document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    let currentIndex = 0;

    // Open modal on image click
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = image.src;
            currentIndex = index;
            images.forEach(img => img.classList.add("blur")); // Apply blur effect to all images
            images[index].classList.remove("blur"); // Remove blur effect from clicked image
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        images.forEach(img => img.classList.remove("blur")); // Remove blur effect when closing modal
    });

    // Navigate to the previous image
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImage.src = images[currentIndex].src;
    });

    // Navigate to the next image
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImage.src = images[currentIndex].src;
    });

    // Close modal when clicking outside of the image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            images.forEach(img => img.classList.remove("blur"));
        }
    });
});

