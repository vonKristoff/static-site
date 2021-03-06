<?php include 'setup.php' ?>
<!DOCTYPE HTML>
<html>
<meta charset="utf-8">
<head>
<title><?php echo $title ?></title>
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta description='<?php echo $description ?>'>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/scroller.css" rel="stylesheet" type="text/css">
<link href="css/prism.css" rel="stylesheet" />
</head>
<body>
<nav>
  <ul>
    <a href="http://twitter.com/vonKristoff"><li title='twitter' class='flat twitter'></li></a>
    <a href="http://github.com/vonKristoff/<?php echo $repro ?>"><li title='download' class='flat github'></li></a>
    <li title='comments' class='flat discuss'></li>
    <li title='usage' class='flat usage'><div class="arrow"></div></li>
  </ul>
</nav>

<div id="content">