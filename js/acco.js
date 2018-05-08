(function(){
    $('menu-acco__item').click(function(){
        if($(this).hasClass('--active')){
            $(this).removeClass('--active');
        } else{
            $(this).addClass('--active').siblings().removeClass('--active');
        }
    });
})();