import { Metadata } from "next";
import { fetchCatData } from "../(api)/services/cat";
import VotingContent from "./VotingContent";

export const metadata: Metadata = {
  title: 'voting'
}
const Voting = async() => {

  const data = await fetchCatData()
  
  return ( 
    <div className="py-5 bg-white rounded-20 mx-5 dark:bg-bgg">
      <VotingContent data={data} />
      <div></div>
    </div>
   );
}
 
export default Voting;