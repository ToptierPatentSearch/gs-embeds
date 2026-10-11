const params = new URLSearchParams(window.location.search);

const page =
    (params.get("page") || "home").toLowerCase();

const config =
    pageConfig[page] || pageConfig.home;

const hero =
    document.getElementById("hero");

const heroTitle =
    document.getElementById("heroTitle");

const heroSubtitle =
    document.getElementById("heroSubtitle");

const compactHeader =
    document.getElementById("compactHeader");

heroTitle.textContent =
    config.title;

heroSubtitle.textContent =
    config.subtitle;

compactHeader.textContent =
    config.title;

hero.style.backgroundImage = `
    linear-gradient(
        rgba(255,255,255,0.82),
        rgba(255,255,255,0.82)
    ),
    url("${config.image}")
`;

const showPoint = 300;
const hidePoint = 180;

let visible = false;

function updateHeader() {

    if (!visible && window.scrollY >= showPoint) {
        visible = true;
        compactHeader.classList.add("is-visible");
    }

    if (visible && window.scrollY <= hidePoint) {
        visible = false;
        compactHeader.classList.remove("is-visible");
    }
}

updateHeader();

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);
