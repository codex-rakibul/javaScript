const car ={
    name:"Audi",
    model:"110",
    weight:"567kg",
    color:"white",
    price:10,
    totalPrice:10,

    start:function(){
        console.log("Car has Started...");
        
    },

    drive:function(){
        console.log("Car is driving...");
        this.start();
    },

    insert:function(model,weight,color,price){
        this.drive();
        this.weight = weight;  
        this.color = color;
        this.price = price;
        this.totalPrice = this.vat(price);
        this.display(this.name,this.model=model,this.weight,this.color,this.price,this.totalPrice);
    },

    vat:function(price){
        return price+((price/100)*10);
    },

    display:function(name,model,weight,color,price,totalPrice){
        const demo = document.getElementById("demo");
        demo.innerHTML = `
        Car name: ${name} <br>
        Model: ${model} <br>
        Weight: ${weight}<br>
        Color: ${color}<br>
        Price: ${price}$<br> 
        Vat: 10% <br>
        TotalPrice: ${totalPrice}$<br>
        `
    },
};

car.insert("101","680kg","White",3500);



