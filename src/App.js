import React from "react";
import Webcam from "./WebcamContainer";
import { tw } from "twind";

function App() {
  return (
    <>
      <div className={tw`h-screen flex justify-center`}>
        <div className={tw`flex flex-col`}>
          <h1 className={tw`text-6xl font-light text-center text-blue-900 m-3`}>
            My Webcam
          </h1>

          <Webcam />
        </div>
      </div>
    </>
  );
}

export default App;
