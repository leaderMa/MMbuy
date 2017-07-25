/**
 * Created by Maxz on 2017/7/19.
 */
    $(function(){
        var  id =document.location.search;

        var productid = id.slice(1).split("=")[1]
        //console.log(productid);
        $.ajax({
            url:"http://127.0.0.1:3000/api/getproduct?productid="+productid,
            success:function(data){
                var html =template("productHeader",data)
                $(".productHeader").html(html)
                var htmlM =data.result[0].bjShop;
                $(".middleMiddle").append(htmlM)

            }

        })
        $.ajax({
            url:"http://127.0.0.1:3000/api/getproductcom?productid="+productid,
            success:function(data){
                //console.log(data);
                var html = template("productFootComment",data)
                $(".productFoot>ul").html(html);
            }
        });
    })