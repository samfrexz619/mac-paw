import ImageSlider from "@/components/ui/ImageSlider";
import Banner from "./Banner";


const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

const apiKey = 'live_o4VNf4DjdlXQTVV4Ry2l8qL1qYOQPD1FhsESP0YrH83oa2uFGsQqPZsYfbevlZ6F'

const headers = {
  'x-api-key' : `Bearer ${apiKey}`
};

async function getData() {
  const res = await fetch(url, {headers})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Voting = async() => {

  const data = await getData()
  
  return ( 
    <div className="py-5 bg-white rounded-20 mx-5 dark:bg-bgg">
      <div className="px-7">
        <ImageSlider data={data} indicator={false} reaction={true} />
      </div>
      
    </div>
   );
}
 
export default Voting;