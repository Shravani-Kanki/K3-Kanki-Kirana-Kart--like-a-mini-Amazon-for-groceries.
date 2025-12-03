/* ---------------------- NAVBAR + UI TOGGLE ---------------------- */

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');

    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


/* ---------------------- SWIPER SLIDER ---------------------- */

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1020: { slidesPerView: 3 },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1020: { slidesPerView: 3 },
    },
});


/* ---------------------- LOGIN API ---------------------- */
document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const message = document.getElementById("message");

    const user = {
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value
    };

    try {

        console.log("Sending user:", user);

        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        console.log("Response status:", response.status);

        const text = await response.text();

        if (response.ok) {
            message.innerText = text;
            message.style.color = "green";
        } else {
            message.innerText = text;
            message.style.color = "red";
        }

    } catch (error) {
        console.error("Error:", error);
        message.innerText = "⚠️ Cannot connect to server.";
        message.style.color = "orange";
    }
});


