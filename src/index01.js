
// class People{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     getName(){
//         alert(this.name)
//     }
// }

// let p1 = new People("xiaoming",18)
// p1.getName();

//面向对象应用实例
// class Jquery{
//     constructor(selector){
//         let slice = Array.prototype.slice;
//         let dom = slice.call(document.querySelectorAll(selector))
//         let len = dom.length;
//         for(var i = 0;i < len;i++){
//             this[i] = dom[i]
//         }
//         this.length = len;
//         this.selector = selector;
//     }
// }

// window.$ = function(selector){
//     return new Jquery(selector)
// }

// let $p = $("p");
// console.log($p)

//面试题 快车&专车
// class Car {
//     constructor(carNum,name){
//         this.carNum = carNum
//         this.name = name
//     }
// }
// class Kuaiche extends Car{
//     constructor(carNum,name){
//         super(carNum,name)
//         this.price = 1
//     }
// }
// class Zhuanche extends Car{
//     constructor(carNum,name){
//         super(carNum,name)
//         this.price = 2
//     }
// }
////行程引用了car
// class Trip{
//     constructor(car){
//         this.tripLen = 5;
//         this.car = car
//     }
//     showCarInfo(){
//         alert(this.car.carNum+this.car.name)
//     }
//     showMoney(){
//         alert(this.tripLen*this.car.price)
//     }
// }

// var kuaiche = new Kuaiche("888888","快车")
// var trip1 = new Trip(kuaiche)
// trip1.showCarInfo()
// trip1.showMoney()

// var zhuanche = new Zhuanche ("888888","专车")
// var trip2 = new Trip(zhuanche)
// trip2.showCarInfo()
// trip2.showMoney()


// //面试题  停车场
// class Park{
//     constructor(floors){
//         this.floors = floors||[]
//         this.camera = new Camera()
//         this.screen = new Screen()
//         this.carList = {}
//     }
//     //每层一共有多少停车位
//     emptyNum(){
//         console.log(this.floors.map(floor=>{
//             return `${floor.index}层空余车位${floor.emptyPlaceNum()}个`
//         }).join('\n'))
//     }
//     in(car){
//         //获取摄像头信息
//         const info = this.camera.shot(car)
//         let index = parseInt(Math.random()*100%100)
//         const place =  this.floors[0].places[index]
//         //将车停入停车位
//         place.in()
//         info.place = place
//         this.carList[car.num] = info
//     }
//     out(car){
//         const info = this.carList[car.num] 
//         //将车位清空
//         info.place.out()
//         //显示时间
//         this.screen.show(car,info.inTime)
//         //清空记录
//         delete this.carList[car.num]
//     }
// }
// class Floor{
//     constructor(index,places){
//         this.index = index
//         this.places = places||[]
//     }
//     //楼层有多少停车位
//     emptyPlaceNum(){
//         let num = 0;
//         this.places.forEach(place=>{
//             if(place.empty){
//                 num++
//             }
//         })
//         return num
//     }
// }
// class Place{
//     constructor(){
//         this.empty = true
//     }
//     in(){
//         this.empty = false
//     }
//     out(){
//         this.empty = true
//     }
// }
// class Camera{
//     shot(car){
//         return {
//             num:car.num,
//             inTime:Date.now()
//         }
//     }
// }
// class Screen{
//     show(car,inTime){
//         let parkTime = Date.now()-inTime;
//         console.log(`车牌号${car.num},停车时长为${parkTime}`)
//     }
// }
// class Car{
//     constructor(num){
//         this.num = num
//     }
// }

// let floors = []
// for(var i = 0;i < 3;i++){
//     let places = []
//     for(var j = 0;j < 100;j++){
//         let place = new Place()
//         places.push(place)
//     }
//     let floor = new Floor(i+1,places)
//     floors.push(floor)
// }
// let park = new Park(floors)

// let car1 = new Car("京A")
// let car2 = new Car("京B")
// park.emptyNum()
// park.in(car1)

// park.emptyNum()
// park.in(car2)
// park.out(car1)
// park.out(car2)

// let car3 = new Car("京C")
// park.emptyNum()
// park.in(car3)
// park.out(car3)

