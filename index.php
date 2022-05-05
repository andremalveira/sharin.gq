<?php
  $url          = $_GET['u'] ?? $_GET['url']          ?? null;
  $title        = $_GET['t'] ?? $_GET['title']        ?? null;
  $description  = $_GET['d'] ?? $_GET['description']  ?? null;
  $image        = $_GET['i'] ?? $_GET['image']        ?? null;


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- meta to shared --> 
  <meta property="og:site_name"        content="astlibjs.ga"> 
  <!-- FACEBOOK -->
  <meta property="og:url" content="<?php echo $url;?>">
  <meta property="og:title" content="<?php echo $title;?>">
  <meta property="og:description" content="<?php echo $description;?>">
  <meta property="og:image" content="<?php echo $image;?>">


  <!-- TWITTER -->
  <meta name="twitter:url" content="<?php echo $url;?>">
  <meta name="twitter:title" content="<?php echo $title;?>">
  <meta name="twitter:description" content="<?php echo $description;?>">
  <meta name="twitter:image" content="<?php echo $image;?>">


  <title>Redirecting...</title>
  <?php if($url) {
    echo '<script>window.location.replace('.$url.')</script>';
  }?>

</head>
  <style>body {background: #222;color: #eee;}</style>
  <body></body>
</html>

