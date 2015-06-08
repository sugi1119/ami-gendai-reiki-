$(document).ready(function() {
    $('.menu a').click(function(e) {
        $(this).toggleClass('active');
        // $('.toggle-nav').slideToggle(200);
        $('.menu ul').toggleClass('active');
        $('#panel-btn-icon').toggleClass('close');
        return false;

        e.preventDefault();
    });
});
