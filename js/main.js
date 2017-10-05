
$(".tabs-envios a ").on("click",function(e){
    e.preventDefault();
    $(".tabs-envios a ").removeClass("active");
    $(this).addClass("active");
    var b=$(this).attr("data-img");
    $(".listPC").hide();
    $("."+b).toggle();
})