import $ from "jquery"
import List from './../List/List'
import ShopoingCart from './../List/List'
export default class App{
    constructor(id){
        this.$el = $("#"+id);
    }
    init(){
        // console.log(this.id)
    }
    initShoppingCart(){
        let shoppingCart = new ShopoingCart(this);
        shoppingCart.init()
    }
    initList(){
        let list = new List(this);
        list.init();
    }
}