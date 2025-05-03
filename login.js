//if already logged in
if (localStorage.getItem("access_granted") === "true") {
    window.location.href = "index.html"
}

function handlePasswordSubmit() {
  
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value.trim();
  
    const correctPassword = "12:34";
  
    if (password === correctPassword) {
      localStorage.setItem("access_granted", "true");
  
      window.location.href = "index.html"
    } else {
      window.location.href = "https://www.youtube.com/watch?v=gi_o8EVCFR8&ab_channel=NarutoXOtterGTR"
      passwordInput.value = "";
    }
}