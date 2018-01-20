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
            if (postRequest("frunk")) {
                isFrunkOpen = true;
                oClick.path[0].src = "img/frunkopen.png";
            }
        }
    };
    document.getElementById("flDoor").onclick = function(oClick) {
        if (!isFLDoorOpen) {
            if (postRequest("openFrontDriverDoor")) {
                oClick.path[0].src = "img/fldooropen.png";
                oClick.path[0].alt = "Close front left door";
                isFLDoorOpen = !isFLDoorOpen;
            }
        } else {
            if (postRequest("closeFrontDriverDoor")) {
                oClick.path[0].src = "img/fldoorclosed.png";
                oClick.path[0].alt = "Open front left door";
                isFLDoorOpen = !isFLDoorOpen;
            }
        }
    };
    document.getElementById("frDoor").onclick = function(oClick) {
        if (!isFRDoorOpen) {
            if (postRequest("openFrontPassengerDoor")) {
                oClick.path[0].src = "img/frdooropen.png";
                oClick.path[0].alt = "Close front right door";
                isFRDoorOpen = !isFRDoorOpen;
            }
        } else {
            if (postRequest("closeFrontPassengerDoor")) {
                oClick.path[0].src = "img/frdoorclosed.png";
                oClick.path[0].alt = "Open front right door";
                isFRDoorOpen = !isFRDoorOpen;
            }
        }
    };
    document.getElementById("blDoor").onclick = function(oClick) {
        if (!isBLDoorOpen) {
            if (postRequest("openBackDriverDoor")) {
                oClick.path[0].src = "img/bldooropen.png";
                oClick.path[0].alt = "Close back left door";
                isBLDoorOpen = !isBLDoorOpen;
            }
        } else {
            if (postRequest("closeBackDriverDoor")) {
                oClick.path[0].src = "img/bldoorclosed.png";
                oClick.path[0].alt = "Open back left door";
                isBLDoorOpen = !isBLDoorOpen;
            }
        }
    };
    document.getElementById("brDoor").onclick = function(oClick) {
        if (!isBRDoorOpen) {
            if (postRequest("openBackPassengerDoor")) {
                oClick.path[0].src = "img/brdooropen.png";
                oClick.path[0].alt = "Close back right door";
                isBRDoorOpen = !isBRDoorOpen;
            }
        } else {
            if (postRequest("closeBackPassengerDoor")) {
                oClick.path[0].src = "img/brdoorclosed.png";
                oClick.path[0].alt = "Open back right door";
                isBRDoorOpen = !isBRDoorOpen;
            }
        }
    };
    document.getElementById("windowsButton").onclick = function(oClick) {
        if (!isWindowsOpen) {
            if (postRequest("openAllWindows")) {
                isWindowsOpen = !isWindowsOpen;
                oClick.path[0].textContent = "Close all windows";
            }
        } else {
            if (postRequest("closeAllWindows")) {
                isWindowsOpen = !isWindowsOpen;
                oClick.path[0].textContent = "Open all windows";
            }
        }
    };
    document.getElementById("trunk").onclick = function(oClick) {
        if (!isTrunkOpen) {
            if (postRequest("trunk")) {
                isTrunkOpen = true;
                oClick.path[0].src = "img/trunkopen.png";
            }
        }
    };
});
// Generic post request
postRequest = function(command) {
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
            return command === data.command;
        },
        error: function(data) {
            console.log('Error: ' + data);
        }

    });
};
// TO TEST UX
// postRequest = function(command) { return true;}