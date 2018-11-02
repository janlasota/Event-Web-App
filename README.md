# Event-Web-App

A web page that features a table of event information. The information that is
displayed is event title, topic, topic description, date, speaker, building, and
room. Some of the event data can be edited and the updated fields are saved to
the database.

# Implementation

## Built With

* JavaScript
* jQuery
* HTML5
* CSS3
* PHP
* MySQL

## Displaying the table

The data displayed in the table is grabbed from different tables. For example, in the code below,
the speaker table is iterated through, and all the speaker ids and names are presented in the drop-down list.

```
echo "<td> <select name='" . "speaker[]" . "'>";
echo "<option selected='" . "selected" . "'>" . " " . "</option>";
while($speaker_row = mysqli_fetch_assoc($speaker_result)){
  echo "<option value='" . $speaker_row["speaker_id"] . "'>" . $speaker_row["speaker_name"] . "</option>";
}
mysqli_data_seek($speaker_result, 0);
echo "</select> </td>";
```

## Checking room availability

If the first building is selected, then the possible rooms are displayed. In the code below, variable 'j' represents
the row number in the table.

```
if($(this).val() == "1"){
  $('.room:eq('+j+') option[value="1"]').show();
  $('.room:eq('+j+') option[value="2"]').show();
  $('.room:eq('+j+') option[value="3"]').show();
  $('.room:eq('+j+') option[value="4"]').show();
  $('.room:eq('+j+') option[value="5"]').show();
  $('.room:eq('+j+') option[value="6"]').hide();
  $('.room:eq('+j+') option[value="7"]').hide();
  $('.room:eq('+j+') option[value="8"]').hide();
  $('.room:eq('+j+') option[value="9"]').hide();
  $('.room:eq('+j+') option[value="10"]').hide();
  $('.room:eq('+j+') option[value="11"]').hide();
  $('.room:eq('+j+') option[value="12"]').hide();
  $('.room:eq('+j+') option[value="13"]').hide();
  $('.room:eq('+j+') option[value="14"]').hide();
  $('.room:eq('+j+') option[value="15"]').hide();
  $('.room:eq('+j+') option[value="16"]').hide();
  $('.room:eq('+j+') option[value="17"]').hide();
  $('.room:eq('+j+') option[value="18"]').hide();
  $('.room:eq('+j+') option[value="19"]').hide();
  $('.room:eq('+j+') option[value="20"]').hide();
}
```

## Editing the data

The POST method is used to update the data in the database. If the checkboxes are checked
and the submit button is clicked, the event data will be updated with the data selected in
that particular row.

```
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
```

# Future Plans

* Changing one of the buildings changes the room pickers for all of the records, which needs to be fixed
* Add error messages when the data does not save
* Add functionality to display the data currently in the database
