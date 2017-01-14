<?php
$filepath = "https://github.com/kevinmmcraig/kevinmmcraig.github.io/docs/Kevin_Craig_Resume.pdf";
$filename = "Kevin_Craig_Resume.pdf";
header('Content-Type: application/pdf');
header('Content-Length: ' . filesize($filepath));
header('Content-Disposition: attachment; filename=' . $filename);
readfile($filepath);