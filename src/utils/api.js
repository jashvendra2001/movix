import axios from "axios";

// const APIKEY="60033d7f0b72f7b4f623a9354451c84e"
const BASE_URL="https://api.themoviedb.org/3"
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzM2Q3ZjBiNzJmN2I0ZjYyM2E5MzU0NDUxYzg0ZSIsInN1YiI6IjY0OTE3YTBiMmY4ZDA5MDBlMzg3Mjk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CddPGeik_rIsYGcuyfpqZe9hO6MpahB07GmJ5PXh854"


export const FetchDataFromApi=async(url,params)=>{
  const headers={
    authorization:"bearer "+TMDB_TOKEN,
  };

try{
    const {data}=await axios.get(
        BASE_URL+url,{
            headers,
            params
        });
   return data; 
    }

catch(err){
    console.log(err);
    return err;


}

};
    

   




  
 