// //单例模式
// class SingleObject{
//     login(){
//         console.log("login")
//     }
// }
// SingleObject.getInstance = function(){
//     let instance 
//     return function(){
//         if(!instance){
//             instance = new SingleObject()
//         }
//         return instance
//     }
// }()

// let obj1 = SingleObject.getInstance()
// obj1.login()
// let obj2 = SingleObject.getInstance()
// obj2.login()
// console.log('obj1===obj2',obj1===obj2);


// //装饰器模式
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
    //装饰方法 02 log
    // function log(target,name,descriptor){
    //     let oldValue = descriptor.value;
    //     descriptor.value = function(){
    //         console.log(`calling ${name} with`,arguments)
    //         return oldValue.apply(this,arguments)
    //     }
    // }
    // class Math{
    //     @log
    //     add(a,b){
    //         return a+b
    //     }
    // }
    // let math = new Math()
    // console.log(math.add(1,1))

    //代理模式
    // class RealImg{
    //     constructor(fileName){
    //         this.fileName = fileName
    //         this.loadImg()
    //     }
    //     display(){
    //         console.log('display...',this.fileName)
    //     }
    //     loadImg(){
    //         console.log('loading...',this.fileName)
    //     }
    // }
    
    // class ProxyImg{
    //     constructor(fileName){
    //         this.realImg = new RealImg(fileName)
    //     }
    //     display(){
    //         return this.realImg.display()
    //     }
    // }
    // let img = new ProxyImg('1.jpg')
    // img.display();

    // ES6 Proxy
    // let star = {
    //     name:"范**",
    //     age:50,
    //     phone:'18300000000'
    // }
    // let agent = new Proxy(star,{
    //     get:function(target,key){
    //         // debugger;
    //         if(key==='phone'){
    //             //返回经纪人号码
    //             return "123454342342"
    //         }
    //         if(key==='price'){
    //             return 120000
    //         }
    //         //返回粉丝想要获取的值
    //         return target[key]
    //     },
    //     set:function(target,key,val){
    //         if(key==='customPrice'){
    //             if(val<10000){
    //                 throw new Error('价格太低')
    //             }else{
    //                 target[key] = val;
    //                 return true
    //             }
    //         }
    //     }
    // })

    // console.log(agent.phone);
    // console.log(agent.price);
    // agent.customPrice = 1000
    // console.log(agent);

    //观察者模式示例代码
    //示例代码
//主题，保存状态，状态变化后触发所有观察者对象
// class Subject{
//     constructor(){
//         this.state = 1;
//         this.observers = []
//     }
//     setState(state){
//         this.state = state
//         this.noticeAllObserver()
//     }
//     getState(){
//         return this.state
//     }
//     noticeAllObserver(){
//         this.observers.forEach(observer=>{
//             observer.update(this.state)
//         })
//     }
//     attach(observer){
//         this.observers.push(observer)
//     }
// }
// class Observer{
//     constructor(name,subject){
//         this.name = name
//         subject.attach(this)
//     }
//     update(state){
//         // this.state = state
//         console.log(`observer ${this.name} update,this.state is ${state}`)
//     }
// }
// let subject = new Subject()

// let o1 = new Observer('o1',subject)
// let o2 = new Observer('o2',subject)
// let o3 = new Observer('o3',subject)

// subject.setState(2)
// subject.setState(3)
// subject.setState(4)



import StateMachine from 'javascript-state-machine';
import $ from 'jquery'
let fsm = new StateMachine({
    init:"收藏",
    transitions:[
        {
            name:"doStore",
            from:"收藏",
            to:"取消收藏"
        },
        {
            name:"deleteStore",
            from:"取消收藏",
            to:"收藏"
        }
    ],
    methods: {
        onDoStore:function(){
            alert("收藏成功");
            updateText()
        },
        onDeleteStore:function(){
            alert("已取消收藏");
            updateText()
        },
    },
})
$("button").on("click",function(){
    console.log("aaa")
    if(fsm.is("收藏")){
        fsm.doStore()
    }else{
        fsm.deleteStore();
    }
})
function updateText (){
    $("button").text(fsm.state);
}
updateText();
