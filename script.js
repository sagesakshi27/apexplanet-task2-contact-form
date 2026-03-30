function validateForm(e) {
    e.preventDefault();

    const btn = document.querySelector("#form button");
    btn.classList.remove("success-btn");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();
    const error = document.getElementById("error");

    error.classList.remove("success");

    if (name === "") {
        error.innerText = "Name is required";
        return;
    }

    if (email === "") {
        error.innerText = "Email is required";
        return;
    }

    if (!email.includes("@")) {
        error.innerText = "Enter valid email";
        return;
    }

    if (msg === "") {
        error.innerText = "Message is required";
        return;
    }

    error.classList.add("success");
    btn.classList.add("success-btn");
    error.innerText = "Form submitted successfully!";
}

document.getElementById("form").addEventListener("submit", validateForm);
