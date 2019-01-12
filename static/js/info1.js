/**
 * Created by sen on 2016/9/24.
 */

//=======================内容图片加载JS代码============================================
$(function () {
    var liNode = $(".content ul li");
    var a=location.search.replace("?", "");//获取跳转页面?后面的值
    $.get({
        "url": "../json/json.json",//获取主页图片的json
        "success": function (res) {
            callBack(res);
        }
    });
    function callBack(json) {
        $.each(json, function (index, data) {//遍历json里的对象
            var aNode1 = $('<a/>').attr({"href":"details.html?" + index,"target":"_blank"});
            $("<img/>").attr("src", data.img).appendTo(aNode1);
            aNode1.appendTo(liNode.eq(index));
            $('<a/>').attr({"href":"details.html?" + index,"target":"_blank"}).addClass("titlename").text(data.info).appendTo(liNode.eq(index));
            var h4Node = $("<h4/>");
            var emNode = $("<em>");
            var spanNode = $("<span/>");
            $("<b/>").html(data.node).appendTo(emNode);
            $("<i/>").html(data.price).appendTo(emNode);
            emNode.appendTo(h4Node);
            h4Node.appendTo(liNode.eq(index));
            $("<u/>").html(data.price2).appendTo(spanNode);
            $("<a/>").html(data.discount).appendTo(spanNode);
            $("<strong/>").html(data.info2).appendTo(spanNode);
            $("<img/>").attr("src", data.img2).addClass("fr").appendTo(h4Node);
            emNode.appendTo(h4Node);
            spanNode.appendTo(h4Node);
            h4Node.appendTo(liNode.eq(index));
            if ((index + 1) % 3 == 0) {
                liNode.eq(index).css("margin", 0)
            }
        })
    }


    var tcon_right = $(".tcon_right");
    $.get({
        "url": "../json/title.json",
        "success": function (res2) {
            //更新界面的回调函数
            callBack2(res2);
        }
    })
    function callBack2(json){
        $.each(json, function (index, data) {
            var divNode1=$("<div/>").addClass("tr_left");
            var divNode2=$("<div/>").addClass("tr_center");
            var divNode3=$("<div/>").addClass("tr_right");
            $("<p/>").html(data.info1).addClass("tl1").appendTo(divNode1);
            $("<p/>").html(data.info2).addClass("tl2").appendTo(divNode1);
            $("<a/>").html("<img src="+data.img1+" >").appendTo(divNode1);
            $("<p/>").html(data.info3).addClass("tl1").appendTo(divNode3);
            $("<p/>").html(data.info4).addClass("tl2").appendTo(divNode3);
            $("<a/>").html("<img src="+data.img2+" >").appendTo(divNode3);
            divNode1.appendTo(tcon_right.eq(index));
            divNode2.addClass("tr_center").appendTo(tcon_right.eq(index));
            divNode3.appendTo(tcon_right.eq(index));
        })
    }

    //=========================侧面导航栏（楼层）JS代码==================================
    var liNode3 = $(".leftNav li");//获取侧面导航所有的li
    liNode3.mouseenter(function(){
        if($(this).index()==liNode3.length-1){
                $('body,html').stop().animate({
                    "scrollTop" :  0//设置滚动条的高度为0
                },500)
        }else{
            $('body,html').stop().animate({
                "scrollTop" :  $(".contenter>div").eq( $(this).index() ).offset().top
            },500
            )
        }
    })

    //=========================顶部导航栏JS代码=======================
    $(".top p").click(function(){
        $(".top").css("display","none")
    })

    //===========================轮播图的JS代码===================================
    $.get({
        "url": "../json/lunbo.json",
        "success": function (res3) {
            //更新界面的回调函数
            for(var i=0;i<res3.length;i++){
                var obj=res3[i];
                var img=obj.img;//img
                //console.log(img);
                $("#list").append("<li><img src="+img+"/></li>");
            }
            lunbo();
        }
    })
    function lunbo(){
        var _list1=$("#list");
        var _li1=$("#list li");
        var size=$("#list li").length;
        var i= 0;//即将显示的图片的下标
        move();
        var timer=setInterval(function(){
            i++;
            move();
        },3000);
        function move(){
            $("#list").children('li').eq(i).animate({opacity:1}).siblings().animate({opacity:0});
            if(i>4){
                i=-1
            }
        }
    }



    $(".shopNav").find("li").last().hover(function(){
        $(".integra").css("display","block")
    },function(){
        $(".integra").css("display","none")
    })

    //=============================内容图片动画效果=========================
    $(".content ul li:gt(11)").hover(function(){
        $(this).find("img").eq(0).stop().animate({"width":"301px","height":"185px"});
    },function(){
        $(this).find("img").eq(0).stop().animate({"width":"301px","height":"185px"})
    })
    $(".contentOne .content li").hover(function(){
        $(this).find("img").eq(0).stop().animate({"width":"311px","height":"195px","left":"-5px","top":"-5px"},100,"linear");
    },function(){
        $(this).find("img").eq(0).stop().animate({"width":"301px","height":"185px","left":"0px","top":"0px"},100,"linear")
    })

    //=======================右边导航栏动画效果JS代码====================
    $(".tab").find("a").hover(function(){
        $(this).find("div").show();
        $(this).find("div").stop().animate({"left":"-205px","opacity":"0.4"},500,function(){
            $(this).animate({"left":"-160px","opacity":"1"},500)
        })
    },function(){
        $(this).find("div").css("left","-200px");
        $(this).find("div").hide();
        $(this).find("div").css("opacity","0");
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



    //========================回到顶部JS代码===========================
    $(".a6").click(function(){
        $('body,html').stop().animate({
            "scrollTop" :  0
        },500)
    })

    //=============================详情页面JS代码====================================

    //====================抢购倒计时JS代码===============================
    var date=$(".date");
    var date1=new Date("2016-10-18 10:10:10");
    var now=new Date();
    var timeInterval= date1.getTime()-now.getTime();
    var timeSec=timeInterval/1000;
    setInterval(function(){
        timeSec--;
        var day=parseInt(timeSec/24/60/60);//天
        var hour=parseInt(timeSec/60/60)%24;//时
        var min=parseInt(timeSec/60)%60;//分
        var sec=parseInt(timeSec%60);
        //var fenmiao=parseInt(timeSec%10);
        date.html("<span>仅剩<i>"+ day + "</i> 天<i>" + hour + "</i>时<i>" + min + "</i>分<i>"+sec+"</i>秒<span>");
    },1000);


   //=====================商品信息图片JS代码=======================
    $.get({
        "url": "../json/xiangqing.json",
        "success": function (json) {
            $.each(json[a], function (index, data) {
                $(".shopInfoTop").find("h2").html(data.h2);
                $(".shopPhoto").find("img").attr("src",data.img0);
                $(".bigImg").attr("src",data.img0);
                $(".price").find("strong").html(data.price);
                $(".left").find("img").eq(index).attr("src",data.img);
            })
        }
    })


    $(".shopBuy").find("a").click(function(){
        $(".shadow").css("display","block");//遮罩层显示
        $(".shopSize").css("display","block");//商品的尺寸大小等信息显示
        $(".close").click(function(){//点击X按钮关闭
            $(".shadow").css("display","none");//遮罩层消失
            $(".shopSize").css("display","none");//商品的尺寸大小等信息消失
        })
        var isClick=1;
        $("ul.color li").click(function(){//点击颜色框
            $(".select_result").css("display","block");//显示选择结果
            $(this).siblings().removeClass("current");
            $(this).addClass("current");
            isClick++;
            if(isClick==2){
                if($(".select_result span").length>0){
                    $(".select_result span").eq(0).before("<span/>");
                }else {
                    $(".select_result").append("<span/>");
                }
            }
            $(".select_result span").eq(0).html($(this).html())
        })
        var isClick1=1;
        $("ul.size li").click(function(){
            $(this).siblings().removeClass("current");
            $(this).addClass("current");
            isClick1++;
            if(isClick1==2){
                $(".select_result").css("display","block");
                $(".select_result").append("<span/>");
                $("<span>"+$(".quantity").val()+"</span>").appendTo($(".select_result"))
            }
            if($(".select_result span").length==2){
                $(".select_result span").eq(0).html($(this).html());
                $(".select_result span").eq(1).html($(".quantity").val())
            }else{
                $(".select_result span").eq(1).html($(this).html());
                $(".select_result span").eq(2).html($(".quantity").val())
            }
        })
        $(".add").click(function(){
            $(".quantity").val(parseInt($(".quantity").val())+1);
            if($(".select_result span").length==2){
                $(".select_result span").eq(1).html($(".quantity").val());
            }else {
                $(".select_result span").eq(2).html($(".quantity").val());
            }

        })
        $(".min").click(function(){
            if($(".quantity").val()>1){
                $(".quantity").val(parseInt($(".quantity").val())-1);
                if($(".select_result span").length==2){
                    $(".select_result span").eq(1).html($(".quantity").val());
                }else {
                    $(".select_result span").eq(2).html($(".quantity").val());
                }
            }
        })
        $(".addCar").click(function(){
           var t= $(this).parent().siblings(".shopInfo_container").find(".shopPhoto img");
            if($(".select_result span").length!=3){
                alert("请选择项目属性")
            }else {
                $(".shadow").css("display","none");
                $(".shopSize").css("display","none");
                var img= t.clone(true);
                img.css("border-radius","50%");
                var left= t.parent().offset().left;
                var top=t.parent().offset().top;
                var Moveleft=$(".tab_a4").offset().left;
                var Movetop=$(".tab_a4").offset().top+80;
                img.appendTo($("body")).css({
                    "position":"absolute", "top":top, "left":left
                }).animate({
                    "left":Moveleft, "top":Movetop,"width":0, "height":0, "opacity":0
                },1000,function(){
                    location.href="../html/shopcar.html";
                });
                $(".shopCar_null").css("display","none");
                $(".shop_table").css("display","block");

                var name="good";
                var goodlist= $.cookie(name) ? JSON.parse($.cookie(name)) : [];
                var goodPrice=Number($(".price strong").html());//获取商品价格
                var goodImg=$(".shopPhoto").find("img").attr("src");//获取商品图片的src
                var goodInfo=$(".shopInfoTop").find("h2").html();
                var goodColor=$(".select_result span").eq(0).html();
                var goodSize=$(".select_result span").eq(1).html();
                var isExit=false;//设置默认为不存在
                for(var i= 0;i<goodlist.length;i++){
                    if(goodlist[i].img==goodImg&&goodlist[i].color==goodColor&&goodlist[i].size==goodSize){
                        goodlist[i].num+=parseInt($(".quantity").val());
                        isExit=true;
                        console.log(1);
                    }
                }
                if(!isExit){
                    var obj={
                        price:goodPrice,
                        img:goodImg,
                        info:goodInfo,
                        num:Number($(".quantity").val()),
                        size:goodSize,
                        color:goodColor
                    };
                    goodlist.push(obj);
                }
                $.cookie(name,JSON.stringify(goodlist),{"expires":30});
            }
        })
    })
    goods();
    //=================放大镜=================================
    var _smallImg=$(".shopPhoto")//小图
    var _smallArea=$(".smallArea");//小区域
    var _bigArea=$(".bigArea");//大区域
    var _bigImg=$(".bigImg");//大图

    //计算小区域的宽高  width()  innerWidth()  outWidth()
    _smallArea.width(_bigArea.width()*_smallImg.width()/_bigImg.width());
    _smallArea.height(_bigArea.width()*_smallImg.height()/_bigImg.height());

    //放大倍数/放大系数
    var scale=_bigImg.width()/_smallImg.width();//4
    //添加mousemove事件
    _smallImg.mousemove(function(e){
        _smallArea.show();//显示小区域
        _bigArea.show();//显示大区域

        //clientX:可视区域的x值
        //pageX：距离窗口左边的x值（一般用pageX）
        var x= e.pageX-_smallImg.offset().left-_smallArea.width()/2;
        var y=e.pageY-_smallImg.offset().top-_smallArea.height()/2;

        //控制小区域的范围在小区域内
        if(x<0){//不超出左右边
            x=0
        }else if(x>=_smallImg.width()-_smallArea.width()){
            x=_smallImg.width()-_smallArea.width()
        }
        if(y<0){//不超出上下边
            y=0
        }else if(y>=_smallImg.height()-_smallArea.height()){
            y=_smallImg.height()-_smallArea.height()
        }

        //移动小区域
        _smallArea.css({left:x,top:y});
        //移动大图
        _bigImg.css({left:-x*scale,top:-y*scale})
    })

    //添加mouseleave事件
    _smallImg.mouseleave(function(){
        _smallArea.hide();//隐藏小区域
        _bigArea.hide();//隐藏大区域
    })
})

