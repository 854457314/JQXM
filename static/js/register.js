/**
 * Created by sen on 2016/10/6.
 */
$(function(){
    var ok1=false;
    var ok2=false;
    var ok3=false;
    var ok4=false;
    $(".bg input").focus(function(){
        $(this).attr("placeholder","");
        $(this).css("outline","none");
        //if($(this).val().length>0){
        //    $(this).parent().find("span").css("display","inline-block");
        //}
    })
    $(".bg input").blur(function(){
        if($(this).val().length==0){
            $(this).parent().find("span").removeClass("true");
            $(this).parent().find("span").css("display","inline-block");
            $(this).parent().find("span").addClass("false")
        }
    })
    $(".input1").blur(function(){
        var reg=/^\w{1,}@\w+\.\w+$/;
        if($(this).val().length==0){
            $(this).parent().find("p").html("请输入邮箱");
        }else if(!reg.test($(".input1").val())){
            $(this).parent().find("p").html("邮箱不合法");
            $(this).parent().find("span").css("display","inline-block");
            $(this).parent().find("span").removeClass("true");
            $(this).parent().find("span").addClass("false");
        }else{
            var users= $.cookie("users")?JSON.parse($.cookie("users")):[];
            var isExit=false;//设置默认为不存在
            for(var i= 0;i<users.length;i++){
                if($(".input1").val()==users[i].qq){
                    $(this).parent().find("p").html("该邮箱已经存在，不能注册");
                    $(this).parent().find("span").removeClass("true");
                    isExit=true;
                    return;
                }
            }
            if(!isExit){
                $(this).parent().find("p").html("");
                $(this).parent().find("span").addClass("true");
                ok1=true;
            }

        }
    })
    $(".input2").blur(function(){
        if($(this).val().length==0){
            $(this).parent().find("p").html("请输入用户名");
        }else if(!($(this).val().length>=4&&$(this).val().length<=16)){
            $(this).parent().find("p").html("用户名为4-16个字符");
            $(this).parent().find("span").css("display","inline-block");
            $(this).parent().find("span").removeClass("true");
            $(this).parent().find("span").addClass("false");
        }else{
            var users= $.cookie("users")?JSON.parse($.cookie("users")):[];
            var isExit=false;//设置默认为不存在
            for(var i= 0;i<users.length;i++){
                if($(".input2").val()==users[i].name){
                    $(this).parent().find("p").html("该用户名已经存在，不能注册");
                    $(this).parent().find("span").removeClass("true");
                    isExit=true;
                    return;
                }
            }
            if(!isExit){
                $(this).parent().find("p").html("");
                $(this).parent().find("span").addClass("true");
                ok2=true;
            }
        }
    })
    $(".input3").blur(function(){
        if($(this).val().length==0){
            $(this).parent().find("p").html("请输入密码");
        }else if($(this).val().length<6){
            $(this).parent().find("p").html("密码最少为6个字符以上");
            $(this).parent().find("span").removeClass("true");
            $(this).parent().find("span").css("display","inline-block");
            $(this).parent().find("span").addClass("false");
        }else{
            $(this).parent().find("p").html("");
            $(this).parent().find("span").addClass("true");
            ok3=true;
        }
    })
    $(".input4").blur(function(){
        if($(".input3").val().length==0){
            $(this).parent().find("p").html("请先输入密码");
        }else if($(this).val()!=$(".input3").val()){
            $(this).parent().find("p").html("密码不一致，请确认");
            $(this).parent().find("span").removeClass("true");
            $(this).parent().find("span").css("display","inline-block");
            $(this).parent().find("span").addClass("false")
        }else{
            $(this).parent().find("p").html("");
            $(this).parent().find("span").addClass("true");
            ok4=true;
        }
    })
    $(".btn").click(function(){
        if(ok1&&ok2&&ok3&&ok4){
            //先获取之前保存在cookie中的用户
            var users= $.cookie("users")?JSON.parse($.cookie("users")):[];
            //需要注册的用户（需要保存到cookie中的用户）

            //遍历users数组，判断是否存在该用户，如果存在则不能注册
            var isExit=false;//设置默认为不存在
            for(var i= 0;i<users.length;i++){
                if($(".input2").val()==users[i].name){
                    alert("该用户名已经存在，不能注册");
                    isExit=true;
                    return;
                }
            }
            if(!isExit){
                var user={
                    qq:$(".input1").val(),//邮箱
                    name:$(".input2").val(),//用户名
                    pwd:$(".input3").val()//密码
                };
                users.push(user);//添加新用户
            }

            //保存到cookie中
            $.cookie("users",JSON.stringify(users),{expires:30,path:"/"});
            console.log($.cookie("users"));
            alert("注册成功,请登录");
            if(alert){
                location.href="../index"
            }
        }else{
            alert("信息有误，注册失败")
        }
    })
})