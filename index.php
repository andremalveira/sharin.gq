<?php
  function urlValidate($url){
    $url_valid = $url;
    $urlIsHttp = false;
    $noHasProtocol = false;

    if($url) {
      $scheme = parse_url($url)['scheme'] ?? null;
      $host = parse_url($url)['host'] ?? null;
  
      if($scheme){
        if($scheme == 'http'){$urlIsHttp = true;};
  
      } else {
        $host = parse_url('https://'.$url)['host'];
        $noHasProtocol = true;
      }
    }


     return  [
      "url" => $url_valid,
      "scheme" => $scheme,
      "host" => $host,
      "urlIsHttp" => $urlIsHttp,
      "noHasProtocol" => $noHasProtocol
    ];
  }

  $url          = $_GET['u'] ?? $_GET['url']          ?? null;
  $url          = urlValidate($url)['url'];

  $title        = $_GET['t'] ?? $_GET['title']        ?? null;
  $description  = $_GET['d'] ?? $_GET['description']  ?? null;
  $image        = $_GET['i'] ?? $_GET['image']        ?? null;
  $site_name    = $_GET['sn'] ?? $_GET['site_name']   ?? urlValidate($url)['host']   ?? null;
  $type         = $_GET['type']                       ?? null;



?>
<!-- Author: https://github.com/andremalveira -->
<!-- Created in May 2022 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <link rel="shortcut icon" href="src/img/favicon.png" type="image/x-icon">

  <meta name="description"              content="<?php echo $description   ?? 'Share your links without metadata with sharin, with it you add custom metadata to show in your link preview.';?>">
  <!-- meta to shared --> 

  <!-- FACEBOOK -->
  <meta property="og:url"               content="<?php echo $url           ?? 'https://sharin.gq';?>">
  <meta property="og:title"             content="<?php echo $title         ?? 'Custom preview link to share';?>">
  <meta property="og:description"       content="<?php echo $description   ?? 'Share your links without metadata with sharin, with it you add custom metadata to show in your link preview.';?>">
  <meta property="og:image"             content="<?php echo $image         ?? 'getting-starter/src/img/banner.jpg';?>">
  <meta property="og:type"              content="<?php echo $type          ?? 'website';?>">
  <meta property="og:site_name"         content="<?php echo $site_name     ?? 'sharin.gq';?>"> 

  <!-- TWITTER -->
  <meta name="twitter:title"            content="<?php echo $title         ?? 'Custom preview link to share' ;?>">
  <meta name="twitter:description"      content="<?php echo $description   ?? 'Share your links without metadata with sharin, with it you add custom metadata to show in your link preview.' ;?>">
  <meta name="twitter:image:src"        content="<?php echo $image         ?? 'getting-starter/src/img/banner.jpg' ;?>">
  <meta name="twitter:card"             content="summary_large_image">

  <title><?php echo $title ?? 'Sharin' ;?></title>
  
  <link rel="stylesheet" href="index.style.css">
  <link rel="stylesheet" href="getting-starter/src/css/loading.css">

</head>
  <body>
  <?php if(!urlValidate($url)['urlIsHttp'] && !urlValidate($url)['noHasProtocol']){ 
      echo'<script>window.location.replace(\''.($url ?? '/getting-starter').' \')</script>';
      echo 
      '<div id="loading">
          <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" style="stroke:#539bf5;" fill="none" stroke-width="3"></circle>
          </svg>
        </div>
      ';
    }
  ?>

    <?php if(urlValidate($url)['urlIsHttp'] or urlValidate($url)['noHasProtocol']){  
      echo '
        <div class="warning">
          <i class="icon">⚠️</i>
          <div class="message">
            The url you are being redirected to does not have an HTTPS protocol, meaning it could be an untrusted website!
          </div>
          <div class="cod">Not Safe:<span> '.$url.'</span></div>
          <button onclick="window.location.replace(\''.$url.'\')">
            Do you want to proceed anyway?
          </button>
        </div>
        ';
      };
    ?>

  </body>
</html>

