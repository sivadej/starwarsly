/*
  PersonList Component:
    Displays list of explored people.
    Generates array of people objects in redux store,
    passes array as props to ItemList component.
*/

import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from './ItemList'

function PersonList() {
  // Generate url property and include in each object
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;