import $ from 'jquery'
import {GET_URL} from "../config/config.js"
import createItem from './createItem.js';

export default class List{
    constructor(app){
        this.app = app;
        this.$el = $("<div></div>")
    }
    loadData(){
        return fetch(GET_URL).then(result=>{
            if(result.ok){
                return result.json();
            }
        })
    }
    initItemList(data){
        data.forEach(data=>{
             //创建一个Item,然后初始化(第一反应应该是直接引用Item,传递数据初始化，
            //  但是这里做了处理使用了工厂模式)
            createItem(this,data)
        })
    }
    render(){
        this.app.$el.append(this.$el);
    }
    init(){

        this.loadData().then((data)=>{
            this.initItemList(data)
        }).then(()=>{
            // debugger;
            this.render();
        })
    }
}

