let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;

        function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('show');
        }
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully!');
        });

    }
