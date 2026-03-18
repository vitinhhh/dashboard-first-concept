const sidebar = document.getElementById("sidebar");
const trigger = document.getElementById("sidebar-trigger");

trigger.addEventListener("click", (event) => {
    event.stopPropagation(); 
    sidebar.classList.toggle("collapsed");
});

sidebar.addEventListener("click", (event) => {

    if   (event.target.closest("a")) {
        return;
    }

    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
    }
});

const modal = document.getElementById("settingsModal");
const btnOpen = document.getElementById("openSettingsBtn");
const btnClose = document.getElementById("closeSettingsBtn");

btnOpen.addEventListener("click", (e) => {
     e.preventDefault();
     modal.classList.toggle("is-open");
});

const closeModal = () => modal.classList.remove("closeSettingsBtn");

btnClose.onclick = closeModal;

window.onclick = (event) => {
    if (event.target == modal) closeModal();
};
