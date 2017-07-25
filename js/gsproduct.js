$(function () {
    var a = GetQueryString("shopid")
    var b = GetQueryString("areaid")
    var shopid = a || 0
    var areaid = b || 0
    $.ajax({
        url: "http://127.0.0.1:3000/api/getgsshop",
        success: function (data) {
            //console.log(data);
            var html = template("navHeader1", data);
            $(".navHeader1").html(html)
        }
    });
    $.ajax({
        url: "http://127.0.0.1:3000/api/getgsshoparea",
        success: function (data) {
            //console.log(data);
            var html = template("navHeader2", data);
            $(".navHeader2").html(html)
        }
    });
    $.ajax({
        url: "http://127.0.0.1:3000/api/getgsproduct",
        data: {
            shopid: shopid,
            areaid: areaid
        },
        success: function (data) {
            //console.log(data);
            var html = template("productInfoC", data);
            $(".productInfo").html(html)
            $(".navHeader1>select").change(function (e) {
                shopid = $(e.target).val();
                $.ajax({
                    url: "http://127.0.0.1:3000/api/getgsproduct",
                    data: {
                        shopid: shopid,
                        areaid: areaid
                    },
                    success: function (data) {
                        //console.log(data);
                        var html = template("productInfoC", data);
                        $(".productInfo").html(html)
                    }
                });
            });
            $(".navHeader2>select").change(function (e) {
                areaid = $(e.target).val();
                $.ajax({
                    url: "http://127.0.0.1:3000/api/getgsproduct",
                    data: {
                        shopid: shopid,
                        areaid: areaid
                    },
                    success: function (data) {
                        //console.log(data);
                        var html = template("productInfoC", data);
                        $(".productInfo").html(html)
                    }
                });
            });
        }
    });

    //$(document).on("change",$(".navHeader1>select"), function () {
    //    console.log(1);
    //});

    //获取参数
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }

    var sname = GetQueryString("name");
    if (sname != null) {
        var sname_ = decodeURIComponent(sname);
        alert(sname_);
    }
})