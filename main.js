if (localStorage.getItem("access_granted") !== "true" && !window.location.href.includes("login.html")) {
    window.location.href = "login.html"
}

function LoginScreen() {
    localStorage.clear();
}