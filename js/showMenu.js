$(function(){
  var flag = true;
  $("#navLink").on("click",function(){
    $("#headerNav").slideToggle("fast");
    if(flag){
      $("#menuText").hide("fast");
      $("#menuCursor").removeClass("fa-bars").addClass("fa-times");

      flag = false;
    }else{
      $("#menuText").show("fast");
      $("#menuCursor").removeClass("fa-times").addClass("fa-bars");
      flag = true;
    }
  });
  console.log("aaaa1207");
});


