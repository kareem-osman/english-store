$(document).ready(function(){
    $(window).on("load",function(){
        $(".lds-roller").fadeOut(1000)
    })
    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $("#topup").hide()
            $("#nav-bar ").removeClass("navfixed")

        }else{$("#topup").show()
        $("#nav-bar").addClass("navfixed")
    }

    })
    $("#topup").click(function(){
        $("html,body").animate(
            {scrollTop:0},800
        )
    })
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

    $(".dropdown .dropdown-item").on("click",function(){
        let target=$(this).attr("href")
        $("body , html").animate({
            scrollTop:$(target).offset().top
        },800)
    })

});
// ----------------------------------------------------gallary
// ----------------------------------------------------gallary
// let gal_photo=Array('ddd','photo(1).jpg')

let gal_cont=''
for (let i=1 ;i<=20 ; i++)
{
    gal_cont += '<div> <img class="item figure-img img-fluid rounded" src="imges/gallary1/photo('+i+').jpg" alt=""> </div>'
    document.getElementById('gallary').innerHTML=gal_cont
    console.log(gal_cont)
}
