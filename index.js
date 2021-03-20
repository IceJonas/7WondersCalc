$(document).ready(function() {
    var users = [];
    var count1 = 1;

    $("#btnAdd").click(function() {
        var tempArr = [$("#inpNum1").val(), $("#inpNum2").val(), $("#inpNum3").val(), $("#inpNum4").val(), $("#inpNum5").val(), $("#inpNum6").val(), $("#inpNum7").val(), $("#inpNum8").val()];
        var name = $("#inpName").val();
        var temp = 0;
        console.log(tempArr);
        for (var i = 0; i < tempArr.length; i++) {
            temp = temp + Number(tempArr[i]);
        }
        var user = {
            nafn: name,
            stig: temp
        }
        users.push(user);

        // prentar í label
        newLabel(user.nafn, user.stig, count1);
        count1++;

        // Hreinsar allt
        $("#formIn").trigger("reset");
    });

    // Klára leikinn og finna ut í hvaða sæti hver lenti í.
    $("#btnDone").click(function() {
        users.sort((a, b) => b.stig - a.stig);
        len = Object.keys(users).length;
        var j = 0;
        var count2 = 1;
        while (j != len) {
            $("#labelScore" + count2).empty().append(count2 + " " + users[j].nafn + " " + users[j].stig);
            j++;
            count2++;
        };
    });

    // Bætir nafni og stigum við label
    function newLabel(nafn, stig, count) {
        $("#labelScore" + count).append(" " + nafn + " " + stig);
    };

});
