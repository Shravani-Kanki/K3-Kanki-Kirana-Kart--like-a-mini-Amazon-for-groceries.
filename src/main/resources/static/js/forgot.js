document.getElementById("forgotForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const msg = document.getElementById("message");

    // Object sent to backend
    const user = { phone };

    try {
        const response = await fetch("http://localhost:8080/api/forgot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const data = await response.text();

        if (response.ok) {
            // Show modal + password
            document.getElementById("pwModal").style.display = "flex";
            document.getElementById("generatedPw").innerText = data;
        } else {
            msg.style.display = "block";
            msg.style.color = "red";
            msg.innerText = data;
        }
    } catch (err) {
        msg.style.display = "block";
        msg.style.color = "orange";
        msg.innerText = "Server not responding";
    }
});

// Close Modal
document.getElementById("closeModal").onclick = function () {
    document.getElementById("pwModal").style.display = "none";
};
