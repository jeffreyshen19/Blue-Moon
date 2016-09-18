$(document).ready(function(){
    var hash = location.hash;
    if(hash == "#success"){
        swal({   
            title: "Yay!",   
            text: "You're successfully added to our mailing list",   type: "success",
            customClass: "popup"
        });
    }
});