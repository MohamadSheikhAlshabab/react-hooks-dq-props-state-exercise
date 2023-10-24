import React, { useState,useEffect } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

function BabyHog(props) {
  const [img, setImg] = useState(normalBaby);
  const [weight,setWeight] = useState(10);

  function handleChangeWeight(e) {
    if (e.target.name === "+"){
      setWeight(prevState => prevState + 10)
    }else {
      setWeight(prevState => prevState - 10)
    }
  }

  function handleChangeEyeColor() {
    return setImg((img) => {
      if (props.eyeColor === "sun") {
        setImg(SunBaby);
      } else if (props.eyeColor === "blue") {
        setImg(BlueBaby);
      } else if (props.eyeColor === "glowing") {
        setImg(GlowingBaby);
      } else{
        setImg(normalBaby);
      }
    });
  }

  useEffect(() => {
    handleChangeEyeColor();
  }, [props.eyeColor]);
  
  const styleLi = {
    border: `1px dashed black`,
    flexBasis: '33.333333%'
  }

  return (
    <li className="hogbabies" style={styleLi} >
      <h1>Name: <br/>{props.name}</h1>
      <h3>Weight: {weight > 1000 ? weight / 1000 + ' Tons': weight + ' Kg'}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={img}
          style={{ margin:'1rem',height: `${ weight > 100 ? weight / 10 : weight * 2 }px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
