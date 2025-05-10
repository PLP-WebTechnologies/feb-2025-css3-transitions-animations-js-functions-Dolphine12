// Store name in localStorage
function saveName() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    localStorage.setItem("userName", name);
    showGreeting();
  }
}

// Display greeting from localStorage
function showGreeting() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("greetingMessage").textContent = `Hello, ${savedName}! 👋`;
  }
}

// Trigger CSS animation with JavaScript
function triggerAnimation() {
  const box = document.getElementById("box");
  box.classList.remove("bounce"); // Reset animation
  void box.offsetWidth;            // Reflow trick
  box.classList.add("bounce");
}

// Show greeting if already saved
window.onload = showGreeting;
