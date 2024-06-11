import React from 'react'
import { Ammount } from './Ammount'

export const DataAmmounts = ({valorInicial, comision, valorCobrar}) => {
  return (
    <div className='data-ammounts'>
      <Ammount  name="Valor Inicial" ammount={valorInicial}/>
      <Ammount  name="Comisión" ammount={comision}/>
      <Ammount  name="Valor a Cobrar" ammount={valorCobrar}/>
    </div>   
  )
}
