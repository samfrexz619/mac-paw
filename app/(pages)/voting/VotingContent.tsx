'use client'
import { useReducer } from "react";
import { usePathname } from "next/navigation";
import UserActionLogs from "./UserActionLogs";
import ImageSlider from "@/components/ui/ImageSlider";
import { CatData } from "@/lib/type";
import { VoteReducer, initialState } from "./VoteReducer";



interface Props {
  data: CatData[]
}


const VotingContent = ({data}: Props) => {

  const [state, dispatch] = useReducer(VoteReducer, initialState)

  const handlePrevImage =()=> {
    dispatch({type: 'NEXT_IMG', payload: data.length})
  }

  const handleCurrent =(idx: number)=> {
    dispatch({type: 'INDEX', payload: idx})
  }

  const handleReactions =(reaction: 'like' | 'favorite' | 'dislike')=> {
    data?.map((imgId, idx)=> {
      if(state.current === idx) {
        switch(reaction) {
          case 'like': 
            dispatch({type: 'LIKE', payload: imgId})
            break;
          case 'dislike':
            dispatch({type: 'DISLIKE', payload: imgId})
            break;
          case 'favorite':
            dispatch({type: 'FAVORITE', payload: imgId})
            break;
          default:
            break;
        }
      }
    })
  }

  console.log(state.reaction)
  // console.log(state.dislikes)
  // console.log(state.favorites)

  const pathname = usePathname()

  return ( 
    <div className="px-7">
      <div className="w-full">
        <ImageSlider 
          data={data} 
          indicator={false} 
          reaction={true} 
          currentSlide={state.current}
          prevImage={handlePrevImage}
          setCurrent={handleCurrent}
          pathname={pathname}
          getReactions={handleReactions}
        />
      </div>
      <div className="py-10">
       {state.likes?.length > 0 && 
          state.likes?.map(like => (
          <UserActionLogs 
            key={like.id} 
            imgId={like.id}
            emojis={state.reaction}
          /> 
        ))
       }
       {state.favorites?.length > 0 && 
          state.favorites?.map(favr => (
          <UserActionLogs 
            key={favr.id} 
            imgId={favr.id}
            emojis={state.reaction}
          /> 
        ))
       }
       {state.dislikes?.length > 0 && 
          state.dislikes?.map(dsl => (
          <UserActionLogs 
            key={dsl.id} 
            imgId={dsl.id}
            emojis={state.reaction}
          /> 
        ))
       }
      </div>
    </div>
   );
}
 
export default VotingContent;