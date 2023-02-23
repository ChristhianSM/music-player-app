import React from 'react';
import { useLocation } from 'react-router-dom';
import { NoContent } from '../NoContent';
import { Artists } from './Artists';
import { Recent } from './Recent';


export const MyLibrery = () => {
  const { pathname } = useLocation();

  const title = pathname.substring(1, pathname.length).toUpperCase();

  return (
    <div>
      <h3 className='title-library'>{title}</h3>
      { title === 'RECIENTES' && <Recent />}
      { title === 'ARTISTAS' && <Artists />}
      { title === 'ALBUMES' && <NoContent  description={"No hay Albumes para mostrar"}/>}
      { title === 'ESTACIONES' && <NoContent  description={"No hay Estaciones para mostrar"}/>}
    </div>
  )
}