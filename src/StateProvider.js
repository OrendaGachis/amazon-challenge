import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from datalayer
export const useStateValue = () => useContext(StateContext);