console.log("Hullo");

window.onload=function(){

    class Vehicle 
    {
        constructor(speed, model)
        {
            this._speed = speed;
            this._model = model;
        }

        getSpeed()
        {
            return this.speed = "100";
        }
        getModel()
        {
            return this.model = "Tata";
        }
    }

    class Car extends Vehicle
    {
        constructor(speed, model, name)
        {
            super(speed, model);
            this.name = name;
        }

        setDetails(name)
        {
            this.name = prompt("Please enter car name ", "TruckyTruckFace");
            console.log(name);
        }
        getDetails(carName)
        {
            carName = "This is the info: " + this.name + " " + this.getSpeed() + " " + this.getModel();
            console.log(carName);
        }
    }


    const automobile = new Car();
    automobile.setDetails();
    automobile.getDetails();

}
