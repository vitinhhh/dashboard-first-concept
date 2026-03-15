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