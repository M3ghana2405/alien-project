document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm");
    const translateButton = document.getElementById("translateButton");
    const dancePartyButton = document.getElementById("danceParty");
    const mysteryScene = document.getElementById("mysteryScene");
    const fakeCrash = document.getElementById("fakeCrash");
    const alienLaugh = document.getElementById("alienLaugh");
    const djVideoContainer = document.getElementById("djVideoContainer");
    const djVideo = document.getElementById("djVideo");
    const instaCitizenshipButton = document.getElementById("instaCitizenship");
    alienForm.addEventListener("submit", (Event) => {
        Event.preventDefault();
        const alienName = document.getElementById("alienName").value;
        const alienAge = parseInt(document.getElementById("alienAge").value, 10);
        const reason = document.getElementById("reason").value;
        const captcha = document.getElementById("captcha").value;
        const selectedPowers = document.querySelectorAll("input[name='Powers']:checked");
        if (alienName.length < 5) {
            alert("Alien name is too human! Try a longer name!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Even weak aliens need atleast 2 powers");
            return;
        }
        if (alienAge < 50) {
            alert("Sorry, only mature aliens (50+ Zog years) can play");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully! Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", () => {
        alert("Alien Translator Activated! Beep Boop!");
    });
    instaCitizenshipButton === null || instaCitizenshipButton === void 0 ? void 0 : instaCitizenshipButton.addEventListener("click", () => {
        alert("Ha Ha Nice try Earthien? You think instacitizenship is that easy??");
    });
    // dancePartyButton.addEventListener("click", () => {
    //     alert("alien DJ Mode On..! Its time to Alien party!!");
    //     document.getElementById("djVideoContainer").style.display="block";
    //     document. getElementById("djVideo").src += "autoplay=1";
    // });
    dancePartyButton.addEventListener("click", () => {
        alert("Alien DJ mode on...!It's time for an alien party!!");
        djVideoContainer.style.display = "block";
        const videoSrc = "https://www.youtube.com/embed/FzG4uDgje3M?autoplay=1&enablejsapi=1";
        djVideo.src = videoSrc;
    });
    document.querySelectorAll("input[name = 'relation']").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const selectedRelations = Array.from(document.querySelectorAll("input[name = 'relation']:checked"));
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", () => {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
