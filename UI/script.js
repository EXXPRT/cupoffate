document.addEventListener("DOMContentLoaded", function() {
    const cups = document.querySelectorAll(".cup");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.getElementById("fortune-cookie-video");
    const staticMessage = document.getElementById("static-message");
    const popupMessage = document.getElementById("popup-message");
    const fortuneTypeSelect = document.querySelectorAll("input[name='fortune-type']");

    const regularFortunes = [
        "You will have a great day!",
        "Good news is coming your way.",
        "Expect a pleasant surprise."
    ];

    const sarcasticFortunes = [
        "Oh, great. Another day.",
        "I bet you think you're special.",
        "Try again tomorrow."
    ];

    const numberFortunes = [
        "Your lucky number is 7.",
        "42 is your number today.",
        "3 is the charm."
    ];

    cups.forEach(cup => {
        cup.addEventListener("click", function() {
            this.classList.toggle("filled");

            // Determine fortune type
            let fortuneType = "regular";
            fortuneTypeSelect.forEach(option => {
                if (option.checked) {
                    fortuneType = option.value;
                }
            });

            let fortuneMessage = "";

            switch(fortuneType) {
                case "sarcastic":
                    fortuneMessage = sarcasticFortunes[Math.floor(Math.random() * sarcasticFortunes.length)];
                    break;
                case "number":
                    fortuneMessage = numberFortunes[Math.floor(Math.random() * numberFortunes.length)];
                    break;
                default:
                    fortuneMessage = regularFortunes[Math.floor(Math.random() * regularFortunes.length)];
                    break;
            }

            // Show popup
            popup.style.display = "flex";
            staticMessage.textContent = "Cup filled! Here's your fortune:";
            popupMessage.textContent = fortuneMessage;

            // Play video
            video.currentTime = 0;
            video.play();
        });
    });

    // Close popup
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        video.pause();
    });

    // Close popup when clicking outside the popup content
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
            video.pause();
        }
    });
});
