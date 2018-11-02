<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="response_styles.css">
  </head>
  <body>
<?php
  include 'database_handle.php';

  $title = $_POST["title"];
  $e_date = $_POST['e_date'];
  $speaker = $_POST["speaker"];
  $building = $_POST["building"];
  $room = $_POST["room"];

  $submit = $_POST["submit"];
  $checkbox = $_POST["checkbox"];

  if (isset($submit) && isset($checkbox)){
    foreach ($checkbox as $checked){
      for($i = 0; $i < $checked; $i++){
        $edit = "UPDATE events SET title='" . $title[$i] . "', event_date='" . $e_date[$i] . "',
        speaker='" . $speaker[$i] . "', building='" . $building[$i] . "', room='" . $room[$i] ."'
        WHERE event_id='" . $checked . "'";
        mysqli_query($conn, $edit);
      }
    }
    echo "Success!<br><br>";
    echo "<a href='display_table.php'>Return to home page</a></div>";
  }
?>
  </body>
</html>
