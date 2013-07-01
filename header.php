<?php include 'setup.php' ?>
<!DOCTYPE HTML>
<html>
<meta charset="utf-8">
<head>
<title><?php echo $title ?></title>
<meta name="viewport" content="width=device-width">
<meta description='<?php echo $description ?>'>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/scroller.css" rel="stylesheet" type="text/css">
<link href="css/prism.css" rel="stylesheet" />
</head>
<body>
<nav>
  <ul>
    <a href="http://twitter.com/vonKristoff"><li title='twitter' class='twitter'></li></a>
    <a href="http://github.com/vonKristoff/<?php echo $repro ?>"><li title='download' class='github'></li></a>
    <li title='comments' class='discuss'></li>
    <li title='usage' class='usage'><div class="arrow"></div></li>
  </ul>
</nav>

<div id="content">