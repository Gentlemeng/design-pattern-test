import Item from "./Item";
function createDiscount(data){
    return new Proxy(data,{
        get:function(target,key, receiver){
            if(key==='name'){
                return `${target[key]}【折扣】`
            }
            if(key==="price"){
                return target[key]*0.8
            }
            return target[key]
        }
    })
}
//工厂模式
export default function createItem(list,data){
    //处理折扣信息，使用代理模式
    if(data.discount){
        data = createDiscount(data);
    }
    return new Item(list,data);
}