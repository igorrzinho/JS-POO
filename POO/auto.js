export class automovel {
    #marca;
    #modelo;
    #ano;

    constructor(marca, modelo,ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    getMarca(){
        return this.#marca;
    }

    getModelo(){
        return this.#modelo;
    }
    getAno(){
        return this.#ano;
    }
    
    setMarca(marca){
        this.#marca = marca;
    }

    setModelo(modelo){
        this.#modelo = modelo;
    }
    setAno(ano){
        this.#ano = ano;
    }
    
}