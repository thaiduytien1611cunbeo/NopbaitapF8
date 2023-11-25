import React, { useRef, useState } from "react";
import "./slider.scss";
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  const maxNumber = useSelector((state) => state.maxNumber);
  const refProgress = useRef();

  const [widthProgress, setWidthProgress] = useState(
    `${(number / maxNumber) * 100}%`
  );

  const style = {
    color: "#285E61",
    fontSize: "30px",
    fontWeight: "500",
    margin: "20px 0",
  };

  const handleClick = (e) => {
    const clientX = e.clientX;
    const clientWidth = refProgress.current.clientWidth;
    let valueWidth = ((clientX - 13.5) / clientWidth) * 100;
    console.log(valueWidth);

    dispatch({
      type: "Slider/setNumber",

      payload: {
        number: Math.ceil((maxNumber * valueWidth) / 100),
      },
    });

    valueWidth = `${valueWidth}%`;
    setWidthProgress(valueWidth);
  };

  return (
    <div>
      {console.log("render")}
      <div className="slider-title" style={style}>
        Bạn cần tìm kiếm một số từ 1 đến {number}
      </div>

      <div className="progress" onClick={handleClick} ref={refProgress}>
        <div className="progress-bar" style={{ width: widthProgress }}>
          <span
            className="btn tooltip"
            data-text={number}
            onClick={(e) => e.stopPropagation()}
          ></span>
        </div>
      </div>

      <div className="progress-number">
        <span>0</span>
        <span>{maxNumber / 4}</span>
        <span>{maxNumber / 2}</span>
        <span>{maxNumber * 0.75}</span>
        <span>{maxNumber}</span>
      </div>
    </div>
  );
};

export default Slider;
