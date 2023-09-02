

interface Props {
  iconName: string;
}

const ReactionIcons = ({ iconName }: Props) => {
  return ( 
    <span>
      {iconName === 'like' 
        ? <svg width="30" height="26" viewBox="0 0 30 26">
          <use xlinkHref="/sprite.svg#like" />
        </svg>
        : iconName === 'favorite'
        ? <svg width="30" height="30" viewBox="0 0 30 30">
          <use xlinkHref="/sprite.svg#happy" />
        </svg>
        :<svg width="30" height="30" viewBox="0 0 30 30">
          <use xlinkHref="/sprite.svg#sad" />
        </svg>
      }
    </span>
   );
}
 
export default ReactionIcons;