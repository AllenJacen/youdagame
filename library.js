/**
 * Created by Administrator on 2017/7/16.
 */

//װ����������Ϊ˯��������ԣ������������ԡ�
var carlike=function(obj,loc){
    obj.loc=loc;
    obj.move=function(){
        this.loc++;
    };
    return obj;
};