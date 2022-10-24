import {useState, useEffect} from 'react';
import config from './config'
import CatGrid from './Components/CatGrid';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CatContext from './Context/CatContext';


function App() {

  const [twentyCats, setTwentyCats] = useState([])

  useEffect(() => {
    loadTwentyCats()
  }, [])

  const loadTwentyCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=20&order=DESC", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-api-key": config.api_key}
        })
    .then(res => res.json())
    .then((data) => {
      const modifiedData = data.map((cat) => {
        cat.votes = 0
        return cat;
      })
      setTwentyCats(modifiedData)
    })
    .catch(err => console.log('Error', err));
  }

  return (
    <>
      <Header/>
      <CatContext.Provider value={{twentyCats, setTwentyCats}}>
        <CatGrid setTwentyCats={setTwentyCats}/>
      </CatContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
