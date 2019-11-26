$(document).ready(function () {
    $('.subView').hide();
    $('.fixedButton').hide();
    if ($(this).scrollTop() > 30) {
        $('.fixedButton').fadeIn();
    } else {
        $('.fixedButton').fadeOut();
    }

    $('#culturaLink').on('click',function(){
        $('.subView').fadeOut(670);
        $('#culturaView').fadeIn('slow');
        $('li.nav-item').removeClass('active');
        $(this).closest('li').addClass('active');
        window.scrollTo(0,0)
    });

    $('#comidaLink').on('click',function(){
        $('#culturaView').fadeOut(670);
        $('.subView').fadeOut(670);
        $('.mainView').fadeIn(670);
        $('li.nav-item').removeClass('active');
        $(this).closest('li').addClass('active');
        window.scrollTo(0,0)
    });

    $('#verCulinaria').on('click',function () {
        $('#comidaLink').click();
    });


    $('.btn.tradeView').on('click',function(){
        $('section.mainView').fadeOut(670);
        let id = $(this).attr('id').replace('btn','');
        $('section#'+id+'View').show();
    });
    $('.jumbotron .view').on('click',function(){
        $(this).closest('.jumbotron').find('.btn.tradeView').click();
    });

    $('#btnToTop').on('click',function(){
        window.scrollTo(0,0)
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('.fixedButton').fadeIn();
        } else {
            $('.fixedButton').fadeOut();
        }
    });
});