document.addEventListener('DOMContentLoaded', function () {
    // Get the textbox element
    const phoneNumberInput = document.getElementById('phoneNumberInput');
  
    // Clear the value of the textbox
    phoneNumberInput.value = '';
  
    // Add an event listener for the 'beforeunload' event
    window.addEventListener('beforeunload', function () {
      // Clear the value from localStorage when the page is refreshed or closed
      localStorage.removeItem('phoneNumber');
    });
  });
  