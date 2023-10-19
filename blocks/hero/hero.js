
// Get the modal
var modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML =  '<div class="modal-content">'+
    '<span class="close">&times;</span>'+
    '<form class="card-request-form">'+
        '<h2 class="card-request-h2">How do we get in touch?</h2>'+
        '<label for="name" class="field-label">Full Name</label>'+
        '<input type="text" autocomplete="off" class="field-text" name="name"/>'+
        '<label for="email" class="field-label">Email Address</label>'+
        '<input type="text" autocomplete="off" class="field-text" name="email"/>'+
        '<label for="city" class="field-label">Select City</label>'+
        '<input type="text" autocomplete="off" class="field-text" name="city"/>'+
        '<label for="pan" class="field-label">PAN Card Number</label>'+
        '<input type="text" autocomplete="off" class="field-text" name="pan"/>'+
        '<a class="submit-button">SUBMIT</a>'
    '</form>'+
  '</div>';
document.body.appendChild(modal);

// Get the button that opens the modal
var btn = document.getElementById("apply-now");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}