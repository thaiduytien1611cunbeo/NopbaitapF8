import React from "react";
import Default from "./pages/Default";
import Title from "./components/Title";
import Countdown from "./components/Countdown";
import Slider from "./components/slider/Slider";
import Input from "./components/input/Input";

const App = () => {
  const style = { padding: "30px 20px" };

  return (
    <>
      <Default />
      <main style={style}>
        <Title />
        <Countdown />
        <Slider />
        <Input />
      </main>
    </>
  );
};

export default App;
