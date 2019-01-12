/**
 * Created by Administrator on 2016/10/12.
 */
function goods(){
    $(".shopCar li").remove();
    var aGood=JSON.parse($.cookie("good"));
    if(aGood.length>0){
        var b=0;
        var c=0;
        $.each(aGood,function(index,obj){
            var liNode=$("<li/>");
            var imgNode=$("<img>");
            liNode.appendTo($(".shopcar").find("ul"));
            imgNode.attr("src",obj.img).appendTo(liNode);
            $("<p><span>"+obj.info+"</span>￥ "+obj.price+" X "+obj.num+"</p>").appendTo(liNode);
            $(".rightNavRight").css("background","none");
            $(".shopcar").css("display","block");
            b+=obj.num;
            c+=obj.num*obj.price;
        })
        $(".count").html(b);
        $(".header .Back ul li span").html(b);
        $(".total").find("strong").html(b);
        $(".total span").html(c.toFixed(2));
    }
    if($(".shopcar li").length==0){
        $(".count").html(0);
        $(".header .Back ul li span").html(0);
        $(".shopCar").css("display","none");
        $(".rightNavRight").css("background","url('../images/kcart_04.gif/') no-repeat 45% center")
    }
}