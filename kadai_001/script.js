$(function(){
    //カルーセルの表示
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //リンクのホバー時
    $('.nav-over').on({
        'mouseover': function(){
            $(this).animate({
                //半透明
                opacity: 0.5
            });
        },
        'mouseout': function(){
            $(this).animate({
                //不透明
                opacity: 1
            });
        }
    });

    $('a[href^="#"]').on('click', function(){
        //スクロール先を取得    
        let href = $(this).attr('href');
        //console.log(href);
        let target = $(href == '#' ? 'html': href);
        console.log(target);
        //スクロール先を数値で取得（座標）
        let position = target.offset().top;
        $('html,body').animate({scrollTop:position},700,'swing');
    });
    
    //スクロールした時にTOPボタンを表示
    $(window).on('scroll',function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop() >= 200){
            $('#top-btn').css('opacity',1);
        }else{
            $('#top-btn').css('opacity',0);
        }

        $('.fade').each(function(){
            let Pos = $(this).offset().top;
            let windowPos = $(window).height();
            let scrollPso = $(window).scrollTop();
            console.log(Pos);
            console.log(windowPos);
            console.log(scrollPso);
            console.log(Pos - windowPos);
            if(scrollPso > Pos - windowPos){
                $(this).addClass('fadeIn');
            }
        });

    });
    //worksの画像のホバー時
    $('.worksimg').on({
        'mouseover': function(){
            $(this).animate({
                //半透明
                opacity: 0.5
            });
        },
        'mouseout': function(){
            $(this).animate({
                //不透明
                opacity: 1
            });
        },
        'click': function(){
            let getSrc = $(this).attr('src');
            $('#modaimg').attr('src',getSrc);
            $('#modalDisplay').fadeIn();
        }
    });
    
    //戻るボタンを押下した時
    $('.close').on('click',function(){
        $('#modalDisplay').fadeOut();
    });

});