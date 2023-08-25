import variable from '../Main.module.scss'
import Icon from './Icon';



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
      <span>
        <Icon 
          iconName='search'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        />
      </span>
    </div>
   );
}
 
export default SearchInput;