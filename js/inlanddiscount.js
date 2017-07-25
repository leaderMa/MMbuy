/**
 * Created by Maxz on 2017/7/22.
 */
$(function () {
    var i = 0,
        resultLength = 0;
    $.ajax({
        url: "http://127.0.0.1:3000/api/getinlanddiscount",
        success: function (data) {
            var newdata = {
                "result": []
            };
            for (i = 0; i < 6; i++) {
                newdata.result.push(data.result[i])
            }
            var html = template('productContent', newdata);
            $(".product").html(html);
            resultLength = data.result.length;

        }
    });
    var height = $(".product").height() - $(window).height();
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= height && scrollTop != 0) {
            height = 99999;
            $.ajax({
                url: "http://127.0.0.1:3000/api/getinlanddiscount",
                success: function (data) {
                    var newdata = {
                        result: []
                    };
                    if (i+6 >= resultLength) {
                        var a = data.result.slice(data.result.length - resultLength % 6);
                        newdata.result = newdata.result.concat(a);
                        var html = template("productContent", newdata);
                        $(".product").append(html)
                        return;
                    } else {
                        for (var j = i; j < 6 + i; j++) {
                            newdata.result.push(data.result[j])
                        }
                    }
                    var html = template("productContent", newdata);
                    $(".product").append(html)
                    height = $(".product").height() - $(window).height();
                    i = j;
                }
            });
        }
    });
})
//$(function () {
//    var i = 0,
//        resultLength = 0;
//    $.ajax({
//        url: "http://127.0.0.1:3000/api/getinlanddiscount",
//        success: function (data) {
//            var newdata = {
//                "result": []
//            };
//            for (i = 0; i < 4; i++) {
//                newdata.result.push(data.result[i])
//            }
//            var html = template('productContent', newdata);
//            $(".productInfo").html(html);
//            resultLength = data.result.length;
//
//        }
//    });
//    var height = $(".productInfo").height() - $(window).height();
//    $(window).scroll(function () {
//        scrollTop = $(window).scrollTop();
//        console.log(height);
//        if (scrollTop >= height && scrollTop != 0) {
//            height = 999999;
//            $.ajax({
//                url: "http://127.0.0.1:3000/api/getinlanddiscount",
//                success: function (data) {
//                    var newdata = {
//                        result: []
//                    };
//                    if (i >= resultLength) {
//                        return;
//                    }
//                    for (var j = i; j < i + 4; j++) {
//                        newdata.result.push(data.result[j]);
//                    }
//                    var html = template("productContent", newdata);
//                    $(".productInfo").append(html)
//                    height = $(".productInfo").height() - $(window).height();
//                    i = j;
//                }
//            });
//        }
//    });
//})