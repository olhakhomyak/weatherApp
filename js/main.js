$('#search-btn').click(function () {
    var city = $('#srch-term').val();
    $('#srch-term').val("");
    var weather = new XMLHttpRequest();
    weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=bfc3222c7b3b0ed16b937cb274438ce2", false);
    weather.send(null);

    // GET DATA
    var current = JSON.parse(weather.response);
    var temp = current.main.temp;
    var country = current.sys.country;
    var description = current.weather[0].description;

    // HOW MANY CITIES CAN CONTAIN
    if($(".city-item").length > 4) {
        $('div').remove('.city-item');
    }


    $('#show-weather').fadeIn(3000)
                      .append("<div class='city-item'>"
                                + city + ", " + country + ", " + temp + "°C, " + description +
                              "</div>");
    $('#clear-btn').fadeIn(3000);
});

$('#clear-btn').click(function () {
    $('#show-weather').fadeOut(1000);
    $('#clear-btn').fadeOut(1000);
});