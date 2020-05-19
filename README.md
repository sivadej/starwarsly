# starwarsly

## About

Discover the Star Wars universe!

Information on films, planets, and people are revealed as you continue to explore. Data retrieved from swapi.dev, a Star Wars API. 

**Live demo deployed to https://infinite-dusk-55698.herokuapp.com/**

#### Built With
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

#### Additional Libraries
- axios
- redux-persist
- react-redux
- redux-thunk

#### APIs
- SWAPI.dev - The Star Wars API

## Installation
Clone this repo to your local machine and install the dependencies using npm:

```
> git clone https://github.com/sivadej/starwarsly.git
> cd starwarsly
> npm i
> npm start
```

You should now be able to access the app at localhost:3000

## How it Works

### API

Explored data will have titles revealed when used by components, whereas data that has not yet been requested from the API will have hidden titles, but with valid url links. Clicking on these unexplored links will then populate the item info from the API and will now be revealed throughout the app.

### Redux Store / State

The Redux store contains state data for films, planets, and people. State for each of these are managed as independent objects within the store.

Data is saved to a persisted redux store with every API request as "explored" data. ```Redux-persist``` allows the data to remain in browser localStorage so that the data will persist between sessions. Clearing localStorage or dispatching the ```RESET_ALL``` action will clear the redux store.


### Components
App:
* NavBar
* Router
  * HomePage
  * FilmList
    * ItemList (films)
  * PersonList
    * ItemList (people)
  * PlanetList
    * ItemList (planets)
  * Film (id)
    * Sublist (planets)
    * Sublist (people)
  * Person (id)
    * Sublist (films)
  * Planet (id)
    * Sublist (films)
    * Sublist (people)


## Future Additions
- Unit & integration tests

## Authors
- App developed by Rithm School / Springboard
- Documentation by: Sivadej Kitchpanich