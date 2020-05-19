/*
  FilmList Component:
    Displays list of explored films.
    Generates array of film objects in redux store,
    passes array as props to ItemList component.
*/

import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from './ItemList'

function FilmList() {
  // Generate url property and include in each object
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;