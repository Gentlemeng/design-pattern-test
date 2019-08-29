
//介绍

// 1.一个对象有状态变化
// 2.每次状态变化都会触发一个逻辑
// 3.不能总用if...else控制

///示例
//交通信号灯  （状态的切换State，状态的获取Context）
// class State{
//     constructor(color){
//         this.color = color;
//     }
//     handle(context){
//         context.setState(this.color)
//     }
// }
// class Context{
//     constructor(){
//         this.state = null
//     }
//     getState(){
//         return this.state
//     }
//     setState(state){
//         this.state = state
//         console.log(`turn on ${this.state} light`)
//     }
// }

// let context = new Context();

// let green = new State("green");
// let red = new State("red");
// let yellow = new State("yellow");

// green.handle(context)
// console.log(context.getState())
// red.handle(context)
// console.log(context.getState())
// yellow.handle(context)
// console.log(context.getState())

//场景
 //有限状态机
  //有限个状态 以及在这些状态之间的变化
  //交通信号灯
  //开源lib javascript-state-machine
  
 //写一个简单的Promise
