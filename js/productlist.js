/**
 * Created by Maxz on 2017/7/18.
 */
$(function () {
    $("#dLabel").on("click", function () {
        //console.log(1);
        $(".centent>ul>li").slideToggle(200)
    })
    //(function(){
    //    var id=document.location.search;
    //console.log(id);
    //var list=id.slice(1).split("&");
    //var categoryid =list[0].split("=")[1]||0;
    //var pageid=list[1].split("=")[1]||1;

    var categoryid = getQueryString("categoryid") || 0;
    var pageid = getQueryString("pageid") || 1;
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorybyid?categoryid="+categoryid,
        success:function(data){

            var html =template("txt",data);
            console.log(html);
            $(".nav").html(html)
        }
    })
    $.ajax({
        url: "http://127.0.0.1:3000/api/getproductlist",
        data: {
            categoryid: categoryid
        },
        success: function (data) {
            console.log(data);
            var html = template("productTxt", data);
            $(".product").html(html);
            var pages = Math.ceil(data.totalCount / data.pagesize);
            var li = "";
            for (var i = 0; i < pages; i++) {
                li += "<li index='" + (i + 1) + " '>第" + (i + 1) + "/" + pages + "页</li>"
            }
            //console.log(li);
            $(".centent>ul").html(li)
            var ye = "第" + pageid + "/" + pages + "页";
            $("#dLabel").html(ye);
            $(".page-next").on("click", function () {
                if (pageid < pages) {
                    pageid++;
                } else {
                    return;
                }
                $.ajax({
                    url: "http://127.0.0.1:3000/api/getproductlist",
                    data: {
                        categoryid: categoryid,
                        pageid: pageid,
                    },
                    success: function (data) {
                        var html = template("productTxt", data);
                        $(".product").html(html);
                        var pages = Math.ceil(data.totalCount / data.pagesize);
                        var ye = "第" + pageid + "/" + pages + "页";
                        $("#dLabel").html(ye);
                    }
                });
            })
            $(".page-prev").on("click", function () {
                if (pageid > 1) {
                    pageid--;
                } else {
                    return;
                }
                $.ajax({
                    url: "http://127.0.0.1:3000/api/getproductlist",
                    data: {
                        categoryid: categoryid,
                        pageid: pageid,
                    },
                    success: function (data) {
                        var html = template("productTxt", data);
                        $(".product").html(html);
                        var pages = Math.ceil(data.totalCount / data.pagesize);
                        var ye = "第" + pageid + "/" + pages + "页";
                        $("#dLabel").html(ye);
                    }
                });
            })
            $(".centent>ul>li").on("click", function (e) {
                //console.log(e);
                var pageid = e.target.getAttribute("index");
                $.ajax({
                    url: "http://127.0.0.1:3000/api/getproductlist",
                    data: {
                        categoryid: categoryid,
                        pageid: pageid,
                    },
                    success: function (data) {
                        //console.log(data);
                        var html = template("productTxt", data);
                        console.log($(".product"));
                        $(".product").html(html);
                        console.log(13);
                        $(".centent>ul>li").slideToggle(200);
                        var pages = Math.ceil(data.totalCount / data.pagesize);
                        var ye = "第" + pageid + "/" + pages + "页";
                        $("#dLabel").html(ye);
                    }
                })
            })
        }
    })



    //是用来获取url中的参数的值的 根据参数名获取参数值
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
})