// Get references to the buttons
const homeBtn = document.getElementById('homeBtn');
const helpBtn = document.getElementById('helpBtn');
const orgBtn = document.getElementById('orgBtn');
const genBtn = document.getElementById('genBtn');
const profileBtn = document.getElementById('profileBtn');
const cardSlider = document.querySelector(".card-slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const thumbnailSlider = document.querySelector(".thumbnail-slider");
const videoPlayer = document.querySelector("video");
const thumbnailSlider = document.querySelector(".thumbnail-slider");
const videoPlayer = document.querySelector(".video-player video");

let isPlaying = false;

thumbnailSlider.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("thumbnail") && !isPlaying) {
        const videoSource = event.target.getAttribute("data-video");
        videoPlayer.src = videoSource;
        videoPlayer.play();
        videoPlayer.parentElement.style.display = "block";
        isPlaying = true;
    }
});

videoPlayer.addEventListener("ended", () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.parentElement.style.display = "none";
    isPlaying = false;
});

thumbnailSlider.addEventListener("mouseout", () => {
    if (isPlaying) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayer.parentElement.style.display = "none";
        isPlaying = false;
    }
});


thumbnailSlider.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("thumbnail")) {
        const videoSource = event.target.getAttribute("data-video");
        videoPlayer.src = videoSource;
        videoPlayer.play();
        videoPlayer.parentElement.style.display = "flex";
    }
});

thumbnailSlider.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("thumbnail")) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayer.parentElement.style.display = "none";
    }
});

let cardIndex = 0;
const cardWidth = 320; // Adjust this value based on your card width

prevButton.addEventListener("click", () => {
    cardIndex = Math.max(cardIndex - 1, 0);
    updateSliderPosition();
});

nextButton.addEventListener("click", () => {
    cardIndex = Math.min(cardIndex + 1, cardSlider.children.length - 1);
    updateSliderPosition();
});

function updateSliderPosition() {
    const translateX = -cardIndex * cardWidth;
    cardSlider.style.transform = `translateX(${translateX}px)`;

}

let cardIndex = 0;
const hearts = document.querySelectorAll('.heart');
const likeCounts = document.querySelectorAll('.like-count');

hearts.forEach((heart, index) => {
    let count = 0;

    heart.addEventListener('click', () => {
        count++;
        likeCounts[index].textContent = count;
        heart.classList.add('liked');

        // Remove the 'liked' class after a delay to reset the heart color
        setTimeout(() => {
            heart.classList.remove('liked');
        }, 1000);
    });
});


nextBtn.addEventListener('click', () => {
    cardIndex++;
    updateCardSlider();
});

prevBtn.addEventListener('click', () => {
    cardIndex--;
    updateCardSlider();
});
function updateCardSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const offset = -cardIndex * cardWidth;
    cards.style.transform = `translateX(${offset}px)`;
}

// Initial call to set the initial position
updateCardSlider();
// Add hover effect
const buttons = [homeBtn, helpBtn, orgBtn, genBtn, profileBtn];
buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgba(0, 123, 255, 1)';
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'rgba(0, 123, 255, 0.7)';
        button.style.transform = 'scale(1)';
    });
});

// Add click functionality (you can replace this with your desired actions)
homeBtn.addEventListener('click', () => {
    alert('Clicked Home');
});

helpBtn.addEventListener('click', () => {
    alert('Clicked Help with no money');
});

orgBtn.addEventListener('click', () => {
    alert('Clicked Organizations');
});

genBtn.addEventListener('click', () => {
    alert('Clicked Most Generous');
});

profileBtn.addEventListener('click', () => {
    alert('Clicked My Profile');
});
