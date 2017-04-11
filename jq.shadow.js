/**
 * Created by Administrator on 2016/11/25.
 */
//!function () {}()

(function ($) {
    $.fn.shadow = function (ovr) {
        var shadow=$('<div class="cs">'+'<span>最高返</span><p>'+ovr+'</p></div>');
        var height=$(this).height()+'px';
        var width=$(this).width()+'px';
        var time=200;

        //父级设置position模式
        if($(this).css('position')=='static')
            $(this).css('position','relative');
            //蒙板样式
        //console.log($(this));
        //$(shadow).find('h3').removeAttr('style');
        //$(shadow).find('p').removeAttr('style');
        $(shadow).find('p').css({
            'display':'block',
            'font-weight':'bold',
            'padding':'0',
            'width':'100%',
            'line-height':'12px',
            'border-style':'none',
            'position':'absolute',
            'top':'30px',
            'color':'#ff4e00',
            'background':'none',
            'margin':0
        });
        $(shadow).find('span').css({
            'position':'absolute',
            'top':'10px',
            'left':'0',
            'width':'100%',
            'border-style':'none',
            'font-size':'14px',
            'color':'white',
            'display':'block',
            'line-height':'12px'
        });
        $(shadow).css({
            'text-align':'center',
            'padding':0,
            'display':'none',
            'position':'absolute',
            'background-color':'rgba(0,0,0,.5)',
            //'background-color':'black',
            'z-index':'100',
            'top':0,
            'left':0,
            'height':0,
            'width':0
        });
        $(this).append(shadow);
            //鼠标方向检测
        function directioncheck(e,obj){
            //边框的距离
            var x;
            var y;
            //方向字符串
            var xstring;
            var ystring;
            var left= e.offsetX;
            var right=obj.width()-e.offsetX;
            var top=e.offsetY;
            var bottom=obj.height()-e.offsetY;
            if(left<right){
                xstring='left';
                x=left;
            }
            else {
                xstring='right';
                x=right;
            }
            if(top<bottom){
                y=top;
                ystring='top';
            }
            else{
                y=bottom;
                ystring='bottom';
            }
            if(x<y)
                a=xstring;
            else
                a=ystring;

            return a;
        }
        //$(this).parentNode().mouseleave(function () {
        //    //$(this).stop();
        //});
        //进入样式和动画
        $(this).mouseenter(function(e){
            $(this).find('.cs').css('display','block');
            switch (directioncheck(e,$(this))){
                case 'left':$(this).find('.cs').css({
                        'top':0,
                        'left':0,

                        'height':height,
                        'width':0
                    });
                    break;
                case 'right':$(this).find('.cs').css({

                        'top':0,
                        'left':width,
                        'height':height,
                        'width':0
                    });
                    break;
                case 'top':$(this).find('.cs').css({

                    'top':0,
                    'left':0,
                    'height':0,
                    'width':width
                });
                    break;
                case 'bottom':$(this).find('.cs').css({

                    'top':height,
                    'left':0,
                    'height':0,
                    'width':width
                });
            }

            $(this).find('.cs').animate({
                'top':0,
                'left':0,
                'height':height,
                'width':width
            },time);
        });
        //离开样式和动画
        $(this).mouseleave(function(e){
            $(this).find('.cs').stop();
            switch (directioncheck(e,$(this))){
                case 'left':$(this).find('.cs').animate({
                    'top':0,
                    'left':0,
                    'height':height,
                    'width':0
                },time,function(){
                    $(this).css('display','none');
                });
                    break;
                case 'right':$(this).find('.cs').animate({
                    'top':0,
                    'left':width,
                    'height':height,
                    'width':0
                },time,function(){
                    $(this).css('display','none');
                });
                    break;
                case 'top':$(this).find('.cs').animate({
                    'top':0,
                    'left':0,
                    'height':0,
                    'width':width
                },time,function(){
                    $(this).css('display','none');
                });
                    break;
                case 'bottom':

                    $(this).find('.cs').animate({
                    'top':height,
                    'left':0,
                    'height':0,
                    'width':width
                },time,function(){
                        $(this).css('display','none');
                });
            }
        });
    };
})(jQuery);
