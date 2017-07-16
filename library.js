/**
 * Created by Administrator on 2017/7/16.
 */

//装饰器函数，为睡醒添加属性，包括函数属性。
var carlike=function(obj,loc){
    obj.loc=loc;
    obj.move=function(){
        this.loc++;
    };
    return obj;
};