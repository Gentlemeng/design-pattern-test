import $ from 'jquery'
import {GET_URL} from "../config/config.js"

export default class List{
    constructor(app){
        this.app = app;
        this.$el = $("<div></div>")
    }
    loadData(){
        return fetch(GET_URL).then(result=>{
            return result.json();
        })
    }
    initItemList(data){
        data.map(()=>{

        })
    }
    render(){
        this.app.$el.append(this.$el);
    }
    init(){
        this.loadData.then((data)=>{
            this.initItemList(data)
        }).then(()=>{
            this.render();
        })
    }
}