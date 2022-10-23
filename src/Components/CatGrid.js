import React from 'react';
import OneCat from './OneCat';

const CatGrid = ({twentyCats, getVotes}) => {

if (!twentyCats) return <p>loading...</p>;

  return (
    <section className="cat-grid">
        {twentyCats.map((cat, id) => (
            <OneCat key={id} cat={cat} getVotes={getVotes}/>
        ))}
    </section>
  )
}

export default CatGrid