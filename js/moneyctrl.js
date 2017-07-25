/**
 * Created by Maxz on 2017/7/21.
 */
$(function () {

    //var pageid = getQueryString("pageid") || 1;
    var pageid = document.location.search.slice("?").split("=")[1] || 1;
    $.ajax({
        url: "http://127.0.0.1:3000/api/getmoneyctrl?pageid=" + pageid,
        success: function (data) {
            var html = template("commodity", data);
            $(".commodity").html(html)
            var pages = Math.floor(data.totalCount / data.pagesize);
            $("#dLabel").html("第" + pageid + "/" + pages + "页");
            var pageli ="";
            for(var i=0; i<pages;i++){
                var url = "moneyctrl.html?pageid="+(i+1);
                pageli += "<li><a href="+url+">第"+(i+1)+"/"+pages+"页</a></li>"
                $(".centent>ul").html(pageli);
            }
            $("#dLabel").on("click",function(){
                console.log($(".cententli"));
                $(".centent li").slideToggle(200);
            })
            $('.page-prev').click(function () {
                if (pageid <= 1) {
                    alert("已经是第一页")
                    return;
                } else {
                    $('.page-prev').attr("href", "moneyctrl.html?pageid=" + ((pageid) - 1));
                }
            });
            $('.page-next').click(function () {
                if (pageid >= pages) {
                    alert("已经是最后页")
                    return;
                } else {
                    $('.page-next').attr("href", "moneyctrl.html?pageid=" + (parseInt(pageid) + 1));
                }
            });

        }
    })
    //$(".page-next").on("click",function(){
    //    console.log(1);
    //    var pageidR ="2"
    //    $.ajax({
    //        url:"http://127.0.0.1:3000/api/getmoneyctrl?pageid="+pageidR,
    //        success:function(data){
    //            console.log(data);
    //            var html= template("commodity",data);
    //            $(".commodity").html(html)
    //            var pages = Math.ceil(data.totalCount/data.pagesize);
    //            $("#dLabel").html("第"+pageidR+"/"+pages+"页");
    //        }
    //    })
    //
    //})
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

})
