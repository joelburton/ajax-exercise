// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div

    $("#fortune-text").load("/fortune");
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    // TODO: make URL like "/weather?zipcode=94110"
    // TODO: request weather with that URL and show the forecast in
    //  #weather-info

    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, function (result) {
            $("#weather-info").text(result.forecast);
        }
    );
}

// TODO: bind this to the "get weather" form
$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            console.dir(result);
            var msg = result.msg;
            var code = result.code;
            if (code == 'ERROR') {
                $("#order-status").addClass('order-error');
            } else {
                $("#order-status").removeClass("order-error");
            }
            $("#order-status").html(msg);
        }
    );
}

$("#order-form").on('submit', orderMelons);

// TODO: handle your order-melon form
// TODO: make the URL for the server using jQuery's .serialize method
//    (look it up if you need to!)
// TODO: request the result by POSTing to the server using AJAX
// TODO: show the result message after your form
// TODO: if the result code is ERROR, make it show up in red (see our CSS!)

