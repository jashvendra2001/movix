import './App.css';
import { useEffect } from 'react';
import { FetchDataFromApi } from './utils/api';

function App() {
  useEffect(()=>{
    testApi();
    
    
  },[])

  const testApi=()=>{
        
      FetchDataFromApi("/movie/popular").then((res)=>{
             console.log(res);
      })
       

  }


  return (
    <>

    
    </>
  );

  
}

export default App;
