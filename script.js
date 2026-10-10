const hero = document.getElementById("hero");

const collapsePoint = 260;

function updateHeroState() {
    if (window.scrollY >= collapsePoint) {
        hero.classList.add("is-compact");
    } else {
        hero.classList.remove("is-compact");
    }
}

updateHeroState();

window.addEventListener(
    "scroll",
    updateHeroState,
    { passive: true }
);
