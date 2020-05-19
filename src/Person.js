/*
  Person Component:
    Displays data for a person by id, passed as url parameter.
    List the persons's associated Films using Sublist component and homeworld (Planet).
    Component uses people data from Redux store and gets data from API if needed.
*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

function Person() {
  
  const dispatch = useDispatch();
  const {id} = useParams();
  const person = useSelector(st => st.people[id]);
  const planetState = useSelector(st => st.planets);
  const filmState = useSelector(st => st.films);

  // Set film as missing if it does not exist in state,
  // then retrieve film data from API.
  const missing = !person;

  useEffect(function() {
    if (missing) {
      dispatch(getPersonFromAPI(id));
    }
  }, [id, missing, dispatch]);

  if (missing) return "loading...";

  // Create array of associated films and homeworld object.
  // Each film item in array should be an object: { id, url, display }
  // Display 'unknown' if film or planet property doesn't exist in redux state,
  // Keep id and correct url regardless of explored state. 
  // Pass as props to Sublist components.

  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown"
  };

  const films = person.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p><b>Gender: </b>{person.gender}</p>
      <p><b>Birth Year: </b>{person.birthYear}</p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;

