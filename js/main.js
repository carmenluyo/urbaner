$('.btnPlataform').click(function() {
    $('.btnPlataform').addClass('activeImg');
    $('.btnTracking').removeClass('activeImg');
    $('.btnOptimize').removeClass('activeImg');
    $('.imgPlataform').show();
    $('.imgTracking').hide();
    $('.imgOptimize').hide();
});

$('.btnTracking').click(function() {
    $('.btnTracking').addClass('activeImg');
    $('.btnPlataform').removeClass('activeImg');
    $('.btnOptimize').removeClass('activeImg');
    $('.imgTracking').show();
    $('.imgPlataform').hide();
    $('.imgOptimize').hide();
});

$('.btnOptimize').click(function() {
    $('.btnOptimize').addClass('activeImg');
    $('.btnPlataform').removeClass('activeImg');
    $('.btnTracking').removeClass('activeImg');
    $('.imgOptimize').show();
    $('.imgPlataform').hide();
    $('.imgTracking').hide();
});