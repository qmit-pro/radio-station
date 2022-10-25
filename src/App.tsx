import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import ListPage from './pages/list';
import NewPage from "./pages/new";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListPage />}/>
      <Route path="/radio-stations" element={<ListPage />}/>
      <Route path="/radio-stations/new" element={<NewPage />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
