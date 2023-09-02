import ImageSlider from "@/components/ui/ImageSlider";
import { fetchCatData } from "../(api)/services/cat";
import VotingContent from "./VotingContent";


const Voting = async() => {

  const data = await fetchCatData()
  
  return ( 
    <div className="py-5 bg-white rounded-20 mx-5 dark:bg-bgg">
      <VotingContent data={data} />
      {/* <div className="px-7">
        <ImageSlider 
          data={data} 
          indicator={false} 
          reaction={true} 
        />
      </div> */}
      <div></div>
    </div>
   );
}
 
export default Voting;