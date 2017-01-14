<?php
$filepath = "./docs/Kevin_Craig_Resume.pdf";
$filename = "Kevin_Craig_Resume.pdf";
header('Content-Type: application/pdf');
header('Content-Length: ' . filesize($filepath));
header('Content-Disposition: attachment; filename=' . $filename);
readfile($filepath);
?>