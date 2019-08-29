//发布&订阅
//一对多

//代码示例
// class Subject{
//     constructor(){
//         this.state = 0;
//         this.observers = [];
//     }
//     setState(state){
//         this.state = state
//         this.observers.forEach(observer=>{
//             observer.updateState(state);
//         })
//     }
//     attach(observer){
//         this.observers.push(observer);
//     }
// }
// class Observer{
//     constructor(name,subject){
//         this.name = name;
//         subject.attach(this);
//     }
//     updateState(state){
//         console.log(`Observer : ${this.name}'s state is ${state}`)
//     }

// }
// let subject = new Subject()
// let o1 = new Observer('o1',subject)
// let o2 = new Observer('o2',subject)
// let o3 = new Observer('o3',subject)
// subject.setState(1);

//domo 2  详见test3观察者模式.html
//demo 3 node.js自定义事件 EventEmitter
    //Stream 一段一段读取文件(chunk)
    // const fs = require('fs')
    // const readSteam = fs.createReaderStream('文件目录');
    // let length = 0;
    // readSteam.on("data",function(chunk){
    //     let len = chunk.toString().length;
    //     console.log('len',len);
    //     length  += len;
    // })
    // readSteam.on("end",function(){
    //     console.log(length)
    // })
    //readLine 一行一行读取文件(line)
    const fs = require('fs')

