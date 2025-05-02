//if already logged in
if (localStorage.getItem("access_granted") === "true") {
    window.location.href = "index.html"
}

function handlePasswordSubmit() {
    console.log("Entered");
  
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value.trim();
  
    const correctPassword = "12:34";
  
    if (password === correctPassword) {
      localStorage.setItem("access_granted", "true");
  
      window.location.href = "index.html"
    } else {
      alert("Wrong password. Try again!");
      passwordInput.value = "";
    }
}