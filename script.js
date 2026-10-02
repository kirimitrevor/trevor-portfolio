function showMore() {

    let text = document.getElementById("moreText");
    let button = document.getElementById("moreButton");

    if (text.style.display === "none") {
        text.style.display = "block";
        button.textContent = "Show Less";
    } else {
        text.style.display = "none";
        button.textContent = "Show More";
    }
}


/* Contact Form Validation */

let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("formMessage");

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been submitted.";

        contactForm.reset();
    });

}