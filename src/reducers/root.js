// App utilizes separate reducer functions to manage states
//    for films, planets, and people independently.
// Combine reducer functions into single reducing function
//    to export to redux store.

import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

export default combineReducers({
  films,
  planets,
  people,
});