import React from 'react';
import CardCity from './CardCity';

function ListOfCities({LOfCities}) {
  return <div style={{display:'flex',justifyContent:'space-around'}}>

      {LOfCities.map(el=> <CardCity  key={el.id} city={el.city} description={el.description} img={el.imageUrl} />)}

  </div>;
}

export default ListOfCities;
