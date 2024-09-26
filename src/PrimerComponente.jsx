//Se creo el primer componente por funcion
// function PrimerComponente() {
//     return ( <h1>Hola Mundo!</h1> );
// }
// export default PrimerComponente;

//creamos las variables fuera del SCOPE
// const string = "Esto es un texto";
// const number = 123456;
// const array = ["Curso React", "Youtube", 4, 1000000];
// const boolean = true;
// const funcion = () => 1 + 1;
// const objeto = { nombre: "Curso de Javascript", duracion: 4 };
// const fecha = new Date();

// //vamos a importar CSS
// import './PrimerComponente.css'

// //Creacion de un componente con funcion flecha,(atajo: rafc)
// //esta se llama en la principal con llaves
// //import React from 'react'

// export const PrimerComponente = () => {
//   return (
//     <>
//       <h1>Variables en JSX</h1>
//       <h4>Variable tipo String: </h4> <p>{string}</p>
//       <h4>Variable tipo Number: </h4> <p>{number}</p>
//       <h4>Variable tipo Array</h4> <p>{array}</p>
//       <h4>Variable tipo Funcion</h4> <p>{funcion()}</p>
//     </>
//   );
// };

//PROPS
import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo,subtitulo}) => {
    console.log(titulo)
    console.log(subtitulo)
  return (
    <>
      <h1>{titulo} </h1>
      <h2>{subtitulo} </h2>
    </>
  );
};

//especificar valores requeridos
PrimerComponente.propTypes = {
    titulo:PropTypes.string.isRequired,
    subtitulo:PropTypes.number.isRequired,
}

//valores por defecto
PrimerComponente.defaultProps = {
    titulo:'Curso de React',
    subtitulo:7
}