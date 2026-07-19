import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./router/Home";
import Service from "./router/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </>
  );
}

export default App;
