$(document).ready(function(){
    var hash = location.hash;
    if(hash == "#success"){
        swal({   
            title: "Yay!",   
            text: "You're successfully added to our mailing list",   type: "success",
            customClass: "popup"
        });
    }
    $("#logo").hover(function(){
        $(this).attr("src","/Assets/Images/1.png");
        }, function(){
        $(this).attr("src","/Assets/Images/2.png");
    });
});

$("#logo")