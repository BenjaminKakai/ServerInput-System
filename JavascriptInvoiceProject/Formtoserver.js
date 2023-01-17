function submitForm() {
    // Get form data
    var order_number = document.getElementById("order_number").value;
    var num_pages = document.getElementById("num_pages").value;
    var cpp = document.getElementById("cpp").value;
    var writer = document.getElementById("writer").value;

    // Create an object to store form data
    var data = { order_number: order_number, num_pages: num_pages, cpp: cpp, writer: writer };

    // Send data to server
    fetch("/submit-invoice", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.status === "success") {
            alert("Invoice submitted successfully!");
        } else {
            alert("An error occurred while submitting invoice.");
        }
    })
    .catch(error => console.error("Error:", error));
}
