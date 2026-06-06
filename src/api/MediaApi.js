import axios from "axios"

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_API_KEY;


// Function for getting photos
export async function fetchPhotos(query,page=1,per_page=20) {
  const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`},
  })

  // console.log("Axios Response:", res);
  return res.data
  
}

// Function for getting videos

export async function fetchVideos(query,per_page=20) {
  const res = await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:PEXELS_KEY},
  })
  

  return res.data
  
}

//Function for getting GIF's

export async function fetchGIF(query) {
  const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
    params:{
      api_key:GIPHY_KEY,
      q:query,
      limit:20
    }
  })

  return res.data
  
}