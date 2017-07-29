/**
 * Created by Administrator on 2017/7/16.
 */

//装饰器函数，为睡醒添加属性，包括函数属性。
var car=function(loc){
    var obj={loc:loc};
    extend(obj,methods);
    return obj;
    };
var methods = {
    move : function(){
        this.loc++;
    },
    on : function(){},
    off : function(){}
};

