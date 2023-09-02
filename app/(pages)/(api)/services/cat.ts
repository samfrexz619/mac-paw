

const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

const apiKey = 'live_o4VNf4DjdlXQTVV4Ry2l8qL1qYOQPD1FhsESP0YrH83oa2uFGsQqPZsYfbevlZ6F'

const headers = {
  'x-api-key' : `Bearer ${apiKey}`
};

export async function fetchCatData() {
  const res = await fetch(url, {headers})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}