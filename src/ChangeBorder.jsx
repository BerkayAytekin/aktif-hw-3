import React, { useState } from "react";

function ChangeBorder() {
  const [inwidht, setInWidth] = useState("");
  const [inheight, setInHeight] = useState("");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const chng = () => {
    setWidth(Number(inwidht));
    setHeight(Number(inheight));
  };

  return (
    <>
      <div>
        <label htmlFor="">Width</label>
        <input type="text" onChange={(e) => setInWidth(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Height</label>
        <input type="text" onChange={(e) => setInHeight(e.target.value)} />
      </div>
      <button onClick={() => chng()}>Change</button>
      <div
        style={{
          width: width,
          height: height,
          border: "1px solid black",
        }}
      ></div>
    </>
  );
}

export default ChangeBorder;
