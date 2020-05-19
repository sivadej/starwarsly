/*
  Planet Component:
    Displays data for a planet by id, passed as url parameter.
    List the planet's associated Films and People using Sublist components.
    Component uses planet data from Redux store and gets data from API if needed.
*/

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

function Planet() {
  const {id} = useParams();
  const planet = useSelector(st => st.planets[id]);
  const filmState = useSelector(st => st.films);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();

  // Set planet as missing if it does not exist in state,
  // then retrieve film data from API.
  const missing = !planet;

  useEffect(function() {
    if (missing) {
      dispatch(getPlanetFromAPI(id));
    }
  }, [missing, id, dispatch]);

  if (missing) return "loading...";

  // Create arrays of associated films and residents(people).
  // Each item in array should be an object: { id, url, display }
  // Display 'unknown' if property doesn't exist in redux state,
  // Keep id and correct url regardless of explored state. 
  // Pass as props to Sublist components.

  const films = planet.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  const residents = planet.residents.map(pid => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {planet.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p><b>Climate: </b>{planet.climate}</p>
      <p><b>Population: </b>{planet.population}</p>

      <Sublist title="People" items={residents} />
      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Planet;