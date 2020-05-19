- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
    - A regex matcher is used to extract just the digits from the url in order to get the item's id. The rest of the url data is not needed, so is replaced by mapping over its own property. For example, it will convert 'https://swapi.dev/people/19' to '19'. This way we can use the id our own app's route, myurl:3000/people/19, as well as use it for a future API call. 
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
    - objects containing visited data for people, planets, and films are all handled by the redux store. Peristing it means it will save the data to the browser's localStorage. Without persisting it, the data would be reset with every browser session.
  
- What does `combineReducers` do? Why are we using it? 
    - Redux can only store one reducer passed into createStore. In some cases, multiple files containing separate reducers are used for better separation of concerns for handling of individual state objects. using combineReducers will allow us to combine them and access them as individual reducer objects within the store.

- How does the "Reset to Fresh Exploration" feature work?
    - It uses the RESET_ALL action which simply returns the state to the INITIAL_STATE, which are empty objects. 

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
    - It is good because ItemList is a reusable component, as demonstrated by its use from these 3 components. If another category were to be added later on, ItemList could still be reused. For example, an Actors page might need an ActorsList component which could re-use ItemList with an actors prop.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
    - The HomePage component only needs to determine if the first film is loaded so the rest of the film data is irrelevant. O(1) vs O(n), with n being the number of films potentially in the store
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
    - I feel like redux-persist could be useful for projects as an alternative to hard coding methods to store login session data, shopping cart data, etc.
    - I see the value in taking the extra work in using action creators and maintaining separate reducers. I can see how this would make reading a larger code base much less frustrating.
  
- Which Star Wars character would make the best React developer, and why?
  - oh gosh, i dont know.... not a star wars fan *GASP*