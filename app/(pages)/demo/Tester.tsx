'use client'
import { useCatItem } from "@/context/AppContext";
import { CatData } from "@/lib/type";

interface Props {
  data: CatData[]
}
const Tester = ({ data }: Props) => {

  const { state, dispatch } = useCatItem()

  dispatch({type: 'FETCH_DATA', payload: data})
  // console.log(state);
  

  return ( 
    <div>

    </div>
   );
}
 
export default Tester;