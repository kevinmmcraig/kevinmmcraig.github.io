<?php
header("Content-Type: application/pdf");
header("Content-Disposition: attachment; filename=Kevin_Craig_Resume.pdf");
readfile("./docs/Kevin_Craig_Resume.pdf");
?>