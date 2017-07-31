/**
 * Created by Administrator on 2017/7/16.
 */

//装饰器函数，为睡醒添加属性，包括函数属性。
var Car=function(){
   var obj={loc: loc};
    obj.move=function(){
        obj.loc++;
    };
    return obj;
    };
var Van =function(loc){
    var obj =Car(loc);
    obj.grab =function(){/**/};
    return obj;
};
var Cop=function(loc){
    var obj=Car(loc);
    obj.call=function(){/**/};
    return obj;
};

