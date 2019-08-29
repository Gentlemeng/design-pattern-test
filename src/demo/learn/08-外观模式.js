//示例代码
//主题，保存状态，状态变化后触发所有观察者对象
class Subject{
    constructor(){
        this.state = 1;
        this.observers = [];
    }
    setState(state){
        this.state = state;
        this.observers.forEach(observer=>{
            observer.state = state
            observer.getState();
        })
    }
    attach(observer){
        this.observers.push(observer)
    }
}
class observer{
    constructor(name,subject){
        this.name = name;
        subject.attach(this);
    }
    getState(){
        console.log(`${this.name}'s state is ${this.state}`)
    }
}

const subject = new Subject()

const o1 = new observer('o1',subject);
const o2 = new observer('o2',subject);
const o3 = new observer('o3',subject);

subject.setState(2);
subject.setState(3);
subject.setState(4);