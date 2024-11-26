$(document).ready(function () {
    $("#offcanvas__id").click(function (e) { 
        e.preventDefault();
        $("#offcanvas__ids").offcanvas('fade');
    });
});