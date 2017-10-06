var now = Date.now();
var nextArticle = new Date(2017, 0, 1);

$(document).ready(function(){
    var hash = location.hash;
    if(hash == "#success"){
        swal({
            title: "Yay!",
            text: "You're successfully added to our mailing list",   type: "success",
            customClass: "popup"
        });
    }
    else if (hash == "#all" || hash == ""){
      $("#showyear").show();
      $("#showmonth").show();
      $("#showbot").show();
    }
    else if (hash == "#year"){
      $("#year-all").show();
    }
    else if (hash == "#month"){
      $("#showmonth").show();
    }

    $("#logo").hover(function(){
        $(this).attr("src","/Assets/Images/1.png");
        }, function(){
        $(this).attr("src","/Assets/Images/2.png");
    });
    var daysuntil = Math.round((nextArticle.getTime() - now) / 86400000);
    $("#days-until h1").html(daysuntil);
});

function dropdown(){
  $("#dropdown-menu").toggle();
}
