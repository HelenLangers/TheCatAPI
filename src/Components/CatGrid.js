import React from 'react';
import OneCat from './OneCat';

const CatGrid = ({twentyCats, setTwentyCats}) => {

if (!twentyCats) return <p>Please wait a meowment …</p>;

  return (
    <main className="cat-grid">
        {twentyCats.map((cat, id) => (
            <OneCat key={id} cat={cat} twentyCats={twentyCats} setTwentyCats={setTwentyCats}/>
        ))}
    </main>
  )
}

export default CatGrid