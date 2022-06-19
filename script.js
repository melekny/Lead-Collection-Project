function sendData(){
  var data={phone:$("#phone").val(),email:$("#email").val()};
$.ajax('https://insider-optimus.herokuapp.com/lead-collection', 
{
    data:JSON.stringify(data),
    method:'post',
    contentType: "application/json",
    success: function (data,status,xhr) {       
      $(".form-data").addClass("d-none");
      $(".result-data").removeClass("d-none");                                   
    },
    error: function (jqXhr, textStatus, errorMessage) { 
    }
});  
}

function closeModal(){
  $(".overlay").remove()
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$( document ).ready(function() {
  $(".overlay:not(.modal)").click(function(){
     // $(".overlay").remove()
  })
});

function copy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}