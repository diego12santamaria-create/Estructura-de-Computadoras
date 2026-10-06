import React from 'react'
import './App.css'

export const CalculadoraDeCompra: React.FC = () => {

  const producto: string = "Lentes de sol"
  const preUnitario: number = 350
  const CantProducto: number = 3
  const ivaPor: number = 16
  const desPor: number = 10

  const subtotal: number = preUnitario * CantProducto
  const iva: number =subtotal * (ivaPor / 100)
  const total: number = subtotal + iva
  const descuento: number = total * (desPor / 100) 
  const descuento2: string = descuento.toFixed(2) 
  const totalFinal: number = total - descuento

  return (
    <div className='Ticket'>
      <h1>Ticket de Compra</h1><br />
      <div>
        <p>Producto: {producto}</p>
        <p>Precio unitario: ${preUnitario}</p>
        <p>Cantidad de productos: {CantProducto}</p>
        <p>Iva: {ivaPor}%</p>
        <p>Descuento: {desPor}%</p><br /><br />
        <p>Subtotal: ${subtotal}</p>
        <p>Iva aplicado: +${iva} </p>
        <p>Total antes del descuento ${total}</p>
        <p>Descuento aplicado: -${descuento2} </p>
        <p>Total Final: ${totalFinal}</p>

      </div>
    </div>
     
  )
}



export default CalculadoraDeCompra