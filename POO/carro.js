import { automovel } from "./auto";

class Car extends automovel {
 
    constructor (marca) {
        super(marca)
    }


    comprar () {
        this.setModelo("Audi TT")
        this.setMarca("Audi")
        this.setAno("2007")

        return "Seu modelo: ",this.getModelo(), " da marca: ", this.getMarca(), "Ano: ",this.getAno()
    }
}

class Principal {

    main(){
        const auto = new Car()

    }
}