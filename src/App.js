import {useState, useEffect} from 'react';


function App() {

  const [twentyCats, setTwentyCats] = useState([])

  useEffect(() => {
    loadTwentyCats()
  }, [])

  const loadTwentyCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=20&order=DESC", {
        method: 'GET',
        header: {"x-api-key": env.API_KEY}
        })
    .then(res => res.json())
    .then((data) => {
      const modifiedData = data.map((cat) => {
        cat.votes = 0
        return cat;
      })
      setTwentyCats(modifiedData)
      console.log(modifiedData)
      console.log(env.API_KEY)
    })
    .catch(err => console.log('Error', err));
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
