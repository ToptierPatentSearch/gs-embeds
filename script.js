const compactHeader = document.getElementById("compactHeader");

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
