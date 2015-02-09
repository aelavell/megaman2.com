$(document).ready(function() {
    $("#fox").click(function() {
        $("#fox_audio").trigger("play");
        $(".saying").text("BUH DA BUH DA BUH DA BA DA");
    });
    $("#falco").click(function() {
        $("#falco_audio").trigger("play");
        $(".saying").text("VOO DOO WING DAMAGE");
    });
    $("#dog").click(function() {
        $("#dog_audio").trigger("play");
        $(".saying").text("GOOD LUCK");
    });
    $("#peppy").click(function() {
        $("#peppy_audio").trigger("play");
        $(".saying").text("VOO DOO WING, VOO DOO WING");
    });
    $("#slippy").click(function() {
        $("#slippy_audio").trigger("play");
        $(".saying").text("TIMBITS TIMBITS");
    });

});
