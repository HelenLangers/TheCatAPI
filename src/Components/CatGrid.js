import React from 'react';

const CatGrid = ({twentyCats}) => {

if (!twentyCats) return <p>loading...</p>;

  return (
    <section className="cat-grid">
        {twentyCats.map((cat, id) => (
            <OneCat key={id} cat={cat} />
        ))}
    </section>
  )
}

export default CatGrid