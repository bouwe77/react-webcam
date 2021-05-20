import React, { useState } from "react";
import Webcam from "react-webcam";
import { tw } from "twind";

const webcamDimensions = {
  width: 300,
  height: 300,
};

const videoConstraints = {
  ...webcamDimensions,
};

export default function WebcamContainer() {
  const [webcamDisabled, setWebcamDisabled] = useState(true);
  const [sepia, setSepia] = useState(false);

  function toggleDisableWebcam() {
    setWebcamDisabled(!webcamDisabled);
  }

  function toggleSepia() {
    setSepia(!sepia);
  }

  return (
    <div class={tw``}>
      <div className={tw`flex justify-center m-3`}>
        <Button onClick={toggleDisableWebcam}>
          {webcamDisabled ? "Enable Webcam" : "Disable Webcam"}
        </Button>

        <Button disabled={webcamDisabled} onClick={toggleSepia}>
          {sepia ? "Color" : "Sepia"}
        </Button>
      </div>
      <div className={tw`flex justify-center m-3`}>
        {webcamDisabled ? (
          <WebcamPlaceholder />
        ) : (
          <Webcam
            className={sepia ? "sepia" : null}
            videoConstraints={videoConstraints}
          />
        )}
      </div>
    </div>
  );
}

function WebcamPlaceholder() {
  return (
    <div
      style={{
        width: `${webcamDimensions.width}px`,
        height: `${webcamDimensions.width}px`,
        backgroundColor: "black",
      }}
    />
  );
}

function Button({ children, disabled, ...rest }) {
  return (
    <button
      className={tw`m-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-40`}
      {...rest}
    >
      {children}
    </button>
  );
}
