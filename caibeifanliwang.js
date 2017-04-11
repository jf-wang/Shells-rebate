/**
 * Created by Administrator on 2016/12/14.
 */

/*框框图片阴影*/
$(".hot_mart li").shadow("20%");
$(".block1").children().eq(1).children().eq(1).children().shadow("30%");
$(".block2").children().eq(1).children().eq(1).children().shadow("30%");
$(".block3").children().eq(1).children().eq(1).children().shadow("30%");
$(".block4").children().eq(1).children().eq(1).children().shadow("30%");
$(".block5").children().eq(1).children().eq(1).children().shadow("30%");
$(".block6").children().eq(1).children().eq(1).children().shadow("30%");
$(".block7").children().eq(1).children().eq(1).children().shadow("30%");
$(".block8").children().eq(1).children().eq(1).children().shadow("30%");
$(".block9").children().eq(1).children().eq(1).children().shadow("30%");
$(".block10").children().eq(1).children().eq(1).children().shadow("30%");
/*------------------大块的切换-----------------------*/
//原生
//var mainGray=document.getElementsByClassName("hea_main_gray")[0];
//var menuIcon=mainGray.getElementsByTagName("ul")[0].children;
//    for(var i=1;i<menuIcon.length+1;i++) {
//        menuIcon[i-1].index=i;
//        menuIcon[i-1].onmouseover = function (){
//            this.parentNode.parentNode.parentNode.children[this.index].style.display = "block";
//
//        };
//        menuIcon[i-1].onmouseout = function (){
//            this.parentNode.parentNode.parentNode.children[this.index].style.display = "none";
//        };
//    }

$(".hea_main_gray>nav>ul>li").mouseenter(function(){
    var a=$(this).index()+1;
    $(".hea_main_gray").children().eq(a).css("display","block");
    $(this).children().eq(1).children().eq(0).css("backgroundPositionY","-155px");
    $(this).addClass("block_li");
}).mouseleave(function(){
    var a=$(this).index()+1;
    $(".hea_main_gray").children().eq(a).css("display","none");
    $(this).children().eq(1).children().eq(0).css("backgroundPositionY","-130px");
    $(this).removeClass("block_li");
});
var blockAll=$(".hea_main_gray").children().eq(0).nextAll();
blockAll.mouseenter(function(){
    $(this).css("display","block");
    $(this).parent().children().children().eq(0).children().eq($(this).index()-1).addClass("block_li0");
    $(this).parent().children().children().eq(0).children().eq($(this).index()-1).children().eq(1).children().eq(0).css("backgroundPositionY","-155px");
}).mouseleave(function(){
    $(this).css("display","none");
    $(this).parent().children().children().eq(0).children().eq($(this).index()-1).removeClass("block_li0");
    $(this).parent().children().children().eq(0).children().eq($(this).index()-1).children().eq(1).children().eq(0).css("backgroundPositionY","-130px");

});

/*-----------------轮播图--------------------*/
/*
x:点击元素
y:切换元素
z:显示页数元素
d:切换页面的宽度
e:需要切换的页数
*/
/*左右点击切换函数*/
function leftRight(x,y,z,e,d){
    var j=0;
    $(x).eq(0).click(function(){
        if(j==e){
            j=0;
            $(y).animate({left:-d},0);
        }
        $(y).animate({left:"-="+d+"px"},300);
        j++;
        $(z).html(j);
    });
    $(x).eq(1).click(function(){
        if(j==0){
            j=e;
            $(y).animate({left:-d*(e+1)},0);
        }
        $(y).animate({left:"+="+d+"px"},300);
        j--;
        $(z).html(j+1);
    });
}
leftRight(".hot_event>p>i",".hot_event_inside",".hot_event>p>span",4,212);
leftRight(".discount>p>i",".discount_inside",".discount>p>span",3,212);

/*自动轮播*/
var f=0;
var timer;
function go(){
    timer=setInterval(function () {
        if (f == 3) {
            $(".pic_go li").eq(f).removeClass("on");
            f = 0;
            $(".pic_go_inside").animate({"left": 0}, 500);
            $(".pic_go li").eq(f).addClass("on");
            return;
        }
        f++;
        $(".pic_go_inside").animate({"left": -665 * f + "px"}, 600);
        $(".pic_go li").eq(f - 1).removeClass();
        $(".pic_go li").eq(f).addClass("on");
    }, 3000);
}
go();
/*轮播图，鼠标放到块上切换到指定页面*/
$(".pic_go li").mouseenter(function(){
    clearInterval(timer);
    $(".pic_go li").each(function(index,ele){
        $(".pic_go li").removeClass();
    });
    $(".pic_go_inside").stop(true,true);
    f=$(this).index();
    $(".pic_go_inside").animate({"left": -665 * f + "px"}, 300);
    $(".pic_go li").eq(f).addClass("on");
}).mouseleave(function(){
    go();
});








