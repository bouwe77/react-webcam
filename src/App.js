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
  const [webcamDisabled, setWebcamDisabled] = useState(true);

  function toggleDisableWebcam() {
    setWebcamDisabled(!webcamDisabled);
  }

  return (
    <>
      <h1>My Webcam :)</h1>

      <div>
        <button onClick={toggleDisableWebcam}>ENABLE/DISABLE</button>
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
        <Webcam videoConstraints={videoConstraints} />
      )}
    </>
  );
}

export default App;
