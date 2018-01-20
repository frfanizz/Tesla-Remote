// $.ajax({
//     url: “www.example.com/information.php”,
//     data: { page: 2 },
//     method: “post”,
//     success: function(result) {
//        $(“#someElement”).html(result);
//     },
//     error: function(result) {
//        alert(“Ajax call failed!”);
//     }
//  });

 

 window.onload = function() {
    var isFLDoorOpen = false;
    var isFLWindOpen = false;
    var isFRWindOpen = false;
    var isFRDoorOpen = false;
    var isFLDoorOpen = false;
    var isFLWindOpen = false;
    var isFRWindOpen = false;
    var isFRDoorOpen = false;
    document.getElementById("frunk").onclick = function() {
        // open frunk
        alert("open frunk");
    };
    document.getElementById("flDoor").onclick = function() {
        // toggle flDoor
        alert("open flDoor");
    };
    document.getElementById("flWind").onclick = function() {
        // toggle flWind
        alert("open flWind");
    };
    document.getElementById("frWind").onclick = function() {
        // toggle frWind
        alert("open frWind");
    };
    document.getElementById("frDoor").onclick = function() {
        // toggle frDoor
        alert("open frDoor");
    };
    document.getElementById("blDoor").onclick = function() {
        // toggle blDoor
        alert("open blDoor");
    };
    document.getElementById("blWind").onclick = function() {
        // toggle blWind
        alert("open blWind");
    };
    document.getElementById("brWind").onclick = function() {
        // toggle brWind
        alert("open brWind");
    };
    document.getElementById("brDoor").onclick = function() {
        // toggle brDoor
        alert("open brDoor");
    };
    document.getElementById("trunk").onclick = function() {
        // open trunk
        alert("open trunk");
    };
}