/*
  ItemList Component:
    Render header text and list of items from props.
    Display message on empty props.
    Props: items - Array of objects [ { id, name, url }, { id, name, url }, ... ]
           title - string
*/

import React from 'react';
import { Link } from "react-router-dom";

function ItemList({items, title}) {
  return (
    <>
      <h1 className="my-3">{title}</h1>
      {items.length !== 0
        ? (
          <ul style={{ fontSize: "120%" }}>
            {items.map(item =>
              <li key={item.id}>
                <Link to={item.url}>
                  {item.name}{" "}
                  <small className="text-muted">{item.id}</small>
                </Link>
              </li>
            )}
          </ul>
        )
        : <p>You haven't explored any items of this type yet.</p>
      }
    </>
  );
}

export default ItemList;
