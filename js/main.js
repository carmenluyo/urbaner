//header responsive 

/*Menú Toggle and hidden*/
$(".switch").click(function() {
  $(".switch").toggleClass("on");
  $(".menu").toggleClass("opacity");
  $("#header-content").toggleClass("active");
});

/*perfil select */

$("#my-account").click(function() {
  $(".select-nav").toggleClass("active");
});


//tabs de envios

$(".tabs-envios a ").on("click",function(e){
    e.preventDefault();
    $(".tabs-envios a ").removeClass("activeImg");
    $(this).addClass("activeImg");
    var b=$(this).attr("data-img");
    $(".listPC img").hide();
    $("."+b).toggle();
})

//login


$(document).ready(function () {
    //event handler for submit button
    $("#myform").submit(function (e) {
        e.preventDefault();
        //collect userName and password entered by users
        var userName = $("#username").val();
        var password = $("#password").val();

        //call the authenticate function
        authenticate(userName, password);
    });
    //authenticate function to make ajax call
    function authenticate(userName, password) {
        $.ajax
        ({
            type: "POST",
            url: "https://api.sandbox.urbaner.com/api/client/authenticate/jwt/",
            dataType: 'json',

            //json object to sent to the authentication url
            data: {email:  userName , password :password},

            success: function (rs) {
                localStorage.setItem('info', JSON.stringify(rs));
                console.log(rs);
                window.location.replace("activo.html");
            }
        })
    }
    //    var aValue = localStorage.getItem('info');
    //    console.log(JSON.stringify(aValue));
    var retrievedObject = localStorage.getItem('info');
    var dt = JSON.parse(retrievedObject);
    console.log(dt.client.email);
    $('.name-login').html(dt.client.last_name);
    $('#closelocal').click(function(){
        localStorage.removeItem('info');
        window.location.replace("index.html");
    })

});