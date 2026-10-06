import React from 'react'
import './App.css'

export const FichaPersonal: React.FC = () => {

  const nombre: string = "Nombre: Diego Santamaria Rosales"
  const edad: number = 21
  const edad2: string = "Edad: "
  const carrera: string = "Carrera: Sistemas computacionales administrativos"
  const semestre: number = 3
  const semestre2: string = "Semestre: "
  const ciudad: string = "Ciudad: Tlaltela"
  const promedio: number = 8.5
  const promedio2:string = "Promedio: "
  const estudinteActivo: boolean = true

return (
  <div className='Contenedor-ficha'>
    <div className='Contenedor'>
      <h1>Informacion Personal</h1>
      <span className={`badge ${estudinteActivo ? 'activo' : 'inactivo'}`}>
        {estudinteActivo ? 'Estudiante activo: Si' : 'Estudiante activo: No'}
      </span>
    </div>

    <div className='ficha-cuerpo'>
      <div>
        <p className='nombre'>{nombre}</p>
      </div>
      
      <p className='edad'>{edad2}{edad}</p>
      <p className='carrera'>{carrera}</p>
      <p className='semestre'>{semestre2}{semestre}</p>
      <p className='ciudad'>{ciudad}</p>
      <p className='promedio'>{promedio2}{promedio}</p>
        
    </div>
  </div>

)
}

export default FichaPersonal