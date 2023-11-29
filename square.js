export default class square{
    div; 
    occupied;
    resident;
    color;
    position;


    square(div, position, color){
        this.div = div;
        this.occupied = false;
        this.resident = null;
        this.position = position;
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