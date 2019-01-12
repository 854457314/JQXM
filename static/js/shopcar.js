/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    $(".shopCar_null").css("display","none");
    $(".shop_table").css("display","block");
    $(".totalPrice").css("display","block")
    var e=0;
    var b=0;
    var d=0;
    var f=0;
    var a=0;
    var c=0;
var aGood=JSON.parse($.cookie("good"));
    if(aGood.length>0){
    $.each(aGood,function(index,obj){
        var imgNode=$("<img>");
        b+=obj.num;
        e+=obj.num*obj.price;
        var trNode=$("<tr/>");
        var td3Node=$("<td/>");
        var td0Node=$("<td/>");
        var spanNode=$("<span/>").addClass("info").html(obj.info);
        trNode.appendTo($("tbody"));
        $("<input>").attr({"type":"checkbox","checked":"checked"}).appendTo(td0Node);
        td0Node.addClass("td0").appendTo(trNode);
        $("<td/>").addClass("td1").append(imgNode.attr("src",obj.img)).appendTo(trNode);
        $("<span>"+obj.color+"@"+obj.size+"</span>").addClass("info_R").appendTo(spanNode);
        $("<td/>").addClass("td2").append(spanNode).appendTo(trNode);
        $("<input>").attr("type","button").addClass("min").val("-").appendTo(td3Node);
        $("<input>").attr("type","text").addClass("quantity").val(obj.num).appendTo(td3Node);
        $("<input>").attr("type","button").addClass("add").val("+").appendTo(td3Node);
        td3Node.addClass("td3").appendTo(trNode);
        $("<td/>").addClass("td4").html("￥<span>"+obj.price+"</span>").appendTo(trNode);
        $("<td/>").html("￥0").appendTo(trNode);
        $("<td/>").addClass("td5").html("￥<span>"+(obj.num*obj.price).toFixed(2)+"</span>").appendTo(trNode);
        $("<td/>").addClass("td6").html("删除").appendTo(trNode);
    })
    $(".totalPrice i").eq(0).html(b);
    $(".totalPrice i").eq(1).html(e.toFixed(2));
    $(".add").click(function(){
        var index1=$(this).parent().parent().index();
        $(this).siblings(".quantity").val(parseInt($(this).siblings(".quantity").val())+1);
        aGood[index1].num=parseInt($(this).siblings(".quantity").val());
        $.cookie("good",JSON.stringify(aGood),{"expires":30});
        var td3=$(this).parent().siblings(".td4").find("span");
        var td5=$(this).parent().siblings(".td5").find("span");
        var n=Number(td3.html()*$(this).siblings(".quantity").val()).toFixed(2);
        td5.html(n);
        all();
        goods();
    })
    $(".min").click(function(){
        var index1=$(this).parent().parent().index();
        if($(this).siblings(".quantity").val()>1){
            $(this).siblings(".quantity").val(parseInt($(this).siblings(".quantity").val())-1);
            aGood[index1].num=parseInt($(this).siblings(".quantity").val());
            $.cookie("good",JSON.stringify(aGood),{"expires":30});
            var td3=$(this).parent().siblings(".td4").find("span");
            var td5=$(this).parent().siblings(".td5").find("span");
            var n=Number(td3.html()*$(this).siblings(".quantity").val()).toFixed(2);
            td5.html(n);
            //b-=1;
            all();
        }
        goods();
    })
}
    $(".td6").click(function(){
        var index=$(this).parent().index();
        $(this).parent().remove();
        a1();
        aGood.splice(index, 1);
        $.cookie("good",JSON.stringify(aGood),{"expires":30});
        //location.reload();
        if($("tbody tr").length==0){
            $(".shopCar_null").css("display","block");
            $(".shop_table").css("display","none");
            $(".totalPrice").css("display","none");
            $(".buy").css("display","none")
        }
        all();
        goods();
    })
    if($("tbody tr").length==0){
        $(".shopCar_null").css("display","block");
        $(".shop_table").css("display","none");
        $(".totalPrice").css("display","none");
        $(".buy").css("display","none")
    }
    $(".shopDelete input").eq(0).click(function(){
        var isCheck=$(this).prop("checked"); //第一个checkbox的选中状态
        $(".td0 input").prop("checked",$(this).prop("checked"));
        all();
    })


    $(".shopDelete input").eq(1).click(function(){
        $(".td0 input").each(function(){
            if($(this).is(':checked')){
                var index1=$(this).parent().parent().index();
                $(this).parent().parent().remove();
                aGood.splice(index1, 1);
                $.cookie("good",JSON.stringify(aGood),{"expires":30});
                //location.reload();
                if($("tbody tr").length==0){
                    $(".shopCar_null").css("display","block");
                    $(".shop_table").css("display","none");
                    $(".totalPrice").css("display","none");
                    $(".buy").css("display","none")
                }
                //$(".quantity").each(function(){
                //    f+=Number($(this).val());
                //})
                //$(".totalPrice i").eq(0).html(f);
                //f=0
                //$(".td5 span").each(function(index){
                //    d+=Number($(this).html());
                //})
                //$(".totalPrice i").eq(1).html(d.toFixed(2));
                //d=0
                all();
                goods();
            }
        })
    })

    $(".td0 input").click(function(){
        var checkLen=$("tbody tr").length;
        var checkedLen=$("tbody :checkbox:checked").length;
        if(checkedLen!=checkLen){
            $(".shopDelete input").eq(0).removeAttr("checked")
        }else{
            $(".shopDelete input").eq(0).prop("checked",checkLen==checkedLen)
        }
        all();
    })
    function a1() {
        $(".td0 input").each(function () {
            //被选中的数量等于总数量则表示全选
            var checkLen = $("tbody tr").length;
            var checkedLen = $("tbody :checkbox:checked").length;
            if (checkLen != checkedLen) {
                $(".shopDelete input").eq(0).removeAttr("checked")
            } else {
                $(".shopDelete input").eq(0).attr("checked")
            }
        })
    }
    all();
    //遍历所有的价格和商品
    function all(){
        //遍历商品

        $(".quantity").each(function(){
            if($(this).parent().parent().find(".td0").find("input").is(':checked')){
                console.log("a");
                f+=Number($(this).val());
            }
        })
        $(".totalPrice i").eq(0).html(f);
        f=0;

        //遍历价格
        $(".td5 span").each(function(){
            if($(this).parent().parent().find(".td0").find("input").is(':checked')){
                d+=Number($(this).html());
            }
        })
        $(".totalPrice i").eq(1).html(d.toFixed(2));
        d=0;

    }
})