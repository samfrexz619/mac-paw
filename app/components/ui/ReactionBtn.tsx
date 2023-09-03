

interface Props {
  getReactions: (emoji: 'like' | 'favorite' | 'dislike')=> void;
}

const ReactionButton = ({ getReactions }: Props) => {
  return ( 
    <div className="h-[65px] rounded-20 w-52 border border-solid border-white bg-white">
      <div className="w-full grid grid-cols-3 h-full items-center gap-x-1 rounded-20">
        <button onClick={()=> getReactions('like')} className="bg-paw_green h-full text-white flex flex-col justify-center items-center rounded-s-20">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <use xlinkHref="/sprite.svg#happy" />
          </svg>
        </button>
        <button onClick={()=> getReactions('favorite')} className="h-full text-white bg-paw_pry flex items-center justify-center">
          <svg width="30" height="26" viewBox="0 0 30 26">
            <use xlinkHref="/sprite.svg#like" />
          </svg>
        </button>
        <button onClick={()=> getReactions('dislike')} className="h-full bg-paw_yellow text-white flex items-center justify-center rounded-e-20">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <use xlinkHref="/sprite.svg#sad" />
          </svg>
        </button>
      </div>
    </div>
   );
}
 
export default ReactionButton;