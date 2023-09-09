import { CatData } from "@/lib/type"


type StateType = {
  current: number;
  likes: CatData[];
  favorites: CatData[];
  dislikes: CatData[];
}

type Action = | {type: 'NEXT_IMG', payload: number} | {type: 'INDEX', payload: number} | {type: 'LIKE', payload: CatData} | {type: 'FAVORITE', payload: CatData} | {type: 'DISLIKE', payload: CatData}

type ActionType = Action;

export const initialState = {
  current: 0,
  likes: [],
  favorites: [],
  dislikes: [],
}

export const ImgsReducer =(state: StateType, action: ActionType)=> {
  switch(action.type) {
   case 'NEXT_IMG': {
    return {
      ...state,
      current: state.current === action.payload - 1 ? 0 : state.current + 1
    }
   }
   case 'INDEX': {
    return {
      ...state,
      current: action.payload
    }
   }
   case 'LIKE': {
    if(!state.likes.some((image)=> image.id === action.payload.id)){
      return {
        ...state, 
        likes: [...state.likes, action.payload],
      }
    }
   }
   case 'FAVORITE': {
    if(!state.favorites.some((image)=> image.id === action.payload.id)) {
      return {
        ...state, 
        favorites: [...state.favorites, action.payload],
      }
    }
   }
   case 'DISLIKE': {
    if(!state.likes.some((image)=> image.id === action.payload.id)){
      return {
        ...state, 
        dislikes: [...state.favorites, action.payload],
      }
    }
   }
   default:
    return state;
  }
}