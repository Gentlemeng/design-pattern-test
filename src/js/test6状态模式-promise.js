import StateMachine from 'javascript-state-machine';
// debugger;
let fsm = new StateMachine({
    init:"pendding",
    transitions:[{
        name:"resolve",
        from:"pendding",
        to:"resolve"
    },{
        name:"reject",
        from:"pendding",
        to:"reject",
    }],
    methods:{
        onResove:function(state,data){
            //state 当前状态机实例， data fsm.resolve(xxx) 传递过来的参数
            data.successList.forEach(fn => fn());
        },
        onReject:function(state,data){
            data.errorList.forEach(fn => fn());
        }
    }
})
//模拟promise
class Mypromise{
    constructor(fn){
        this.successList = [];
        this.failList = [];
        fn(function(){
            fsm.resolve(this);
        },function(){
            fsm.reject(this);
        })
    }
    then(successFn,errorFn){
        this.successList.push(successFn);
        this.errorFn.push(errorFn);
    }
}


// src="https://fms.ipinyou.com/5/17/26/EB/F001461TKZA6002RcLFa.jpg"
//真实promise
function loadImg(src){
    let promise = new Mypromise(function(resolve,reject){
        let img = document.createElement("img");
        img.onload = function(){
            resolve(img)
        };
        img.onerror = function(){
            reject()
        }
        img.src = src;
        
    })
    // .then(function(){
    //     console.log("ok")
    // })
    return promise;
}

let src="https://fms.ipinyou.com/5/17/26/EB/F001461TKZA6002RcLFa.jpg"
let result = loadImg(src);
result.then(function(){
    console.log("ok")
},function(){
    console.log("error")
})