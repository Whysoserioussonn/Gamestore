import React, {createContext, useState, useEffect} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
return (
    <GlobalState.Provider value={"Value in Global"}>
        {children}
    </GlobalState.Provider>
)

}