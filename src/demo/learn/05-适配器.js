//生活例子：电源转换器
//场景：封装旧接口、vue.computed
    // 封装旧接口，防止全局替换出现一些意想不到的问题
        //将旧代码：$.ajax({...}) 修改成自己手写的ajax方法：ajax({...}).done(function(){})
        // var $={
        //     ajax:function(options){
        //         return ajax(options)
        //     }
        // }
    // vue.computed  在computed方法里，对data中的变量进行处理
// 设计原则验证
    // 将旧接口和使用这进行分离（中间加个适配器）
    // 符合开放封闭原则