import Home from "../src/components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detailpage/detail";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
