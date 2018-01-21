$(document).ready(function () {
    var isFrunkOpen = false;
    var isFLDoorOpen = false;
    var isFRDoorOpen = false;
    var isBLDoorOpen = false;
    var isBRDoorOpen = false;
    var isTrunkOpen = false;
    var isWindowsOpen = false;
    document.getElementById("frunk").onclick = function(oClick) {
        if (!isFrunkOpen) {
            postRequest(
                "frunk",
                function() {
                    isFrunkOpen = true;
                    oClick.path[0].src = "img/frunkopen.png";
                },
                {}
            );
        }
    };
    document.getElementById("flDoor").onclick = function(oClick) {
        if (!isFLDoorOpen) {
            postRequest(
                "openFrontDriverDoor",
                function() {
                    oClick.path[0].src = "img/fldooropen.png";
                    oClick.path[0].alt = "Close front left door";
                    isFLDoorOpen = !isFLDoorOpen;
                },
                {}
            );
        } else {
            postRequest(
                "closeFrontDriverDoor",
                function() {
                    oClick.path[0].src = "img/fldoorclosed.png";
                    oClick.path[0].alt = "Open front left door";
                    isFLDoorOpen = !isFLDoorOpen;
                },
                {}
            );
        }
    };
    document.getElementById("frDoor").onclick = function(oClick) {
        if (!isFRDoorOpen) {
            postRequest(
                "openFrontPassengerDoor",
                function() {
                    oClick.path[0].src = "img/frdooropen.png";
                    oClick.path[0].alt = "Close front right door";
                    isFRDoorOpen = !isFRDoorOpen;
                },
                {}
            );
        } else {
            postRequest(
                "closeFrontPassengerDoor",
                function() {
                    oClick.path[0].src = "img/frdoorclosed.png";
                    oClick.path[0].alt = "Open front right door";
                    isFRDoorOpen = !isFRDoorOpen;
                },
                {}
            );
        }
    };
    document.getElementById("blDoor").onclick = function(oClick) {
        if (!isBLDoorOpen) {
            postRequest(
                "openBackDriverDoor",
                function() {
                    oClick.path[0].src = "img/bldooropen.png";
                    oClick.path[0].alt = "Close back left door";
                    isBLDoorOpen = !isBLDoorOpen;
                },
                {}
            );
        } else {
            postRequest(
                "closeBackDriverDoor",
                function() {
                    oClick.path[0].src = "img/bldoorclosed.png";
                    oClick.path[0].alt = "Open back left door";
                    isBLDoorOpen = !isBLDoorOpen;
                },
                {}
            );
        }
    };
    document.getElementById("brDoor").onclick = function(oClick) {
        if (!isBRDoorOpen) {
            postRequest(
                "openBackPassengerDoor",
                function() {
                    oClick.path[0].src = "img/brdooropen.png";
                    oClick.path[0].alt = "Close back right door";
                    isBRDoorOpen = !isBRDoorOpen;
                },
                {}
            );
        } else {
            postRequest(
                "closeBackPassengerDoor",
                function() {
                    oClick.path[0].src = "img/brdoorclosed.png";
                    oClick.path[0].alt = "Open back right door";
                    isBRDoorOpen = !isBRDoorOpen;
                },
                {}
            );
        }
    };
    document.getElementById("windowsButton").onclick = function(oClick) {
        if (!isWindowsOpen) {
            postRequest(
                "openAllWindows",
                function() {
                    isWindowsOpen = !isWindowsOpen;
                    oClick.path[0].textContent = "Close all windows";
                },
                {}
            );
        } else {
            postRequest(
                "closeAllWindows",
                function() {
                    isWindowsOpen = !isWindowsOpen;
                    oClick.path[0].textContent = "Open all windows";
                },
                {}
            );
        }
    };
    document.getElementById("trunk").onclick = function(oClick) {
        if (!isTrunkOpen) {
            postRequest(
                "trunk",
                function() {
                    isTrunkOpen = true;
                    oClick.path[0].src = "img/trunkopen.png";
                },
                {}
            );
        }
    };
});
// Generic post request
postRequest = function(command, successFunc, errorFunc) {
    var resp;
    $.ajax({
        type: "POST",
        url: 'http://hackathon.intrepidcs.com/api/data',
        headers: {
            'Authorization': 'Bearer 6c299d424e90cd865af81922cc397d586c8785d2f2368608a8cf0fa4edd6d407'
        },
        method: 'POST',
        data: {
            command: command
        },
        dataType: "JSON",
        success: function (data) {
            if (command === data["data"][0]["command"]) {
                successFunc();
            }
        },
        error: function(data) {
            console.log('Error: ' + data);
            errorFunc();
        }

    });
};
// TO TEST UX
// postRequest = function(command, successFunc, errorFunc) { successFunc(); }