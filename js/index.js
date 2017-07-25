/**
 * Created by Maxz on 2017/7/17.
 */
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getindexmenu",
        success:function(data){
            console.log(data);
            var html = template("content",data);
            $(".content").html(html);
            //console.log($(".content>ul>li:nth-of-type(8)"));
            $(".content>ul>li:nth-of-type(8)").on("click",function(){
                $(".content>ul>li:nth-last-of-type(-n+4)").toggle(200);
            })
        }
    });
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        success:function(data){
            var html=template("commodity",data);
            $(".commodity").html(html)
        }
    })
})