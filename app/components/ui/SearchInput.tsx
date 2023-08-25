import variable from '../Main.module.scss'

interface Props {
  placeholder: string;
}


const SearchInput = ({ placeholder }: Props) => {
  return ( 
    <div className={`${variable.textInput}`}>
      <input 
        type="search"
        placeholder={placeholder}
      />
      <span className='w-10 h-10 text-paw_pry bg-hover_pry rounded-[10px] flex justify-center items-center'>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlinkHref={`/sprite.svg#search`} />
        </svg>
      </span>
    </div>
   );
}
 
export default SearchInput;