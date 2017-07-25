/**
 * Created by Maxz on 2017/7/24.
 */
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcoupon",
        success:function(data){
            console.log(data);
            var html =template("productInfoC",data);
            $(".productInfo").html(html)
        }
    });
})