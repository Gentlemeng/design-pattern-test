//顺序访问一个集合
//使用者无需知道集合的内部结构（封装）

//示例  jquery演示


//生成迭代器 原理
// class Iterator{
//     constructor(container){
//         this.list = container.list
//         this.index = 0;
//     }
//     hasNext(){
//         if(this.index >= this.list.length){
//             return false
//         }else{
//             return true;
//         }
       
//     }
//     next(){
//         if(this.hasNext()){
//             return this.list[this.index++]
//         }
//         return null
//     }
// }
// class Container{
//     constructor(list){
//         this.list = list
//     }
//     //生成迭代器
//     getIterator(){
//         return new Iterator(this);
//     }
// }

// let container = new Container([1,2,3,4,5,6])
// let iterator = container.getIterator();

// while(iterator.hasNext()){
//     console.log(iterator.next());
// }

// 重复上面构建迭代器
class Iterator{
    constructor(container){
        this.list = container.list;
        this.index = 0;
    }
    hasNext(){
        if(this.index>=this.list.length){
            return false;
        }else{
            return true
        }
    }
    next(){
        if(this.hasNext()){
            // return this.list[this.index++];
            return {value:this.list[this.index++],done:false};
        }
        return {
            value:undefined,
            done:true
        };
    }
}
class Container{
    constructor(list){
        this.list = list
    }
    getIterator(){
        return new Iterator(this);
    }
}
let container = new Container([1,2,3,4,5,6]);
let iterator = container.getIterator();

while(iterator.hasNext()){
    console.log(iterator.next());
}

//ES6 Iterator示例
// Array.prototype[Symbol.iterator]// 函数
// Array.prototype[Symbol.iterator]()// 执行函数，返回迭代器
// Array.prototype[Symbol.iterator]().next()// 迭代器的next方法，返回{value:undefined,done:true}


