### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
  - redux is used for centralized state management. it's used in react to prevent prop drilling, when data has to be passed down multiple levels through components. it acts like a global variable but is much safer. consistency, predictability, and testability are other core reasons to use redux.

- What are three features of the Redux developer tool in Chrome?
  Inspector to see current state and actions logged. 'Time travel' to replay state changes. State chart to see a visual representation of the current state.

- What is a store?
  Store holds the whole state tree of the app

- What is a reducer?
  A reducer, like reduce in Javascript, accepts an accumulation and value and returns a new accumulation. They are used to reduce a collection of values down to a single value. Typically in redux, the accumulated value is the state object, and calculates and returns a new state. They must be pure functions.

- What is an action?
  Actions are plain objects that represent an intention to change the state. Actions are the only way to get data into the store

- What is an action creator?
  Action creators are functions that create actions. It returns the action object. ex: function doAction(){return {type: DO_ACTION, data}}

- How does data flow in a React/Redux application?
  The lifecycle is as follows: an action is dispatched, the store calls the reducer function passed to it, the root reducer may combine the output of mulitple reducers into a single state tree, the redux store saves the complete state tree returned by the root reducer.

- What is the purpose of the `<Provider>` component?
  Provider makes the redux store available to any components wrapped in the Provider component. It is common to wrap the entire top level App component into the Provider.

- What is the purpose of the `useSelector` hook? What does it return?
  Allows you to extract data from the redux store state and returns an object containing values from the store. 

- Describe the `useDispatch` hook. What do you use it for?
  It returns a reference to the dispatch function from the redux store. It is used to dispatch actions.

- What is redux-thunk and why would you use it?
  Redux thunk is middleware for dispatching actions that allows you to write asynchronous logic that interacts with the store. An example would be for AJAX requests

- What are propTypes?
  A library for type checking props. Acts as a validator when writing components for props passed into it. Will only warn user, not throw any errors.

- Describe the `useCallback` hook.  What is it used for?
  Returns a memoized callback. Pass in a callback and array of dependencies, and useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. Useful for preventing unnecessary re-renders of child components.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
  useReducer is tightly coupled to a specific reducer, unlike redux which can consume any action for any reducer function. Redux has side-effect middleware (thunk). useReducer in conjunction with useContext and useState can provide some state management. useReducer doesn't produce any wrapper component like redux, so would be more performant. Smaller apps could get by using useReducer hooks, while larger applications which rely heavily on global state manangement would be better off using redux.