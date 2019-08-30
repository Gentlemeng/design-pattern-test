import $ from "jquery"
import getCart from "../ShoppingCart/GetCart.js"
import StateMachine from "javascript-state-machine"
import {log} from "./../Util/log"

export default class Item{
    constructor(list,data){
        this.$el = $("<div></div>")
        this.data = data;
        this.list = list;
        this.cart = getCart();//单例
        this.init();
    }
    init(){
        this.initContent();
        this.initBtn();
        this.render();
    }
    initContent(){
        let price = this.data.price;
        this.$el.append(`<p>名称：${this.data.name}</p>`)
        this.$el.append(`<p>价格：${this.data.price}</p>`)

    }
    initBtn(){
        let $el = this.$el;
        let $btn = $("<button></button>")
        let _this = this;
        function updateText(){
            $btn.text(fsm.state)
        }
        let fsm = new StateMachine({
            init:"加入购物车",
            transitions:[{
                name:"addToCart",
                from:"加入购物车",
                to:"从购物车删除"
            },{
                name:"deleteFromCart",
                from:"从购物车删除",
                to:"加入购物车"
            }],
            methods: {
                onAddToCart:function(){
                    _this.addToCartHandle();
                    updateText();
                },
                onDeleteFromCart:function(){
                    _this.deleteFromCartHandle();
                    updateText();
                }
            }
        })
        updateText();
        $btn.click(function(){
            if(fsm.is("加入购物车")){//添加到购物车中
                fsm.addToCart();
            }else{
                fsm.deleteFromCart();//从购物车删除
            }
        })
        $el.append($btn);
    }
    //装饰器
    @log("add")
    addToCartHandle(){
        this.cart.add(this.data);
    }
    @log("del")
    deleteFromCartHandle(){
        this.cart.delete(this.data.id);
    }
    render(){
        this.list.$el.append(this.$el)
    }

}