import {useState, useEffect} from 'react';
import CatGrid from './Components/CatGrid';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';


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
          "x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3"}
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
    <div className="App">
      <Header/>
      <CatGrid twentyCats={twentyCats} setTwentyCats={setTwentyCats}/>
      <Footer/>
    </div>
  );
}

export default App;
