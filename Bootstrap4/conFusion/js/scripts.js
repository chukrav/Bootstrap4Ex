//$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // -----------------------------------
    $("#mycarousel").carousel({interval: 2000});                
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }                    
    });
    $("#btnReserve").click(function(){
        // alert("Reserve table btn");
        $("#formReserv").modal('show');
        $(this).toggle();
    });                
    // #loginModal
    $("#loginBtn").click(function(){                    
        $("#loginModal").modal('show');
        $(this).toggle();
    });   
    // submitReserve, loginModal
    $("#submitReserve").click(function(){  
        // $("#btnReserve").toggle();                   
        $("#formReserv").modal('toggle');                                   
    });      
    // signInBtn
    $("#signInBtn").click(function(){  
        $("#loginBtn").hide();                  
        $("#loginModal").modal('toggle');                                   
    });
//});