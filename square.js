export default class square{
    div; //pointer to corresponding div square
    occupied; //boolean
    resident; //refers to specific piece
    color;
    coordinate;


    constructor(div, position, color){
        this.div = div;
        this.occupied = false;
        this.resident = null;
        this.coordinate = coordinate;
        this.color = color;
    }

    getOccupied(){
        return this.occupied
    }
    setOccupied(boolean){
        this.occupied = boolean;
    }
    getResident(){
        return this.resident
    }
    setResident(piece){
        this.resident = piece;
    }


}