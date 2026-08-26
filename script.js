// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const navbar =
    document.querySelector(".navbar");

const navLinks =
    document.querySelector(".nav-links");


// Create mobile menu button

const menuButton =
    document.createElement("button");

menuButton.classList.add(
    "menu-toggle"
);

menuButton.textContent = "☰";


// Add button to navbar

navbar.appendChild(menuButton);


// Open / close mobile menu

menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "active"
        );

    }
);


// Close menu after clicking a link

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    }
);



// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);



// =====================================================
// CURRENT YEAR
// =====================================================

const footerText =
    document.querySelector(
        "footer p"
    );


if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Web Developer Portfolio. All Rights Reserved.`;

}