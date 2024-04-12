
// Get the current date
   var currentDate = new Date();

    // Format the date as dd-mm-yyyy
    var formattedDate = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();

    // Set the formatted date into the footer element
    document.getElementById('lastUpdated').textContent = "Laatst geupdate: " + formattedDate;
