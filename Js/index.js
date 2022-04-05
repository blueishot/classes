class Alimento {

    quantidade() {
        console.log('A cada 100g')
    }

    constructor(tipo, caloria, glicidios, proteinas, lipidios, calcio, fosforo, ferro ) {
        this.tipo = tipo;
        this.caloria = caloria;
        this.glicidios = glicidios;
        this.proteinas = proteinas;
        this.lipidios = lipidios;
        this.calcio = calcio;
        this.fosforo = fosforo;
        this.ferro = ferro;
    }
}

class Verduras extends Alimento {     

    alimento() {
        console.log('Verdura')
    }

    constructor(tipo, caloria, glicidios, proteinas, lipidios, calcio, fosforo, ferro, fibra, gordura ) {
        super(tipo, caloria, glicidios, proteinas, lipidios, calcio, fosforo, ferro)
        this.fibra = fibra;
        this.gordura = gordura;
    }
}

const banana = new Alimento ("banana", 89, 6.7, 1.8, 16, 13, 47, 0.7)
banana.quantidade()
console.log(banana.caloria)

const batataDoce = new Verduras ('Batata Doce', 94.90, 0, 1.82, 0, 40, 62, 0.90, 1.10, 0.10)
batataDoce.quantidade()
batataDoce.alimento()
console.log(batataDoce.ferro)