/**
 * Created by Administrator on 2017/7/16.
 */

//װ����������Ϊ˯��������ԣ������������ԡ�
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

