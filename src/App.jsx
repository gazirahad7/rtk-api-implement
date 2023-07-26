import Add from "./components/Add";
import Navbar from "./components/Navbar";
import UpdatePost from "./components/Update";
import ViewPost from "./components/ViewPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ViewPost /> */}
        {/* <Add /> */}
        <Routes>
          <Route exact path="/" element={<ViewPost />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
