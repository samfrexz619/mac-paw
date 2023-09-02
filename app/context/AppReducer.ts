export interface Url {
  url: string;
  id: string;
}

interface Items {
  loading: boolean;
  url: string;
  err: string;
  id: string;
}

export type StateType = {
  data: Items[]
}

export type ActionType = | { type: 'FETCH_DATA', payload: any }
  | { type: 'FETCH_ERR', payload: string };


export const AppReducer =(state: StateType, action: ActionType)=> {
  switch(action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: ''
      }
    }
    case 'FETCH_ERR': {
      return {
        ...state,
        loading: false,
        data: {},
        err: 'sth went wrong'
      }
    }
    default:
      return state;
  }
}