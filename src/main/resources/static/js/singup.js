document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message");

    const user = { username, phone };

    try {
        const response = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const text = await response.text();

        if (response.ok) {
            // Show modal on successful signup
            document.getElementById("signupModal").style.display = "flex";
            document.getElementById("signupMsg").innerText = text;

            message.style.display = "none";
        } else {
            // Show error message
            message.style.display = "block";
            message.style.color = "red";
            message.innerText = text;
        }

    } catch (error) {
        console.error("Error:", error);
        message.style.display = "block";
        message.style.color = "orange";
        message.innerText = "⚠️ Server not responding!";
    }
});

// Close modal
document.getElementById("Close").onclick = function () {
    document.getElementById("signupModal").style.display = "none";
};
