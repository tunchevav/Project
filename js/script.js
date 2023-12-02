function ScrollSmooth(link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        // Scroll back to top 
        if (href === "#") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        // Scroll to other links 
        if (href !== "#" && href.startsWith("#")) {
            e.preventDefault();
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
                margin: { top: 50 } // Adjust the margin value as needed
            });
        }
    });
}

var alllinks = document.querySelectorAll("a:link");

for (var i = 0; i < alllinks.length; i++) {
    ScrollSmooth(alllinks[i]);
}

var openEl = document.getElementsByName("menu-outline")[0];
var closeEl = document.getElementsByName("close-outline")[0];
closeEl.classList.toggle("hideButton");
const headerEl = document.querySelector(".header");
var btnEl = document.querySelector(".btn-mobile-nav");
btnEl.addEventListener("click", function () {
    var mainNav = document.getElementById("main-nav");
    closeEl.classList.toggle("hideButton");
    openEl.classList.toggle("hideButton");
    mainNav.classList.toggle("nav-open");
    // add event listeners to each link in the mobile navigation menu
    var navLinks = document.querySelectorAll("#main-nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("nav-open");
            closeEl.classList.add("hideButton");
            openEl.classList.remove("hideButton");
        });
    });
});