document.getElementById('borrowForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const year = document.getElementById('year').value;
    const date = document.getElementById('date').value; // Get the date
    const photo = document.getElementById('photo').files[0];
    const signature = document.getElementById('signature').files[0];

    // Store the data in local storage
    const borrowDetails = {
        name: name,
        phone: phone,
        year: year,
        date: date,
        photo: photo.name, // Store the file name
        signature: signature.name // Store the file name
    };

    localStorage.setItem('borrowDetails', JSON.stringify(borrowDetails));

    // Log the data to the console
    console.log("Borrow Details:", borrowDetails);
});