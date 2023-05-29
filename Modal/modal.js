// Open the modal with a fade-in effect
document.getElementById("openModal").addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementsByClassName("modal-content")[0];
  modal.style.display = "block";
  setTimeout(function() {
    modalContent.style.opacity = 1;
  }, 10); // Delay the fade-in effect for smoother transition
});

// Close the modal when the close button is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementsByClassName("modal-content")[0];
  modalContent.style.opacity = 0;
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Delay the modal closing for the same duration as the transition
});
