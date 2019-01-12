/**
 * Created by sen on 2016/10/6.
 */
$(function(){
    $("input").focus(function(){//所有Input获取焦点时，外边框和提示字去掉
        $(this).css("outline","none");
        $(this).attr("placeholder","");
    })
    $(".input1").blur(function(){//input1失去焦点时显示提示字
        $(this).attr("placeholder","请输入用户名或邮箱登录");
    })
    $(".input2").blur(function(){//input2失去焦点时显示提示字
        $(this).attr("placeholder","请输入密码");
    })
    $(".btn").click(function(){//点击登录
        $(this).css("outline","none");//外边框去掉
        //获取cookie中注册过的所有用户
        var users= $.cookie("users");
        if(users){
            users=JSON.parse(users)
        }
        //遍历查找是否有匹配的用户
        var isExist=false;//表示是否存在该用户
        for(var i=0;i<users.length;i++){
            if(($(".input1").val()==users[i].name&&$(".input2").val()==users[i].pwd)||($(".input1").val()==users[i].qq&&$(".input2").val()==users[i].pwd)){
                $(".bg p").css("display","none");
                location.href="../html/index.html";
                isExist=true;//表示存在该用户
            }
        }
        if(!isExist){
            $(".bg p").css("display","block")
        }
        if($(".checkbox").is(':checked')) {//判断是否选中免登陆
            $.cookie("username", $(".input1").val(), {expires: 30, path: "/"});
        }
    })
    var oldUsername =$.cookie("username");
    if(oldUsername){//如果本地cookie中存在，则放入input中
        $(".input1").val(oldUsername);
    }
    //location.href="1.html?1"
    //location.search
})