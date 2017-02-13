$(document).ready(function(){
    $("#buttonOn").click(function(){
        $.get("/LEDSwitch", {"state": "on"})
    });

    $("#buttonOff").click(function(){
        $.get("/LEDSwitch", {"state": "off"})
    })
})
