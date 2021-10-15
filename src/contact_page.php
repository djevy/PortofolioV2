<?php


$toEmail = "contact@darrenrevans.co.uk";
$subject = "Portfolio Site Email";

$message = isset($_POST["message"]) ? $_POST["message"] : null;

$firstname = isset($_POST["firstname"]) ? $_POST["firstname"] : null;
$lastname = isset($_POST["lastname"]) ? $_POST["lastname"] : null;
$email = isset($_POST["email"]) ? $_POST["email"] : null;

$mailHeaders = "From: " . $firstname . " " . $lastname . "<". $email .">\r\n";


if(mail($toEmail, $subject, $message, $mailHeaders)) {
    print "<success> Mail Sent.";
} else {
    print "<Error> Problem in Sending Mail.";
}

?>
