<?php
  include 'database_handle.php';

  $view_info = "SELECT event_id, title, topic_name, topic_description, event_date,
  speaker_name, building_name, room_name FROM vw_events";
  $view_result = mysqli_query($conn, $view_info);

  $speaker_info = "SELECT speaker_id, speaker_name FROM ref_speaker";
  $speaker_result = mysqli_query($conn, $speaker_info);

  $building_info = "SELECT building_id, building_name FROM ref_building";
  $building_result = mysqli_query($conn, $building_info);

  $room_info = "SELECT room_id, room_name FROM ref_room";
  $room_result = mysqli_query($conn, $room_info);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Table Data</title>
    <link rel="stylesheet" type="text/css" href="table_styles.css">
  </head>
  <body>
    <form action="response_page.php" method="POST">
      <table width="600" border="1" cellpadding="1" cellspacing="1">
        <tr>
          <th>Event title</th>
          <th>Topic</th>
          <th>Topic description</th>
          <th>Date</th>
          <th>Speaker</th>
          <th>Building</th>
          <th>Room</th>
          <th>Edit data</th>
        </tr>

        <?php
          while($event = mysqli_fetch_assoc($view_result)){
            echo "<tr>";

            echo "<td> <input type='" . "text" . "' name='" . "title[]" . "' maxlength='" . "50" . "'> </td>";
            echo "<td>" . $event["topic_name"] . "</td>";
            echo "<td>" . $event["topic_description"] . "</td>";
            echo "<td> <input type='" . "text" . "' name='" . "e_date[]" . "' placeholder='" . "YYYY-MM-DD" . "' pattern='" . "[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])" . "'> </td>";

            // speaker drop-down list
            echo "<td> <select name='" . "speaker[]" . "'>";
            echo "<option selected='" . "selected" . "'>" . " " . "</option>";
            while($speaker_row = mysqli_fetch_assoc($speaker_result)){
              echo "<option value='" . $speaker_row["speaker_id"] . "'>" . $speaker_row["speaker_name"] . "</option>";
            }
            mysqli_data_seek($speaker_result, 0);
            echo "</select> </td>";

            // building drop-down list
            echo "<td> <select name='" . "building[]" . "' class='" . "building" . "'>";
            echo "<option selected='" . "selected" . "'>" . " " . "</option>";
            while($building_row = mysqli_fetch_assoc($building_result)){
              echo "<option value='" . $building_row["building_id"] . "'>" . $building_row["building_name"] . "</option>";
            }
            mysqli_data_seek($building_result, 0);
            echo "</select> </td>";

            // room drop-down list
            echo "<td> <select value='" . $event["event_id"] . "' name='" . "room[]" . "' class='" . "room" . "'>";
            echo "<option selected='" . "selected" . "'>" . " " . "</option>";
            while($room_row = mysqli_fetch_assoc($room_result)){
              echo "<option value='" . $room_row["room_id"] . "'>" . $room_row["room_name"] . "</option>";
            }
            mysqli_data_seek($room_result, 0);
            echo "</select> </td>";

            echo "<td> <input type='" . "checkbox" . "' value='" . $event["event_id"] . "' name='" . "checkbox[]" . "'> </td>";

            echo "</tr>";
          }
          echo "<input type='" . "submit" . "' name='" . "submit" . "' value='" . "Update" . "' class='" . "update" . "'>";
        ?>
      </table>
    </form>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="room_availability.js"></script>
  </body>
</html>
