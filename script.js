

$(function () {
    $('#mytab a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
  }
  )

    $(document).ready(function()
 {
     $(window).scroll(function()
     {
         var positiontop=$(document).scrollTop();
         console.log(positiontop);

         if((positiontop>100)&&(positiontop<300)){
           
             $('#banner').addClass('animate__animated animate__zoomIn');
         
             
            } 
      
     });
 })
 