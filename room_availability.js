$(document).ready(function(){
  for(var i = 0; i < 35; i++){
    $('.building:eq('+i+')').change(function(){
      for(var j = 0; j < 35; j++){
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
        else if($(this).val() == "2"){
          $('.room:eq('+j+') option[value="1"]').hide();
          $('.room:eq('+j+') option[value="2"]').hide();
          $('.room:eq('+j+') option[value="3"]').hide();
          $('.room:eq('+j+') option[value="4"]').hide();
          $('.room:eq('+j+') option[value="5"]').hide();
          $('.room:eq('+j+') option[value="6"]').show();
          $('.room:eq('+j+') option[value="7"]').show();
          $('.room:eq('+j+') option[value="8"]').show();
          $('.room:eq('+j+') option[value="9"]').show();
          $('.room:eq('+j+') option[value="10"]').show();
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
        else if($(this).val() == "3"){
          $('.room:eq('+j+') option[value="1"]').hide();
          $('.room:eq('+j+') option[value="2"]').hide();
          $('.room:eq('+j+') option[value="3"]').hide();
          $('.room:eq('+j+') option[value="4"]').hide();
          $('.room:eq('+j+') option[value="5"]').hide();
          $('.room:eq('+j+') option[value="6"]').hide();
          $('.room:eq('+j+') option[value="7"]').hide();
          $('.room:eq('+j+') option[value="8"]').hide();
          $('.room:eq('+j+') option[value="9"]').hide();
          $('.room:eq('+j+') option[value="10"]').hide();
          $('.room:eq('+j+') option[value="11"]').show();
          $('.room:eq('+j+') option[value="12"]').show();
          $('.room:eq('+j+') option[value="13"]').show();
          $('.room:eq('+j+') option[value="14"]').hide();
          $('.room:eq('+j+') option[value="15"]').hide();
          $('.room:eq('+j+') option[value="16"]').hide();
          $('.room:eq('+j+') option[value="17"]').hide();
          $('.room:eq('+j+') option[value="18"]').hide();
          $('.room:eq('+j+') option[value="19"]').hide();
          $('.room:eq('+j+') option[value="20"]').hide();
        }
        else if($(this).val() == "4"){
          $('.room:eq('+j+') option[value="1"]').hide();
          $('.room:eq('+j+') option[value="2"]').hide();
          $('.room:eq('+j+') option[value="3"]').hide();
          $('.room:eq('+j+') option[value="4"]').hide();
          $('.room:eq('+j+') option[value="5"]').hide();
          $('.room:eq('+j+') option[value="6"]').hide();
          $('.room:eq('+j+') option[value="7"]').hide();
          $('.room:eq('+j+') option[value="8"]').hide();
          $('.room:eq('+j+') option[value="9"]').hide();
          $('.room:eq('+j+') option[value="10"]').hide();
          $('.room:eq('+j+') option[value="11"]').hide();
          $('.room:eq('+j+') option[value="12"]').hide();
          $('.room:eq('+j+') option[value="13"]').hide();
          $('.room:eq('+j+') option[value="14"]').show();
          $('.room:eq('+j+') option[value="15"]').show();
          $('.room:eq('+j+') option[value="16"]').hide();
          $('.room:eq('+j+') option[value="17"]').hide();
          $('.room:eq('+j+') option[value="18"]').hide();
          $('.room:eq('+j+') option[value="19"]').hide();
          $('.room:eq('+j+') option[value="20"]').hide();
        }
        else if($(this).val() == "5"){
          $('.room:eq('+j+') option[value="1"]').hide();
          $('.room:eq('+j+') option[value="2"]').hide();
          $('.room:eq('+j+') option[value="3"]').hide();
          $('.room:eq('+j+') option[value="4"]').hide();
          $('.room:eq('+j+') option[value="5"]').hide();
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
          $('.room:eq('+j+') option[value="16"]').show();
          $('.room:eq('+j+') option[value="17"]').show();
          $('.room:eq('+j+') option[value="18"]').hide();
          $('.room:eq('+j+') option[value="19"]').hide();
          $('.room:eq('+j+') option[value="20"]').hide();
        }
        else if($(this).val() == "6"){
          $('.room:eq('+j+') option[value="1"]').hide();
          $('.room:eq('+j+') option[value="2"]').hide();
          $('.room:eq('+j+') option[value="3"]').hide();
          $('.room:eq('+j+') option[value="4"]').hide();
          $('.room:eq('+j+') option[value="5"]').hide();
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
          $('.room:eq('+j+') option[value="18"]').show();
          $('.room:eq('+j+') option[value="19"]').show();
          $('.room:eq('+j+') option[value="20"]').show();
        }
      }
    });
  }
});
