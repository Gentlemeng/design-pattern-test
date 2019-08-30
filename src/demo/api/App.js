import $ from "jquery"
import List from './../List/List.js'
import ShopoingCart from './../ShoppingCart/ShoppingCart.js'
export default class App{
    constructor(id){
        this.$el = $("#"+id);
    }
    init(){
        this.initList();
        this.initShoppingCart();
    }
    initShoppingCart(){
        let shoppingCart = new ShopoingCart(this);
        shoppingCart.init();
    }
    initList(){
        let list = new List(this);
        list.init();
    }
} 

