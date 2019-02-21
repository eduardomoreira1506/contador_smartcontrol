$(function(){


	/*****************************************
		SCRIPTS PÁGINA INICIAL
	*******************************************/
	//CARROSSEL DE DESTAQUE
	$("#carrosselDestaque").owlCarousel({
		items : 1,
        dots: true,
        loop: true,
        lazyLoad: true,
        mouseDrag:true,
        touchDrag  : true,
        autoplay: true,	       
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    smartSpeed: 450,

	    //CARROSSEL RESPONSIVO
	    //responsiveClass:true,			    
 //        responsive:{
 //            320:{
 //                items:1
 //            },
 //            600:{
 //                items:2
 //            },
           
 //            991:{
 //                items:2
 //            },
 //            1024:{
 //                items:3
 //            },
 //            1440:{
 //                items:4
 //            },
            			            
 //        }		    		   		    
	    
	});
		
});