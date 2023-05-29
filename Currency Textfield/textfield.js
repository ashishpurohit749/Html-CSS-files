function formatCurrency(input) {
    // Remove existing formatting
    var value = input.value.replace(/,/g, '');
  
    // Add thousands separators
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Update the input value
    input.value = value;
  }
  
  function addDecimals(input) {
    // Add decimal point if missing
    if (!input.value.includes('.')) {
      input.value += '.00';
    }
  }
  
  function restrictInput(event) {
    var allowedCharacters;
  
    // Get the current value of the input field
    var value = event.target.value;
  
    // Determine the allowed characters based on the current value
    if (value.includes('.')) {
      allowedCharacters = /[0-9]/;
    } else {
      allowedCharacters = /[0-9.]/;
    }
  
    // Check if the typed character is allowed
    var charCode = event.which ? event.which : event.keyCode;
    var typedChar = String.fromCharCode(charCode);
  
    if (!allowedCharacters.test(typedChar)) {
      event.preventDefault();
    }
  }
  