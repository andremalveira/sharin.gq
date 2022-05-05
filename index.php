<?php
  $url          = $_GET['u'] ?? $_GET['url']          ?? null;
  $title        = $_GET['t'] ?? $_GET['title']        ?? null;
  $description  = $_GET['d'] ?? $_GET['description']  ?? null;
  $image        = $_GET['i'] ?? $_GET['image']        ?? null;
  $site_name    = $_GET['sn'] ?? $_GET['site_name']   ?? null;

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- meta to shared --> 
  <meta property="og:site_name"         content="<?php echo $site_name     ?? 'sharin.gq';?>"> 
  <!-- FACEBOOK -->
  <meta property="og:url"               content="<?php echo $url           ?? 'https://sharin.gq';?>">
  <meta property="og:title"             content="<?php echo $title         ?? 'Sharing';?>">
  <meta property="og:description"       content="<?php echo $description   ?? 'Custom preview link to share';?>">
  <meta property="og:image"             content="<?php echo $image         ?? '';?>">


  <!-- TWITTER -->
  <meta name="twitter:url"              content="<?php echo $url           ?? 'https://sharin.gq' ;?>">
  <meta name="twitter:title"            content="<?php echo $title         ?? 'Sharing' ;?>">
  <meta name="twitter:description"      content="<?php echo $description   ?? 'Custom preview link to share' ;?>">
  <meta name="twitter:image"            content="<?php echo $image         ?? '' ;?>">


  <title><?php echo $title;?></title>
  <script>window.location.replace('<?php echo $url ?? '/getting-starter';?>')</script>

  <link rel="stylesheet" href="getting-starter/src/css/loading.css">

</head>
  <style>body {background: #151515;}</style>
  <body>
    <div id="loading">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" style="stroke:#539bf5;" fill="none" stroke-width="3"></circle>
      </svg>
    </div>
  </body>
</html>

