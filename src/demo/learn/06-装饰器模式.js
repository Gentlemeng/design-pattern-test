//为对象添加新功能
//不改变其原有的结构和功能
//生活例子：手机壳

//代码演示
// class Circle{
//     draw(){
//         console.log("画一个圆")
//     }
// }

// class Decorator{
//     constructor(circle){
//         this.circle = circle
//     }
//     draw(){
//         this.circle.draw()
//         this.setRedBorder()
//     }
//     setRedBorder(){
//         console.log("设置红色边框")
//     }
// }
// let circle = new Circle()
// circle.draw()
// let newCircle = new Decorator(circle)
// newCircle.draw()

//场景  ES7装饰器、core-decorators
    //依赖包 babel-plugin-transform-decorators-legacy 
    // plugins:["tansform-decorators-legacy"]
    
    // ES7装饰器
    // @testDec
    // class Demo{}
    // function testDec(target){
    //     target.isDec = true
    // }
    // alert(Demo.isDec)
    //上面的原理
    // Demo = testDec(Demo)||Demo
    
    //装饰器传参
    // @testDec(false)
    // class Demo{}
    // alert(Demo.isDec);
    // function testDec(isDec){
    //     return function(target){
    //         target.isDec = isDec
    //     }
    // }
    //装饰类  通过装饰器给类添加方法
    // let foo = {
    //     foo(){
    //         alert("foo")
    //     }
    // }
    // @mixins(foo)
    // class Demo{}
    // function mixins(...list){
    //     return function(target){
    //         Object.assign(target.prototype,...list)
    //     }
    // }
    // let obj = new Demo()
    // obj.foo();
    //装饰方法 01 readOnly
    // class Person{
    //     constructor(){
    //         this.first = 'A'
    //         this.last = 'B'
    //     }
    //     @readOnly
    //     name(){
    //         return `${this.first} ${this.last}`
    //     }
    // }
    // function readOnly(target,name,descriptor){
    //     debugger
    //     descriptor.writable = false
    //     return descriptor
    // }
    // let p = new Person()
    // console.log(p.name())
    // // p.name = function(){
    // //     alert(100)
    // // }
    function log(target,name,descriptor){
        let oldValue = descriptor.value;
        descriptor.value = function(){
            console.log(`calling ${name} with`,arguments)
            return oldValue.apply(this,arguments)
        }
    }
    class Math{
        @log
        add(a,b){
            return a+b
        }
    }
    let math = new Math()
    console.log(math.add(1,1))