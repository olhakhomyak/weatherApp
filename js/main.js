$(document).ready(function () {

    $('#search-btn').click(function () {
        // GET CITY NAME
        var city = $('#srch-term').val();
        $('#srch-term').val("");

        // GET DATA
        var weather = new XMLHttpRequest();
        weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=bfc3222c7b3b0ed16b937cb274438ce2", false);
        weather.send(null);
        var current = JSON.parse(weather.response);
        var temp = current.main.temp;
        var country = current.sys.country;
        var description = current.weather[0].description;

        // HOW MANY CITIES CAN CONTAIN
        // change length to add or remove number of the cities per page
        if($(".city-item").length > 4) {
            $('div').remove('.city-item');
        }

        // SHOW WEATHER BLOCK
        $('#show-weather').fadeIn(3000)
                          .append("<div class='city-item'>- "
                                    + "<span class='city-name'>" + city + "</span>, " + country + ", " + temp + "°C, " + description +
                                  "</div>");
        $('#clear-btn').fadeIn(3000);
    });

    //REMOVE WEATHER BLOCK
    $('#clear-btn').click(function () {
        $('#show-weather').fadeOut(1000);
        $('#clear-btn').fadeOut(1000);
    });

});