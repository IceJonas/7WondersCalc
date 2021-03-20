$(document).ready(function() {
    $("#btnAdd").click(function() {
        var tempArr = [$("#numIn1").val(), $("#numIn2").val(), $("#numIn3").val(), $("#numIn4").val(), $("#numIn5").val(), $("#numIn6").val(), $("#numIn7").val(), $("#numIn1").val()];
        var name = $("#nameIn").val();
        var temp = 0;
        for (var i = 0; i < tempArr.length; i++) {
            temp = temp + parseInt(tempArr[i]);
        }

        $("#testLabel").append(" " + name + " " + temp);

        $(document).on('dblclick', 'li', function() {
            $(this).fadeOut('slow');
        });


        // Hreinsar allt
        $("#formIn").trigger("reset");
    });
});



// function places(p1, p2) {
//   return p1 * p2;   // The function returns the product of p1 and p2
// }
