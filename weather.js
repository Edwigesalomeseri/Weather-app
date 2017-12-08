

$(document).ready(function(){

    $("#submitweather").click(function(){

    var city =$("city").val();
        if (city !="" ){
         $.ajax({
             url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
             '&APPID=33fb7454eb75c6a062a86f7f0ee2695a',
             type: "GET",
             dataType: "Jsonp",
            success: function(data){
                console.log(data);
            }
            });
        }else{
         $("error").html("field cannot be empty")
        }

    })
});


