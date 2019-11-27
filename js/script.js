$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  
    $("#test-1").click(function(){
        $(this).attr("data-toggle","modal")
        $(this).attr("data-target","#exampleModal")

    })
    $(".owl-carousel img").click(function(e){
       console.log(e.target.src)
       let ad_con=`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
       <div class="modal-content">
           <img style="width: 100%;" src="${e.target.src}" alt="">
       </div>
       </div>
   </div>`
        $("#img_pr").html(ad_con)
        $(this).attr("data-toggle","modal")
        $(this).attr("data-target","#exampleModal")

    })
     });