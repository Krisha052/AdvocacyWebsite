// Add JavaScript code for your web site here and call it from index.html.
// Toggle light/dark mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

// Select all scrollable sections
const sections = document.querySelectorAll(".scroll-section");

function handleScroll() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Handle Petition Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("signature");
    const emailInput = document.getElementById("email");
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // Validate input values
    const nameValid = /^[a-zA-Z\s]+$/.test(nameValue);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (nameValid && emailValid) {
        addSignature(nameValue);
        showModal(nameValue);
        nameInput.value = "";
        emailInput.value = "";
        nameInput.classList.remove("invalid");
        emailInput.classList.remove("invalid");
    } else {
        if (!nameValid) nameInput.classList.add("invalid");
        if (!emailValid) emailInput.classList.add("invalid");
    }
}

// Add signature to the list
function addSignature(name) {
    const signaturesList = document.getElementById("signatures");
    const listItem = document.createElement("li");
    listItem.textContent = name;
    signaturesList.appendChild(listItem);
}

// Show modal with personalized message
function showModal(name) {
    const modal = document.getElementById("modal");
    const userNameElement = document.getElementById("user-name");
    userNameElement.textContent = name;

    modal.classList.add("visible");

    // Auto-hide the modal
    setTimeout(() => {
        modal.classList.remove("visible");
    }, 5000);
}
