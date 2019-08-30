//单例模式
class Cart{
    constructor(){
        this.list = [];
    }
    add(data){
        this.list.push(data);
    }
    delete(id){
        this.list=this.list.filter((item)=>{
            if(item.id===id){
                return false
            }else{
                return true
            }
        })
    }
    getList(){
        //返回字符串
        // debugger;
        let log;
        return log = this.list.length?this.list.map(item=>{
            return item.name
        }).join('\n'):'无';
    }
}
let getCart = (function(){
    let cart;
    return function(){
        if(!cart){
            cart = new Cart();
        }
        return cart;
    }
})()
export default getCart;