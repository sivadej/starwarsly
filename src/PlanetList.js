/*
  PlanetList Component:
    Displays list of explored planets.
    Generates array of planet objects in redux store,
    passes array as props to ItemList component.
*/

import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

function PlanetList() {
  // Generate url property and include in each object
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;