document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    // toggle
    menuToggle.addEventListener("click", function () {
        navLinksContainer.classList.toggle("active");
    });

    // switch
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            setActiveSection(sectionId);
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove("active");
            }
        });
    });

    function setActiveSection(sectionId) {
        sections.forEach(section => section.classList.remove("active"));
        navLinks.forEach(link => link.classList.remove("active"));

        document.getElementById(sectionId).classList.add("active");
        document.querySelector(`[href="#${sectionId}"]`).classList.add("active");
    }

    // more info
    document.querySelectorAll(".more-info").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });

    setActiveSection("home");
});
