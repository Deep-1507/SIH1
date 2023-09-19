<?php
// Define your database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "backend";

// Retrieve the submitted username and password from the form
$submittedemail = $_POST['email'];
$submittedPassword = $_POST['password'];

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database to check if the provided credentials are valid
$sql = "SELECT * FROM registrationdata WHERE email='$submittedemail' AND password1='$submittedPassword'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Authentication successful
    echo "Login successful. Welcome, $submittedUsername!";
} else {
    // Authentication failed
    echo "Login failed. Please check your username and password.";
}

// Close the database connection
$conn->close();
?>
