import $ from "jquery"
import getCart from "./GetCart";

export default class ShoppingCart{
    constructor(app){
        this.$el = $("<button>购物车</button>")
        this.app = app;
        this.cart = getCart();
    }
    init(){
        this.render();
    }
    initBtn(){
        let car = this.cart;
        this.$el.click(()=>{
            //弹出框
            // debugger;
            this.showCart()
            // alert(car.getList());
        })
    }
    showCart(){
        alert(this.cart.getList());
    }
    render(){
        this.initBtn();
        this.app.$el.append(this.$el);

    }
}

