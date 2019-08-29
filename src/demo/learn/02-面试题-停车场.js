class Park{
    constructor(floors){
        this.floors = floors
        this.carList = {} //停车场中车的数据
        this.camera = new Camera()
        this.screen = new Screen()
    }
    //全部的空余车位
    emptyNumber(){
        var a = this.floors.map(floor=>{
            return `${floor.index}层停车场还有${floor.emptyPlaceNum()}个空余停车位`
        }).join("\n")
        console.log(a)
    }
    in(car){
        let index = parseInt(Math.random()*100%100)
        let place = this.floors[0].places[index]
        place.empty = false;
        let info = this.camera.shot(car)
        info.place = place
        this.carList[car.num] = info
    }
    out(car){
        //显示车牌号和停车时间
        this.screen.show(car,car.time)
        let info = this.carList[car.num]
        //车位为空
        info.place.empty = true
        //清除车辆信息
        delete this.carList[car.num]
    }
}
class Floor{
    constructor(index,places){
        this.index = index //停车场楼层
        this.places = places||[] //停车场车位
    }
    emptyPlaceNum(){
        let num = 0;
        this.places.forEach(place => {
            if(place.empty){
                num++
            }
        });
        return num
    }
}
class Place{
    constructor(){
        this.empty = true
    }
    in(){
        this.empty = false
    }
    out(){
        this.empty = true
    }
}
class Camera{
    shot(car){
        return {
            num:car.num,
            time:Date.now()
        }
    }
}
class Screen{
    show(car,inTime){
        console.log(`车牌号${car.num}停车时间:${Date.now()-inTime}`)
    }
}
class Car{
    constructor(num){
        this.num = num
    }
}

let floors = []
for(var i=0;i<3;i++){
    let places = []
    for(var j=0;j<100;j++){
        let place = new Place()
        places.push(place)
    }
    floors.push(new Floor(i,places))
}
let park = new Park(floors)

let car1 = new Car("京B")
let car2 = new Car("京C")
park.emptyNumber()
park.in(car1)
park.emptyNumber()
park.in(car2)
