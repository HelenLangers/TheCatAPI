import React, {useContext} from 'react';
import OneCat from './OneCat';
import CatContext from '../Context/CatContext';

const CatGrid = () => {

  const {twentyCats} = useContext(CatContext)

if (!twentyCats) return <p>Please wait a meowment …</p>;

const CatNodes = twentyCats.map((cat, id) => (
  <OneCat key={id} cat={cat}/>
))

  return (
    <main className="cat-grid">
      {CatNodes}
    </main>
  )
}

export default CatGrid