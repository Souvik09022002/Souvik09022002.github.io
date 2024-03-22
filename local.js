// // $(document).ready(function(){
// //   $(".pro_head").click(function(){
// //     $("this").next("pro_body").slideToggle();
// //     $(".pro_body").not($(this).next()).slideUp();
// //   })
// // })
// $(document).ready(function(){
//     $(".pro_body").hide();
//     $(".pro_head").click(function(){
       
//         // $(".pro_body").not($(this).next()).css({ "background-color": "#fffb05"})
//     })

//     $('.pro_head').click(function() {
//         $(".pro").addClass("active")
//         $(this).next('.pro_body').slideToggle();
//         $('.pro_body').not($(this).next()).slideUp();
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.querySelector(".menu-icon");
//     const div1 = document.getElementById("div1");

//     menuIcon.addEventListener("click", function () {
//         div1.classList.toggle("active");
//     });
// });

$(document).ready(function(){
    if($(window).width()<750){
        $("h1.manubar").click(function(){
            $("#div1 ul").slideToggle(); // Toggle the <ul> element directly
        });
    }
});



