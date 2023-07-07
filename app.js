class CEmpleado {
    constructor(name, year, salary, adress) {
        this.name = name;
        this.year = year;
        this.salary = salary;
        this.adress = adress;
    }
    yearsOf() {
        let currentYear = 2023;
        let antiguity = 0;
        antiguity = currentYear - this.year;
        return antiguity;
    }
    livesIn() {
            return this.adress;
    }
    wallStreet(){
        if(this.adress == "WallStreet"){
            return "Si";
        }
        else{
            return "No";
        }
    }
    mostrarDatos() {
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.year}</td>
                    <td>${this.yearsOf()}</td>
                    <td>${this.livesIn()}</td>
                    <td>${this.wallStreet()}</td>
                </tr>`;
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Entro al event");
    const name = document.getElementById('name').value;
    const year = parseInt(document.getElementById('year').value);
    const salary = parseFloat(document.getElementById('salary').value);
    const adress = document.getElementById('adress').value;

    const persona = new CEmpleado(name, year, salary, adress);

    const tabla = document.getElementById('datosPersona');
    tabla.innerHTML += persona.mostrarDatos();

    formulario.reset();
});
