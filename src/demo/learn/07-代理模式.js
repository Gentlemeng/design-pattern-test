//使用与不使用代理都应该提供相同的“接口”

//代码演示
class RealImg{
    constructor(fileName){
        this.fileName = fileName
        this.loadImg()
    }
    display(){
        console.log('display...',this.fileName)
    }
    loadImg(){
        console.log('loading...',this.fileName)
    }
}

class ProxyImg{
    constructor(fileName){
        this.realImg = new RealImg(fileName)
    }
    display(){
        return this.realImg.display()
    }
}
let img = new ProxyImg('1.jpg')
img.display();

//场景
    //网页事件代理

    //jQuery $.proxy

    // ES6 Proxy
    let star = {
        name:"范**",
        age:50,
        phone:'18300000000'
    }
    let agent = new Proxy(star,{
        get:function(target,key){
            if(key==='phone'){
                //返回经纪人号码
                return "123454342342"
            }
            if(key==='price'){
                return 120000
            }
            return target[key]
        },
        set:function(target,key,val){
            if(key==='customPrice'){
                if(val<10000){
                    throw new Error('价格太低')
                }else{
                    target[key] = val;
                    return true
                }
            }
        }
    })

    //设计原则验证


    //三种设计模式比较
        //代理模式vs装饰器模式
            // 装饰器模式：扩展功能，原有功能不变且可直接使用
            // 代理模式：显示原有功能，但是经过限制或者阉割之后的
        //代理模式vs适配器模式
            // 适配器模式：改变旧接口，使能够使用
            // 代理模式：无权使用，需要访问代理才可使用