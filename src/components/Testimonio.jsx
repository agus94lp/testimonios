//import img from '../imagenes/testimonio-tres.jpg'
import imagen from '../imagenes/ima'
import '../estilo/testimonio.css'

// const Testimonio = (props) => {
function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={imagen[props.img]} alt={`foto de ${props.nombre}`}/>
        <div className='contenedor-texto'>
            <p className='nombre-testimonio'>
              <strong>{props.nombre}</strong> de {props.pais}
            </p>
            <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
            <p className="texto-testimonio">"{props.texto}"</p>
        </div>
    </div>
  )
}

export default Testimonio;