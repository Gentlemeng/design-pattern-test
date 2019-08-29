// 1.原型模式 clone自己，生成一个新对象
let prototype ={
    getName:function(){
        return this.first+''+this.last;
    },
    say:function(){
        alert("hello")
    }
}
let x = Object.create(prototype);
x.first = 'a';
x.last = 'b';
alert(x.getName());
x.say();

let z = Object.create(prototype);
z.first = 'c';
z.last = 'd';
alert(z.getName());
z.say();

// 2.桥接模式

// 3.组合模式  生成树形结构，标识整体部分关系，都具有一只操作方式

// 4.享元模式 共享内存（考虑内存，而非效率） 相同数据，共享使用 
    // 事件绑定到父节点上 
// 5. 策略模式 不同策略分开处理 避免出现大量if...else or switch... case
    // 普通用户 高级用户 VIP用户
// 6. 命令模式
    // 将军 小号手 士兵
    // 富文本编辑器
// 7. 备忘录模式  撤销操作