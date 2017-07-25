/**
 * Created by Maxz on 2017/7/17.
 */
$(function(){

    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorytitle",
        success:function(data){
            //console.log(data);
            var html =template("navH",data);
            $(".nav").html(html);
            var categoryTitle =$(".nav .navH h5");
            categoryTitle.on("click",function(e){                
                var titleId =$(this).data("titleid");
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getcategory?titleid="+titleId,
                    success:function(data){
                        console.log(data);
                        var html =template("navC",data);
                       var nn= $(e.target).parent().next();

                        $(nn).html(html).slideToggle(200).siblings(".hide").slideUp(200);


                    }
                })
            })
        }
    })

})