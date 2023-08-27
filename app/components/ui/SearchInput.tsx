

interface Props {
  placeholder: string;
}


const SearchInput = ({ placeholder }: Props) => {
  return ( 
    <div className="dark:bg-bgg bg-white w-full flex h-606 rounded-20 px-4 items-center">
      <input 
        type="search"
        placeholder={placeholder}
        className='w-full bg-inherit border-none outline-0 text-paw_grey block'
      />
      <span className='w-10 dark:bg-bgg h-10 text-paw_pry bg-hover_pry rounded-[10px] flex justify-center items-center'>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlinkHref={`/sprite.svg#search`} />
        </svg>
      </span>
    </div>
   );
}
 
export default SearchInput;