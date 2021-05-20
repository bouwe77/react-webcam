import React, { useState } from "react";
import Webcam from "react-webcam";
import { tw } from "twind";

const webcamDimensions = {
  width: 300,
  height: 300,
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
    <>
      <div className={tw`flex justify-center m-3`}>
        {webcamDisabled ? (
          <WebcamPlaceholder
            width={webcamDimensions.width}
            height={webcamDimensions.height}
          />
        ) : (
          <div
            style={{
              width: `${webcamDimensions.width}px`,
              height: `${webcamDimensions.height}px`,
            }}
          >
            <Webcam
              className={sepia ? tw`filter sepia` : null}
              videoConstraints={webcamDimensions}
            />
          </div>
        )}
      </div>
      <div className={tw`flex justify-center m-3`}>
        <Button onClick={toggleDisableWebcam}>
          {webcamDisabled ? "Enable Webcam" : "Disable Webcam"}
        </Button>

        <Button disabled={webcamDisabled} onClick={toggleSepia}>
          {sepia ? "Color" : "Sepia"}
        </Button>
      </div>
    </>
  );
}

function WebcamPlaceholder({ width, height }) {
  return (
    <div
      className={tw`h-screen flex items-center justify-center text-white text-xs`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "black",
      }}
    >
      your webcam is disabled
    </div>
  );
}

function Button({ children, ...rest }) {
  return (
    <button
      className={tw`m-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-40`}
      {...rest}
    >
      {children}
    </button>
  );
}
