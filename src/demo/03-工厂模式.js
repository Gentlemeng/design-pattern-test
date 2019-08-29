// 工厂模式不能创建特定类型对象
// 构造函数模式中的方法不是同一个方法
// var Person = function(){

// }
// let p1 = new Person();
// Person.prototype={
//     constructor:Person,
//     name:"aaa",
//     age:18,
//     sayName:function(){
//         console.log(this.name);
//     }
// }
// console.log(p1.name); ///undefined 
// let p2 = new Person();
// console.log(p2.name); // "aaa"
// 原型模式属性为引用类型时，修改一个实例的属性，其他所有属性都跟着改变
// 组合构造函数&原型模式 定义引用类型的一种默认方式
// 动态原型模式：在构造函数中判断某一个属性（方法）是否存在，若不存在，则在其原型对象中动态添加这个方法。注意不能使用对象字面量重写原型对象。
// 寄生构造函数模式 表面上看很像典型的构造函数，作用：仅仅封装创建对象的代码，最后再返回新创建的对象。 
// 稳妥构造函数模式

//继承
// 原型链 将父类的实例赋值给子类的原型，从而使子类通过原型链继承父类的属性和方法。问题：属性为引用类型问题。即使父类将属性定义在构造函数中，
//由于借助父类实例赋值给子类原型的方法实现继承，所以子类原型也拥有了它自己的一个属性（引用类型），子类实例也会共享这个属性。
// 借用构造函数 在子类构造函数中使用call/apply调用父类构造函数（解决了原型链继承值为引用类型的问题） 问题：1.构造函数问题；2.父类原型中定义的方法子类不可见
// 组合继承（原型链&借用构造函数）：原型链实现原型中属性和方法的继承；借用构造函数（call）解决值为引用类型问题；
function SuperType(){
    this.prop = true;
    this.colors = ["red","yellow"];
}
SuperType.prototype.getProp = function(){
    console.log(this.prop);
}






