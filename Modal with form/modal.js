document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
  });
  
  document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
  });
  