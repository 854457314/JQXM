/**
 * Created by Administrator on 2016/9/28.
 */
$(function(){
    //=======================右边导航栏动画效果JS代码====================
    $(".tab").find("a").hover(function(){
        $(this).find("div").show();
        $(this).find("div").stop().animate({"left":"-160px"},500)
    },function(){
        $(this).find("div").css("left","-230px");
        $(this).find("div").hide();
    })

    var clicked=false;
    $(".tab_a4").click(function(){
        if(!clicked){
            $(".rightNav").css("right",0);
            clicked=true;
        }else {
            $(".rightNav").css("right","-268px");
            clicked=false;
        }
    })



    //========================回到顶部===========================
    $(".a6").click(function(){
        $('body,html').stop().animate({
            "scrollTop" :  0
        },500)
    })



    //=============================详情页面JS代码====================================

    //====================抢购倒计时JS代码===============================
    var date=$(".date");
    var date1=new Date("2019-01-22 00:00:00");
    var now=new Date();
    var timeInterval= date1.getTime()-now.getTime();
    var timeSec=timeInterval/1000;
    setInterval(function(){
        timeSec--;
        var day=parseInt(timeSec/24/60/60);//天
        var hour=parseInt(timeSec/60/60)%24;//时
        var min=parseInt(timeSec/60)%60;//分
        var sec=parseInt(timeSec%60);
        date.html("<span>仅剩<i>"+ day + "</i> 天<i>" + hour + "</i>时<i>" + min + "</i>分<i>"+sec+"</i>秒<span>");
    },1000);

    //=====================商品信息图片JS代码=======================
    $.get({
        "url": "../json/details.json",
        "success": function (json) {
            $.each(json[a], function (index, data) {
                $(".shopInfoTop").find("h2").html(data.h2);
                $(".shopPhoto").find("img").attr("src",data.img0);
                $(".price").find("strong").html(data.price);
                $(".left").find("img").eq(index).attr("src",data.img);
            })
        }
    })


    $(".shopBuy").find("a").click(function(){
        alert("已成功添加购物车");
        if(alert){
            location.reload()
        }
        var name="good";
        var goodlist= $.cookie(name) ? JSON.parse($.cookie(name)) : [];
        var goodPrice=$(".price strong").html();//获取商品价格
        var goodImg=$(".shopPhoto").find("img").attr("src");//获取商品图片的src
        var goodInfo=$(".shopInfoTop").find("h2").html();
        var isExit=false;//设置默认为不存在
        for(var i= 0;i<goodlist.length;i++){
            if(goodlist[i].img==goodImg){
                goodlist[i].num++;
                isExit=true;
            }
        }
        if(!isExit){
            var obj={
                price:goodPrice,
                img:goodImg,
                info:goodInfo,
                num:1
            };
            goodlist.push(obj);
        }
        $.cookie(name,JSON.stringify(goodlist),{"expires":30});

    })

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
            $(".shopCar").css("display","block");
            b+=obj.num;
            c+=obj.num*obj.price;
        })
        $(".count").html(b);
        $(".header .Back ul li span").html(b);
        $(".total").find("strong").html(b);
        $(".total").find("span").eq(0).html(Math.round(c*100)/100);
    }
})
