<?php
header("Content-type: application/pdf");
header("Content-disposition: attachment; filename=Kevin_Craig_Resume.pdf");
readfile("./docs/Kevin_Craig_Resume.pdf");
?>