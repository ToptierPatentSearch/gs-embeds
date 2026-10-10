const hero = document.getElementById("hero");

function updateHeroPosition() {
    const height = hero.getBoundingClientRect().height;

    // Move upward by at most 50% of the hero height.
    const maximumMovement = height * 0.50;

    document.documentElement.style.setProperty(
        "--hero-top",
        `-${maximumMovement}px`
    );
}

updateHeroPosition();

window.addEventListener("resize", updateHeroPosition);
