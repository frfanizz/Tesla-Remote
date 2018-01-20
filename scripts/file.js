window.onload = function() {
    var isFrunkOpen = false;
    var isFLDoorOpen = false;
    var isFLWindOpen = false;
    var isFRWindOpen = false;
    var isFRDoorOpen = false;
    var isBLDoorOpen = false;
    var isBLWindOpen = false;
    var isBRWindOpen = false;
    var isBRDoorOpen = false;
    var isTrunkOpen = false;
    document.getElementById("frunk").onclick = function(oClick) {
        // open frunk
        if (!isFrunkOpen) {
            // call post open frunk
            isFrunkOpen = true;
            oClick.path[0].src = "img/frunkopen.png";
            r = requests.post('http://hackathon.intrepidcs.com/api/data', headers={'Authorization': 'Bearer '}, form={ 'command': 'openFrontDriverDoor' }).text
        }
    };
    document.getElementById("flDoor").onclick = function(oClick) {
        // toggle flDoor
        if (!isFLDoorOpen) {
            // call post open fldoor
            oClick.path[0].src = "img/fldooropen.png";
            oClick.path[0].alt = "Close front left door";
        } else {
            // call post close fldoor
            oClick.path[0].src = "img/fldoorclosed.png";
            oClick.path[0].alt = "Open front left door";
        }
        isFLDoorOpen = !isFLDoorOpen;
    };
    document.getElementById("flWind").onclick = function(oClick) {
        // toggle flWind
        if (!isFLWindOpen) {
            // call post open flwind
            oClick.path[0].src = "img/flwindopen.png";
            oClick.path[0].alt = "Close front left window";
        } else {
            // call post close flwind
            oClick.path[0].src = "img/flwindclosed.png";
            oClick.path[0].alt = "Open front left window";
        }
        isFLWindOpen = !isFLWindOpen;
    };
    document.getElementById("frWind").onclick = function(oClick) {
        // toggle frWind
        if (!isFRWindOpen) {
            // call post open frwind
            oClick.path[0].src = "img/frwindopen.png";
            oClick.path[0].alt = "Close front right window";
        } else {
            // call post close frwind
            oClick.path[0].src = "img/frwindclosed.png";
            oClick.path[0].alt = "Open front right window";
        }
        isFRWindOpen = !isFRWindOpen;
    };
    document.getElementById("frDoor").onclick = function(oClick) {
        // toggle frDoor
        if (!isFRDoorOpen) {
            // call post open fldoor
            oClick.path[0].src = "img/frdooropen.png";
            oClick.path[0].alt = "Close front right door";
        } else {
            // call post close fldoor
            oClick.path[0].src = "img/frdoorclosed.png";
            oClick.path[0].alt = "Open front right door";
        }
        isFRDoorOpen = !isFRDoorOpen;
    };
    document.getElementById("blDoor").onclick = function(oClick) {
        // toggle blDoor
        if (!isBLDoorOpen) {
            // call post open fldoor
            oClick.path[0].src = "img/bldooropen.png";
            oClick.path[0].alt = "Close back left door";
        } else {
            // call post close fldoor
            oClick.path[0].src = "img/bldoorclosed.png";
            oClick.path[0].alt = "Open back left door";
        }
        isBLDoorOpen = !isBLDoorOpen;
    };
    document.getElementById("blWind").onclick = function(oClick) {
        // toggle blWind
        if (!isBLWindOpen) {
            // call post open blwind
            oClick.path[0].src = "img/blwindopen.png";
            oClick.path[0].alt = "Close back left window";
        } else {
            // call post close blwind
            oClick.path[0].src = "img/blwindclosed.png";
            oClick.path[0].alt = "Open back left window";
        }
        isBLWindOpen = !isBLWindOpen;
    };
    document.getElementById("brWind").onclick = function(oClick) {
        // toggle brWind
        if (!isBRWindOpen) {
            // call post open brwind
            oClick.path[0].src = "img/brwindopen.png";
            oClick.path[0].alt = "Close back right window";
        } else {
            // call post close fldoor
            oClick.path[0].src = "img/brwindclosed.png";
            oClick.path[0].alt = "Open back right window";
        }
        isBRWindOpen = !isBRWindOpen;
    };
    document.getElementById("brDoor").onclick = function(oClick) {
        // toggle brDoor
        if (!isBRDoorOpen) {
            // call post open fldoor
            oClick.path[0].src = "img/brdooropen.png";
            oClick.path[0].alt = "Close back right door";
        } else {
            // call post close fldoor
            oClick.path[0].src = "img/brdoorclosed.png";
            oClick.path[0].alt = "Open back right door";
        }
        isBRDoorOpen = !isBRDoorOpen;
    };
    document.getElementById("trunk").onclick = function(oClick) {
        // open trunk
        if (!isTrunkOpen) {
            // call post open trunk
            isTrunkOpen = true;
            oClick.path[0].src = "img/trunkopen.png";
        }
    };
}


/*
$.ajax({
    url: “www.example.com/information.php”,
    data: { page: 2 },
    method: “post”,
    success: function(result) {
       $(“#someElement”).html(result);
    },
    error: function(result) {
       alert(“Ajax call failed!”);
    }
 }); */