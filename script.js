
// Hero Section Typed.js Effect
if (document.getElementById("hero-typed-output")) {
    let typed = new Typed("#hero-typed-output", {
        strings: [
            "Building APIs...",
            "Analyzing Data...",
            "Automating Tasks...",
            "Solving Problems...",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    });
}

// Download Resume Functionality
const resumeButton = document.getElementById("download-resume-button");
if (resumeButton) {
    resumeButton.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "resume.pdf"; 
        link.download = "Hussain_Jawaid_Resume.pdf"; // Suggest a filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Project Overlays Logic
const projectButtons = document.querySelectorAll(".project-item-button");

projectButtons.forEach((button) => {
    const projectId = button.getAttribute("id"); // e.g., "Project1"
    if (projectId) {
        const overlay = document.querySelector(`#fullscreenOverlay_${projectId}`); // Find corresponding overlay
        if (overlay) {
            const closeBtn = overlay.querySelector(".project-detail-close-button");

            button.addEventListener("click", () => {
                overlay.style.display = "flex";
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            });

            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    overlay.style.display = "none";
                    document.body.style.overflow = "auto"; // Restore scrolling
                });
            }

            // Optional: Close overlay if clicked outside the card
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    overlay.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            });
        }
    }
});

// Image Slider Logic (for Project Overlays)
document.querySelectorAll(".image-slider").forEach((slider) => {
    const track = slider.querySelector(".image-slider-track");
    const images = track.querySelectorAll(".image-slider-image");
    const prevButton = slider.querySelector(".image-slider-prev");
    const nextButton = slider.querySelector(".image-slider-next");
    let currentIndex = 0;

    if (images.length > 0) {
        const showSlide = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showSlide(currentIndex);
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images.length;
                showSlide(currentIndex);
            });
        }

        // Initialize slider position
        showSlide(currentIndex);
    } else {
        // Hide controls if no images
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
    }
});

// Certificate Fullscreen Overlay Logic
const certificateImages = document.querySelectorAll(".certificate-item-image img");
const certificateOverlay = document.getElementById("certificate-overlay");

if (certificateOverlay) {
    const overlayImg = certificateOverlay.querySelector("img");
    const closeBtn = document.getElementById("certificate-overlay-close");

    certificateImages.forEach((img) => {
        img.parentElement.style.cursor = "zoom-in"; // Add cursor to parent div
        img.parentElement.addEventListener("click", () => {
            if (overlayImg) {
                overlayImg.src = img.src;
                overlayImg.alt = img.alt || "Enlarged Certificate";
                certificateOverlay.style.display = "flex";
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            certificateOverlay.style.display = "none";
            if (overlayImg) overlayImg.src = ""; // Clear src
            document.body.style.overflow = "auto"; // Restore scrolling
        });
    }

    // Close when clicking the overlay background
    certificateOverlay.addEventListener("click", (e) => {
        if (e.target === certificateOverlay) {
            certificateOverlay.style.display = "none";
            if (overlayImg) overlayImg.src = "";
            document.body.style.overflow = "auto";
        }
    });
}

// Contact Method Card Click Handlers
const mailCard = document.getElementById("mailCard");
const linkedinCard = document.getElementById("linkedinCard");
const callCard = document.getElementById("callCard");
const githubCard = document.getElementById("githubCard");

if (mailCard) {
    mailCard.onclick = () => {
        window.location.href = "mailto:hussainjawaid.work@gmail.com";
    };
}

if (linkedinCard) {
    linkedinCard.onclick = () => {
        window.open("https://www.linkedin.com/in/hussainjawaid/", "_blank"); // Open in new tab
    };
}

if (callCard) {
    callCard.onclick = () => {
        window.location.href = "tel:+923173919039"; // Use tel: prefix
    };
}

if (githubCard) {
    githubCard.onclick = () => {
        window.open("https://github.com/hussain-jawaid", "_blank"); // Open in new tab
    };
}

