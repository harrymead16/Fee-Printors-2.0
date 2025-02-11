
// Load navbar and footer
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            const burger = document.querySelector('.burger');
            const navLinks = document.querySelector('.nav-links');
            if (burger && navLinks) {
                burger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
                    burger.setAttribute('aria-expanded', !expanded);
                });
            } else {
                console.error("Burger button or nav-links not found.");
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}


function searchArticles() {
    // Get the value from the search input
    let searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Get all article cards
    let articles = document.querySelectorAll(".article-card");

    // Loop through the article cards and hide/show based on search query
    articles.forEach(function(article) {
        let title = article.querySelector("h2").innerText.toLowerCase();
        let feePrintorsText = article.querySelector(".fee-printors").innerText.toLowerCase();

        if (title.includes(searchQuery) || feePrintorsText.includes(searchQuery)) {
            article.closest('a').style.display = "block"; // Show the article link (a tag)
        } else {
            article.closest('a').style.display = "none"; // Hide the article link (a tag)
        }
    });
}