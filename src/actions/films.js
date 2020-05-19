import axios from 'axios';
import { LOAD_FILM } from "./types";

function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    // store only id's from url strings into arrays:
    //    'https://swapi.dev/planets/25/' -> '25'
    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }