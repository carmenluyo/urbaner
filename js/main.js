$(".tabs-envios a ").on("click",function(e){
    e.preventDefault();
    $(".tabs-envios a ").removeClass("activeImg");
    $(this).addClass("activeImg");
    var b=$(this).attr("data-img");
    $(".listPC img").hide();
    $("."+b).toggle();
})

$(document).ready(function () {
      //alert('efef');
        //event handler for submit button
        $("#myform").submit(function (e) {
            e.preventDefault();
            //collect userName and password entered by users
            var userName = $("#username").val();
            var password = $("#password").val();

            //call the authenticate function
            authenticate(userName, password);
        });
    });

    //authenticate function to make ajax call
    function authenticate(userName, password) {
        //alert('efeime');
        $.ajax
        ({
            type: "POST",
            url: "https://api.sandbox.urbaner.com/api/client/authenticate/jwt/",
            dataType: 'json',
            async: false,
            //json object to sent to the authentication url
            data: {email:  userName , password :password},

            success: function (rs) {

                window.location.replace("activo.html");
            }
        })
    }