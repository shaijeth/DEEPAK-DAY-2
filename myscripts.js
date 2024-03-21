$(document).ready(function () {
  var id = GetParameterValues("ID");
  
  if (id == 1) {
    $("#itemlist1").show();
    $("#itemlist2").hide();
    $("#coursename").text("Introduction");
  } else if (id == 2) {
    $("#itemlist2").show();
    $("#itemlist1").hide();
    $("#coursename").text("Canva Basics");

  } else {
    $("#itemlist1").hide();
    $("#itemlist2").hide();
    $("#coursename").text("");

  }

  function GetParameterValues(param) {
    var url = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < url.length; i++) {
      var urlparam = url[i].split("=");
      if (urlparam[0] == param) {
        return urlparam[1];
      }
    }
  }


  $(".courseitem a").click(function () {
    var courseurl = $(this).attr("href");    
    $('#myframe').attr('src',courseurl);
    $('#videotitle').text( $(this).text());    
    return false;
  });



});