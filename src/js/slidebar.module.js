/// <reference types="../../@types/jquery" />

export let slidBar = ()=>{
    
    $('.slide-selector .open-close').on('click', ()=>{

        let outerWidth = $('.slide-items').outerWidth();
        let left = $('.slide-items').css('marginLeft');
        $('.slide-selector .open-close .close').toggleClass('d-none');
        $('.slide-selector .open-close .open').toggleClass('d-none');
        if(left === '0px'){
            $('.slide-items').animate({marginLeft: `-${outerWidth}px`},500)
        }
        else{

            $('.slide-items').animate({marginLeft: '0px'},500)
        }
       
        
        
    })
}


