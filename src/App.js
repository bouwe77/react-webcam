import React, { useState } from "react";
import Webcam from "react-webcam";

const webcamDimensions = {
  width: 300,
  height: 300,
};

const videoConstraints = {
  ...webcamDimensions,
};

function App() {
  const [webcamDisabled, setWebcamDisabled] = useState(false);
  const [sepia, setSepia] = useState(true);

  function toggleDisableWebcam() {
    setWebcamDisabled(!webcamDisabled);
  }

  function toggleSepia() {
    setSepia(!sepia);
  }

  return (
    <>
      <h1>My Webcam :)</h1>

      <div>
        <button onClick={toggleDisableWebcam}>
          {webcamDisabled ? "Enable Webcam" : "Disable Webcam"}
        </button>
        <br />{" "}
        <button onClick={toggleSepia}>{sepia ? "Color" : "Sepia"}</button>
      </div>

      {webcamDisabled ? (
        <div
          style={{
            width: `${webcamDimensions.width}px`,
            height: `${webcamDimensions.width}px`,
            backgroundColor: "black",
          }}
        />
      ) : (
        <Webcam
          className={sepia ? "sepia" : null}
          videoConstraints={videoConstraints}
        />
      )}
    </>
  );
}

export default App;
