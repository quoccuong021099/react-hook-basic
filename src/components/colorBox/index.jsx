import { useState } from "react";
import "./ColorBox.scss";

const getRandomColor = () => {
  const COLOR_LIST = ["blue", "red", "yellow", "pink", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deppink";
    return initColor;
  });

  const handleBoxClick = () => {
    // get random color -> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
};

export default ColorBox;
