$(document).ready(function() {
    "Use strict";

    // Header
    $('.header_btn').on('click', function () {
        $(this).toggleClass('header_btn--active');
        $('.sidebar').toggleClass('sidebar--active');
    });

});