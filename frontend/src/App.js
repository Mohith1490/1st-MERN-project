import Create from "./components/Create";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Create/>} />
      <Route exact path="/all" element={<Read/>} />
      <Route exact path="/update" element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
