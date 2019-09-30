$(function() {
  $('.skitter-large').skitter() ;
});



$(".arrow").click(function(){

  $("html,body").animate ( {scrollTop:'0' },1000)
}) ;



var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


 


 /*$(window).scroll ( function(){

  var windowOffs =$(window).scrollTop();
  var aboutlin= $("#aboutLink").offset().top; 
  console.log ( aboutlin)

      if (windowOffs >= aboutlin)
      {
        $(".navbar").css("backgroundColor","rgba(225,225,225,)")
      }
      else
      {
        $(".navbar").css("backgroundColor","transparent")

      }

  
    }) ; */


     








  var cardImg =  document.getElementById("card1") ;


      cardImg.addEventListener( "click", function(){

        $(".layer").css("display","block")

      } ) ; 


      var close = document.getElementById("close") ;
        
      close.addEventListener("click",function (){

       $(".layer").css("display","none")
      }) ;







      var cardImg1 =  document.getElementById("card2") ;


      cardImg1.addEventListener( "click", function(){

        $(".layer1").css("display","block")

      } ) ; 


      var close1 = document.getElementById("close1") ;
        
      close1.addEventListener("click",function (){

       $(".layer1").css("display","none")
      }) ;  



      var cardImg2 =  document.getElementById("card3") ;


      cardImg2.addEventListener( "click", function(){

        $(".layer2").css("display","block")

      } ) ; 


      var close2 = document.getElementById("close2") ;
        
      close2.addEventListener("click",function (){

       $(".layer2").css("display","none")
      }) ;







      var cardImg3 =  document.getElementById("card4") ;


      cardImg3.addEventListener( "click", function(){

        $(".layer3").css("display","block")

      } ) ; 


      var close3 = document.getElementById("close3") ;
        
      close3.addEventListener("click",function (){

       $(".layer3").css("display","none")
      }) ;





      var cardImg4 =  document.getElementById("card5") ;


      cardImg4.addEventListener( "click", function(){

        $(".layer4").css("display","block")

      } ) ; 


      var close4 = document.getElementById("close4") ;
        
      close4.addEventListener("click",function (){

       $(".layer4").css("display","none")
      }) ;




      var cardImg5 =  document.getElementById("card6") ;


      cardImg5.addEventListener( "click", function(){

        $(".layer5").css("display","block")

      } ) ; 


      var close5 = document.getElementById("close5") ;
        
      close5.addEventListener("click",function (){

       $(".layer5").css("display","none")
      }) ; 















      // $(".serv2 ul").animate({width,100%},2000)