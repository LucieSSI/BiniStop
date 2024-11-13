document.addEventListener("DOMContentLoaded", function () {
  const hoursElement = document.getElementById("hours");
  const hours = ["Closed", "8 AM - 8 PM", "8 AM - 8 PM", "8 AM - 8 PM", "8 AM - 8 PM", "8 AM - 10 PM", "9 AM - 10 PM"];
  const today = new Date().getDay();
  hoursElement.textContent = `Today's Hours: ${hours[today]}`;
});
