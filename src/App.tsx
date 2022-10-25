import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from './pages/list';
import AddPage from './pages/add';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListPage />}/>
      <Route path="/radio-station" element={<ListPage />}/>
      {/* <Route path="/radio-station/[해당페이지]" element={<DetailPage />}/> */}
      <Route path="/add-radio-station" element={<AddPage />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
