import { newGuid } from "../util/ObjectUtils";

class Widget{
    constructor(type, x, y, width, height, state){
        this.id = newGuid();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.state = state;
        this.type = type;
        this.selected = false;
    }

    getID(){
        return this.id;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

    setPos(x, y){
        this.x = x;
        this.y = y;
    }

    translatePos(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    setState(state){
        this.state = state;
    }

    setSelected(selected){
        this.selected = selected
    }
}

export default Widget;