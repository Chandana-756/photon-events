/*function toggleDarkMode() {
  const body = document.body;
  const themeText = document.getElementById("themeText");
  body.classList.toggle("dark-mode");
  themeText.innerText = body.classList.contains("dark-mode")
    ? "Toggle Theme: Dark"
    : "Toggle Theme: Light";
}
/*function openGoogleForm() {
  // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
  var googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfzvoGzX9igzfFBB-Pa0CRfxO-9KXvzeFkGgIGiyHZcPyqEQA/viewform"; // Your Google Form URL
  window.location.href = googleFormUrl;
}*/

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    // Replace the URL with your Google Form link
    var googleFormLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSfvxB20o554di1azVbMchE-gGAzD5HS543G5uRIvN-iIOn1-g/viewform";

    // Open the link in a new tab
    window.open(googleFormLink, "_blank");
  });

document
  .getElementById("registerButton1")
  .addEventListener("click", function () {
    // Replace the URL with your Google Form link
    var googleFormLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSfzvoGzX9igzfFBB-Pa0CRfxO-9KXvzeFkGgIGiyHZcPyqEQA/viewform";

    // Open the link in a new tab
    window.open(googleFormLink, "_blank");
  });

// Add a 'tapped' class on touch
document.addEventListener("touchstart", function addTouchClass() {
  const cards = document.querySelectorAll(".event-card img");
  cards.forEach(function (card) {
    card.classList.add("tapped");
  });

  // Remove the 'tapped' class after a short delay
  setTimeout(function removeTouchClass() {
    cards.forEach(function (card) {
      card.classList.remove("tapped");
    });
  }, 300); // Adjust the delay as needed
});
