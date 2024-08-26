<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Vytvoření spojení
$conn = new mysqli($servername, $username, $password);

// Kontrola spojení
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vytvoření databáze
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Databáze úspěšně vytvořena";
} else {
    echo "Chyba při vytváření databáze: " . $conn->error;
}

$conn->close();
?>