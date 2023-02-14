
// guardar
let estuidiante = localStorage.length
let save = document.getElementById("save");
save.addEventListener("click", () => {
  console.log(`click en save`);
  let nombre = document.getElementById("name").value;
  let genero = document.getElementById("genero").value;
  let curso = document.getElementById("curso").value;
  let nota1 = parseFloat( document.getElementById("nota1").value);
  let nota2 = parseFloat( document.getElementById("nota2").value);
  let nota3 = parseFloat( document.getElementById("nota3").value);
    
  if((nota1 > 0 && nota2 > 0 && nota3 > 0)  && (nota1 <= 5 && nota2 <= 5 && nota3 <= 5)){
    console.log('NOTAS ENTRE 0 Y 5');
    let info = [{
        "nombre": nombre,
        "genero": genero,
        "curso": curso,
        "nota1": nota1,
        "nota2": nota2,
        "nota3": nota3
      }]
    
      console.log(info);
      localStorage.setItem(`estudiante${estuidiante}`, JSON.stringify(info));
      estuidiante++
  }else{
    console.log('NOTAS NO ENTRE 0 Y 5');
    alert('El valor de las notas deve ser entre 0 y 5');
    console.log(estuidiante);
  }


  
});


// mostrar
let view = document.getElementById("view");
view.addEventListener("click", () => {
    console.log(`click en view`);
    for (let i = 0; i < estuidiante; i++) {
        let lista = JSON.parse(localStorage.getItem(`estudiante${i}`))
       
        let promedio =( lista[0].nota1 + lista[0].nota2 + lista[0].nota3)/3;
        console.log(`______${promedio}________`);
        if (promedio >=3.5 ){
            document.getElementById("tableList").innerHTML +=`
            <tr>
                <th> Nombre = ${lista[0].nombre}  </th> 
                <th> Promedio = ${promedio.toFixed(2)}  </th> 
                <th> Aprobo  </th> 
                
            </tr>
            `
        }else{
            document.getElementById("tableList").innerHTML +=`
            <tr>
                <th> Nombre = ${lista[0].nombre}  </th> 
                <th> Promedio = ${promedio.toFixed(2)}  </th> 
                <th> Repobo  </th> 
            </tr>
            `
        }
        
    }
});
