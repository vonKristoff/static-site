(function($) {

    
    
    $('.reveal').hide();
    $('.usage').on('click',function(){
        $('.reveal').show(300);
    })

    var comment = false;
    $('.discuss, .close').on('click',function(){
      if(comment){
        $('.talk').css('left','-500px');
        comment = false;
      }else{
        $('.talk').css('left','0px');
        comment = true;
      }
    })
    setTimeout(function() {
        $(".container").mCustomScrollbar({
      theme:"dark",
      scrollInertia:300,
      advanced:{
        updateOnContentResize:true
      }
    });
    $('.mCustomScrollBox').css('max-width','150%');
    }, 1500);

})(jQuery);