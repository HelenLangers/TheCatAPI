import React from 'react';
import OneCat from './OneCat';

const CatGrid = ({twentyCats, setTwentyCats}) => {

if (!twentyCats) return <p>loading...</p>;

  return (
    <section className="cat-grid">
        {twentyCats.map((cat, id) => (
            <OneCat key={id} cat={cat} twentyCats={twentyCats} setTwentyCats={setTwentyCats}/>
        ))}
    </section>
  )
}

export default CatGrid