$(document).ready(function() {
    var users = [];
    var countAdd = 1;

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
        newLabel(user.nafn, user.stig, countAdd);
        countAdd++;

        // Hreinsar allt
        $("#formIn").trigger("reset");
    });

    // Taka seinasta út
    $("#btnRemove").click(function() {
        tempNum = countAdd - 1;
        $("#labelScore" + tempNum).empty();
        console.log(users);
        users.pop();
        console.log(users);
    });

    // Sortera allt
    $("#btnDone").click(function() {
        users.sort((a, b) => b.stig - a.stig);
        len = Object.keys(users).length;
        var j = 0;
        var countSort = 1;
        while (j != len) {
            $("#labelScore" + countSort).empty().append(users[j].nafn + " " + "<span class='badge badge-secondary'>" + users[j].stig + "</span>");
            j++;
            countSort++;
        };
    });


    // Bætir nafni og stigum við label
    function newLabel(nafn, stig, count) {
        $("#labelScore" + count).append(nafn + " " + "<span class='badge badge-secondary'>" + stig + "</span>");
    };

});
