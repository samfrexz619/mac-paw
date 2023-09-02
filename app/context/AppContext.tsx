'use client'
import { createContext, useReducer, useContext } from "react";
import { StateType, ActionType, AppReducer, Url } from "./AppReducer";



type InitialState = {
  data: {
    loading: boolean;
    url: string;
    err: string;
    id: string;
  }[]
}

const initialState: InitialState = { 
  data: [{
    loading: true,
    url: '',
    err: 'sth went wrong',
    id: ''
  }]
}


interface PropContext {
  children: React.ReactNode
}

export const AppContext = createContext<{state: StateType; dispatch: React.Dispatch<ActionType> }>({
  state: initialState, dispatch: ()=> null
})


export const AppProvider = ({ children }: PropContext) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return(
    <AppContext.Provider value={{
      state, dispatch
    }}>
      { children}
    </AppContext.Provider>
  )
}

const useCatItem =()=> {
  const context = useContext(AppContext)
  return context
}

export {useCatItem}