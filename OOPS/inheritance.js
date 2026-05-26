// Method inheitance

class Car{
    constructor(name, year, brand){
        ((this.name = name), (this.year = year), (this.brand = brand));
    }
}

class SUV extends Car {
    constructor(...value){
        super(...value);
        // console.log(this)
        this.amount = '100000';
    }
}
const suv = new SUV();
console.log(suv);
class yourwarranty extends SUV{
    constructor(...value){
        super(...value);
        console.log(this);
        this.warrantyYear = '3';
    }
}
const warranty = new yourwarranty();
console.log(warranty);// const detail = new yourwarranty('Punit', 2004, 'THAR');
const detail = new SUV('Punit', 5, 'BMW')
console.log('your Car Datail: ',detail);