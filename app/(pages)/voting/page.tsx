// 'use client'
// import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput";


const Voting = () => {

  // const [input, setInput] = useState('')

  // const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
  //   const wordInput = e.target.value;
  //   setInput(wordInput)
  // }

  return ( 
    <div>
      <h1>voting</h1>
      <div className="py-4 px-12">
        <SearchInput
          placeholder="Search for breeds by name" 
        />
      </div>
      
    </div>
   );
}
 
export default Voting;