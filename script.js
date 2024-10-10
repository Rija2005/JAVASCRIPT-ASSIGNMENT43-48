
//QUESTION  NO1

const link = document.getElementById('myLink');
        
        // Add an event listener for the 'click' event
        link.addEventListener('click', function(event) {
            // Prevent the default action of the link (optional)
            event.preventDefault();
            
            // Display an alert box
            alert('You clicked the link!');
        });

//Question no2
const images = document.querySelectorAll('.mobile-images img');

// Add an event listener to each image
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the name of the mobile from the data attribute
        const mobileName = image.getAttribute('data-name');
        
        // Display an alert with the mobile name
        alert('Thanks for purchasing ' + mobileName);
    });
});


//QUESTION NO3
function deleteRow(button) {
    // Get the parent row of the clicked button
    const row = button.parentElement.parentElement;
    // Remove the row from the table
    row.remove();
    updateIndices();  // Update index after deletion
  }

  function updateIndices() {
    // Get all table rows
    const rows = document.querySelectorAll("#studentTable tbody tr");
    // Loop through each row and update the index
    rows.forEach((row, index) => {
      row.cells[0].textContent = index;
    });
  }
  //QUESTION NO4
  function changeImage() {
    document.getElementById("image").src = "./images/sunset.jpg";
  }

  // Function to reset the image on mouseout
  function resetImage() {
    document.getElementById("image").src = ".images/car.jfif";
  }
  //QUESTION NO5
  let counter = 0;

  // Function to increase the counter
  function increase() {
    counter++;  // Increment the counter
    document.getElementById("counterValue").textContent = counter;  // Update the displayed value
  }

  // Function to decrease the counter
  function decrease() {
    counter--;  // Decrement the counter
    document.getElementById("counterValue").textContent = counter;  // Update the displayed value
  }