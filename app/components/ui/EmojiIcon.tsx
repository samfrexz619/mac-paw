


interface Prop {
  name: string;
}
const EmojiIcons = ({ name }: Prop) => {
  return ( 
    <span>
      {
        name === 'happy' 
        ? <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlinkHref="/sprite.svg#happy" />
          </svg>
        : name === 'like'
        ? <svg width='30' height='26' viewBox='0 0 30 26'>
            <use xlinkHref="/sprite.svg#like" />
          </svg>
        : <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlinkHref="/sprite.svg#sad" />
          </svg>
      }
    </span>
   );
}
 
export default EmojiIcons;