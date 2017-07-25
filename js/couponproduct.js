/**
 * Created by Maxz on 2017/7/24.
 */
$(function(){
    var couponid = GetQueryString("couponid");
    var couponTitle = GetQueryString("couponTitle");
    $(".header>h2").html(decodeURI(couponTitle)+"优惠券");
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcouponproduct?couponid="+couponid,
        success:function(data){
            console.log(data);
            var html = template("productInfoC",data);
            $(".productInfo").html(html)
        }
    });


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