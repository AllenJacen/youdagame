/**
 * Created by Administrator on 2017/7/16.
 */

//װ����������Ϊ˯��������ԣ������������ԡ�
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

