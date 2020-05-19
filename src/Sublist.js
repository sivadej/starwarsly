/*
  Sublist Component:
    Render subheader text and list of items from props.
    Props: items - Array of objects [ { id, name, url }, { id, name, url }, ... ]
           title - string
*/

import React from 'react';
import { Link } from "react-router-dom";

function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;