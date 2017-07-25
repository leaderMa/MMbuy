/**
 * Created by Maxz on 2017/7/22.
 */
$(function(){
    var titleid = 0;
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbaicaijiatitle",
        success:function(data){
            //console.log(data);
            var html = template("navContent",data);
            $("#topNav").html(html)
            $.ajax({
                url:"http://127.0.0.1:3000/api/getbaicaijiaproduct?titleid="+titleid,
                success:function(data){
                    var html = template("productInfoC",data);
                    $(".productInfo").html(html);
                    $(".swiper-wrapper>div:first-of-type").addClass("active")
                }
            });
            $(".swiper-slide").click(function(e){
                //e.target.getAttribute("data-titleid")
                var titleid=$(e.target).attr("titleid")
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getbaicaijiaproduct?titleid="+titleid,
                    success:function(data){
                        var html = template("productInfoC",data);
                        $(".productInfo").html(html);
                    }
                });
            })


            var mySwiper = new Swiper('#topNav', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',

            });

            swiperWidth = mySwiper.container[0].clientWidth
            maxTranslate = mySwiper.maxTranslate();
            maxWidth = -maxTranslate + swiperWidth / 2

            $(".swiper-container").on('touchstart', function (e) {
                //e.preventDefault()
            })

            mySwiper.on('tap', function (swiper, e) {

                //e.preventDefault()

                slide = swiper.slides[swiper.clickedIndex]
                slideLeft = slide.offsetLeft
                slideWidth = slide.clientWidth
                slideCenter = slideLeft + slideWidth / 2
                // 被点击slide的中心点

                mySwiper.setWrapperTransition(300)

                if (slideCenter < swiperWidth / 2) {

                    mySwiper.setWrapperTranslate(0)

                } else if (slideCenter > maxWidth) {

                    mySwiper.setWrapperTranslate(maxTranslate)

                } else {

                    nowTlanslate = slideCenter - swiperWidth / 2

                    mySwiper.setWrapperTranslate(-nowTlanslate)

                }

                $("#topNav  .active").removeClass('active')

                $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')

            })
        }
    });

})