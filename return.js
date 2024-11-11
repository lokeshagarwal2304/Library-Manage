document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const returnDate = new Date(document.getElementById('returnDate').value);
    
    // Retrieve the borrow details from local storage
    const borrowDetails = JSON.parse(localStorage.getItem('borrowDetails'));

    if (borrowDetails) {
        // Check if the details match
        if (borrowDetails.name === name && borrowDetails.phone === phone) {
            // Calculate the number of days borrowed
            const borrowDate = new Date(borrowDetails.date);
            const timeDiff = returnDate - borrowDate; // Difference in milliseconds
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days

            // Calculate charges
            const chargePerDay = 10; // Charge per day
            const totalCharge = daysDiff > 0 ? daysDiff * chargePerDay : 0; // Only charge if daysDiff is positive

            // Display the result
            alert(`Book returned successfully!\nTotal Charge: ₹${totalCharge}`);
        } else {
            alert("Details do not match. Please check your information.");
        }
    } else {
        alert("No borrowing record found.");
    }
});