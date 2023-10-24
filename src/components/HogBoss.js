import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("normal");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  const eyeColors = ['normal','blue','sun','glowing'];
  const eyeColorInput = eyeColors.map( eyeColor => {
    return ( 
      <>
        <input
          key={eyeColors}
          type="radio"
          name="eyeColor"
          value={eyeColor}
          onChange={handleChangeEyeColor}
        />
        {eyeColor[0].toUpperCase() +  eyeColor.slice(1,eyeColor.length)}
        <br />
        <br />
      </>
  )
  })

  const babyHog = offspring.map (hog => {
    return (
      <BabyHog key={hog.id} name={hog.name} eyeColor={eyeColor} />
    )
  })
  const styleUlList = {
    display : 'flexbox',
    flexWrap: 'wrap',
    gap: '1rem'
  };
  return (
    <div>
      {eyeColorInput}
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist" style={styleUlList}>
        {babyHog}
      </ul>
    </div>
  );
}

export default HogBoss;
